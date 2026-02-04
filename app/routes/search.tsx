import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Link, useLoaderData } from "react-router";
import { getAllBlogPosts, getAllProducts, type BlogPost, type Product } from "~/utils/content.server";
import type { Route } from "./+types/search";

export function meta({ location }: Route.MetaArgs) {
    const q = new URLSearchParams(location.search).get("q");
    return [
        { title: q ? `Search results for "${q}" - WellAfterSixty` : "Search - WellAfterSixty" },
        { name: "description", content: "Search results for WellAfterSixty articles and products." },
    ];
}

export async function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q")?.toLowerCase() || "";

    if (!q) {
        return { posts: [], products: [], q: "" };
    }

    const allPosts = getAllBlogPosts();
    const allProducts = getAllProducts();

    const filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.body.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
    );

    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q)
    );

    return { posts: filteredPosts, products: filteredProducts, q };
}

export default function Search({ loaderData }: Route.ComponentProps) {
    const { posts, products, q } = loaderData;
    const hasResults = posts.length > 0 || products.length > 0;

    return (
        <>
            <Header />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[60vh]">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-navy mb-2">Search Results</h1>
                    {q && (
                        <p className="text-navy/70">
                            Showing results for <span className="font-bold">"{q}"</span>
                        </p>
                    )}
                </div>

                {!q ? (
                    <div className="text-center py-12 text-navy/50">
                        <span className="material-symbols-outlined text-6xl mb-4 text-navy/20">search</span>
                        <p className="text-lg">Enter a search term to find articles and products.</p>
                    </div>
                ) : !hasResults ? (
                    <div className="text-center py-12 text-navy/50">
                        <span className="material-symbols-outlined text-6xl mb-4 text-navy/20">sentiment_dissatisfied</span>
                        <p className="text-lg">No results found for "{q}".</p>
                        <p className="mt-2 text-sm">Try different keywords or check your spelling.</p>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {/* Blog Posts Results */}
                        {posts.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">article</span>
                                    Articles ({posts.length})
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {posts.map((post: BlogPost) => (
                                        <Link
                                            key={post.slug}
                                            to={`/blog/${post.slug}`}
                                            className="group flex flex-col bg-surface-light rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                        >
                                            <div className="relative aspect-[16/10] overflow-hidden">
                                                <div
                                                    className="w-full h-full bg-cover bg-center"
                                                    style={{ backgroundImage: `url('${post.image}')` }}
                                                />
                                            </div>
                                            <div className="p-4 flex flex-col flex-grow">
                                                <div className="text-xs font-bold text-primary uppercase mb-1">{post.category}</div>
                                                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-navy/70 line-clamp-2">{post.excerpt}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Products Results */}
                        {products.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">shopping_bag</span>
                                    Products ({products.length})
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {products.map((product: Product) => (
                                        <div
                                            key={product.slug}
                                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col"
                                        >
                                            <div className="flex gap-4 items-start mb-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-20 h-20 object-cover rounded-lg bg-gray-50"
                                                />
                                                <div>
                                                    <h3 className="font-bold text-navy line-clamp-2 mb-1">{product.title}</h3>
                                                    <div className="text-yellow-400 text-sm">{"★".repeat(Math.round(product.rating))}</div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-navy/70 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                                            <a
                                                href={product.affiliateUrl || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-bold py-2 rounded-lg text-center text-sm transition-colors"
                                            >
                                                View Product
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
