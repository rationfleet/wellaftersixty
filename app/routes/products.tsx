import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Link } from "react-router";
import { getAllProducts } from "~/utils/content.server";
import type { Route } from "./+types/products";

export function meta() {
    return [
        { title: "Products - WellAfterSixty" },
        { name: "description", content: "Senior-friendly products recommended by our health experts. We research and test to find the best options for your wellness journey." },
    ];
}

export async function loader() {
    const products = getAllProducts();
    return { products };
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`material-symbols-outlined text-[20px] ${star <= rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                >
                    star
                </span>
            ))}
        </div>
    );
}

export default function Products({ loaderData }: Route.ComponentProps) {
    const { products } = loaderData;

    return (
        <>
            <Header />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Recommended Products</h1>
                    <p className="text-lg text-navy/70 max-w-2xl mx-auto">
                        Expert-vetted products to support your health and wellness journey. We may earn a commission from links on this page.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.slug}
                            className="bg-surface-light rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-square overflow-hidden bg-gray-50">
                                <div
                                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url('${product.image}')` }}
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                                        {product.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-navy mb-2">{product.title}</h2>
                                <p className="text-sm text-navy/70 mb-4 line-clamp-2">{product.description}</p>

                                <div className="flex items-center justify-between mb-4">
                                    <StarRating rating={product.rating} />
                                    {product.price && (
                                        <span className="text-lg font-bold text-primary">{product.price}</span>
                                    )}
                                </div>

                                <a
                                    href={product.affiliateUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-primary hover:bg-primary/90 text-white text-center font-bold py-3 rounded-lg transition-colors"
                                >
                                    View on Amazon
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="text-center py-16 text-navy/50">
                        <p>No products yet. Add some in the admin panel!</p>
                        <Link to="/admin/index.html" className="text-primary font-bold hover:underline mt-4 inline-block">
                            Go to Admin Panel →
                        </Link>
                    </div>
                )}

                {/* Trust Section */}
                <section className="mt-16 bg-surface-light rounded-lg shadow-sm border border-gray-100 p-8 text-center">
                    <h3 className="text-2xl font-bold text-navy mb-4">Why Trust Our Recommendations?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-primary/10 p-4 rounded-full text-primary mb-3">
                                <span className="material-symbols-outlined text-3xl">science</span>
                            </div>
                            <h4 className="font-bold text-navy mb-1">Evidence-Based</h4>
                            <p className="text-sm text-navy/60">All products backed by research</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-primary/10 p-4 rounded-full text-primary mb-3">
                                <span className="material-symbols-outlined text-3xl">verified</span>
                            </div>
                            <h4 className="font-bold text-navy mb-1">Expert Reviewed</h4>
                            <p className="text-sm text-navy/60">Vetted by healthcare professionals</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-primary/10 p-4 rounded-full text-primary mb-3">
                                <span className="material-symbols-outlined text-3xl">accessibility_new</span>
                            </div>
                            <h4 className="font-bold text-navy mb-1">Senior-Friendly</h4>
                            <p className="text-sm text-navy/60">Easy to use and accessible</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
