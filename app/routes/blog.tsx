import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Link } from "react-router";

// Sample blog posts data - in a production app, these would come from the /content/blog folder
const blogPosts = [
    {
        slug: "strength-training-guide",
        title: "Strength Training After 65: The Ultimate Guide to Bone Health",
        excerpt: "Building muscle isn't just for bodybuilders. Discover how light resistance training can significantly improve bone density and reduce fall risk.",
        category: "Mobility & Fitness",
        author: "Dr. Sarah Jenkins",
        date: "Oct 15, 2023",
        readTime: "6 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKzt4SyTCXBnfkElTjmJ3uRVXJvThQ1xjMWUBH5Nl4lmZiWclEEo3P5TWpNgMk1OXyc98iXPWeLdqRfowI43mJC-dvWQWwpPEshco1Ad97lhQv21UaoBBUxMdanrUVP794zbebyAxSjIzqf4Ka-YnKaXNm0bdQnxziiMqTMpUrsy6hc-ZgJWpWhapRWgu0H_I9K-HS_qKHoH427GbP2e8-hs2xiQyTulh2gu2cmsd3-KAGkNl9QAoJZeLqBaSe3BFyroQ6WW3BeICH",
    },
    {
        slug: "heart-healthy-diet",
        title: "Heart-Healthy Diet Plans for Beginners",
        excerpt: "Your heart deserves the best nutrition. Learn about the Mediterranean diet and other approaches proven to support cardiovascular health.",
        category: "Nutrition",
        author: "Maria Santos, RD",
        date: "Oct 14, 2023",
        readTime: "4 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCSY-OJTZz7NCz-GEC2pZf5trQvm5Kv_UNg6x6mxEKYkZK2Gy9X9WQynNGaAZ9W2tlbnqtIh5lOFxe6p7vkJfitatXb9zMRkC_ah5inyU9k77HoMnMLen5KWJnlnAe4HVL2JRuxcfbnyEB4TLblmU6igHq36AQAoxv3R6xVDvd91uWTiCSoYVQjH5GuGFMRJ1XNZk5Md8iKOFAdP-6XCJmMkcJk4TN6TkrS6SjAYmNbpSiKPKytXd17QVlKUWQ0RoX5lcZrzhZf0vW",
    },
    {
        slug: "senior-friendly-tablets",
        title: "Top 5 Senior-Friendly Tablets in 2024",
        excerpt: "Finding the right tablet can keep you connected with family and the world. We've tested the most accessible options for seniors.",
        category: "Senior Tech",
        author: "James Park",
        date: "Oct 13, 2023",
        readTime: "5 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYhHzX3-UR8neCBPNzcIPEARkGl9sFwpti5F1f66zNo38mLkYjcfJwp7ZxCBlwDuQ3USiOi6XSDCpeeA4NDGG7X27YLX_yNybuAAN2h_kd-o0IeI5Fm8FWeuSFTb_FQFqmTg_fLn4Kq-IHg3f5-VoL2sQO3NN-M_1Fq9MhL7_nS4mYLPbNL_RQhrQN66UEOeOwAaeYWbZjiGjPz3l5lUrLUda3HzphocldeZ5ucp9cpyPXJqj0xeAB7KEtQN-VlLaUOikqDzmcho9E",
    },
    {
        slug: "low-impact-exercises",
        title: "The Best Low-Impact Exercises for Joint Pain",
        excerpt: "Swimming and cycling are fantastic, but have you tried Tai Chi? Explore exercises that are kind to your knees.",
        category: "Fitness",
        author: "Dr. Michael Chen",
        date: "Oct 12, 2023",
        readTime: "5 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpK932ah4AmxZaI1ElkS3C80QkxOPJScKSNNZ_G0WrW7e7k2pPSiq1r-UwO2YFJi1PtVM78POLB2LzC88JBXaqLLiB4QpwnSOBjiB7g2cGYtCDMNcAQ7VOC7PdddDKK8NHQL70XYCeJ9I6725ZNiKso06MOtSdcLfVclLlLNl2pMLunJTIoOYSu4NYh7mqraTU4xMLB2wbqePfEdabjEhXmnzqNK1CXnYu4G_qzMCcP3urqk2nS1tLes_VpGBiyYg2Wcscm9e1N0pB",
    },
    {
        slug: "medicare-changes",
        title: "Navigating Medicare: Changes You Need to Know",
        excerpt: "Understanding the new enrollment periods and coverage updates for the upcoming fiscal year.",
        category: "Chronic Care",
        author: "Lisa Thompson",
        date: "Oct 10, 2023",
        readTime: "8 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfcd7whPwPA-n01qvWFxSu76TrogpeQZtABoAam8W9UoiI01xmPDUJuHygMmwFb2WsY8GBx5Pe-pVaJ8k_4jurlOIwanYFOvpBG4BcT47JgPxcl__SeSuykukJhYGfjgP8u2MIlxDl6MYFI2AHwMxlf_GKWPbnobgtGspYvawRHyUX7v05swzyQTkPb6q-wX3qdhhoynjQCUqv_MnGOXfUnrOELEwlUeJfSyvXhQAEW0xzje0LEbFInstB16gWlXQ-Z8j7KBa0u6Q5",
    },
    {
        slug: "social-connection-longevity",
        title: "Social Connection: The Secret to Longevity?",
        excerpt: "New studies suggest that maintaining a strong social circle is as important as diet and exercise.",
        category: "Lifestyle",
        author: "Dr. Emily Watson",
        date: "Oct 08, 2023",
        readTime: "4 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOs2Ga_4BZz-gyYkYx2IxsWqi_Br3_zOSE2y85_jWTaFpgHOZypDPl1LeH0MbIIjolaQnNzhKu78chJR5LUcDlqyr_-eXTx0R0yy4O1RzRVMTZRQUsptHBbRpfH95jooutZB45q6hgX54DjdDkO2vODkwO9wOoChsTxxVfLS7ylsyx9mPHr0ZZjBnVrMxgntgW4h7mAJx5WaRiWU-sdIF4KemWqO2KBhBYLqS59t2PCKDGS3BZYaBUp1pG2Kxod0UteOcc9oV6kuy4",
    },
];

export function meta() {
    return [
        { title: "Blog - WellAfterSixty" },
        { name: "description", content: "Health and wellness articles for seniors - covering fitness, nutrition, chronic care, technology, and lifestyle." },
    ];
}

export default function Blog() {
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
                    {blogPosts.map((post) => (
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

                {/* Load More */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                        Load More Articles
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
}
