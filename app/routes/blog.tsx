import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Link } from "react-router";
import { getAllBlogPosts } from "~/utils/content.server";
import type { Route } from "./+types/blog";

export function meta() {
    return [
        { title: "Blog - WellAfterSixty" },
        { name: "description", content: "Health and wellness articles for seniors - covering fitness, nutrition, chronic care, technology, and lifestyle." },
    ];
}

export async function loader() {
    const posts = getAllBlogPosts();
    return { posts };
}

export default function Blog({ loaderData }: Route.ComponentProps) {
    const { posts } = loaderData;

    return (
        <>
            <Header />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Our Blog</h1>
                    <p className="text-lg text-navy/70 max-w-2xl mx-auto">
                        Evidence-based health articles written by medical professionals, specifically for adults over 60.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {["All", "Mobility & Fitness", "Nutrition", "Chronic Care", "Senior Tech", "Lifestyle"].map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === "All"
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-navy/70 hover:bg-primary/10 hover:text-primary"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group flex flex-col bg-surface-light rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url('${post.image}')` }}
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-white/90 backdrop-blur-sm text-navy text-xs font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow p-5">
                                <h2 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-navy/70 mb-4 line-clamp-2 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-navy/50">
                                    <span>{post.author}</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-16 text-navy/50">
                        <p>No blog posts yet. Add some in the admin panel!</p>
                        <Link to="/admin/index.html" className="text-primary font-bold hover:underline mt-4 inline-block">
                            Go to Admin Panel →
                        </Link>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
