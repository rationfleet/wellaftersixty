import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Link, useParams } from "react-router";
import { getBlogPost } from "~/utils/content.server";
import type { Route } from "./+types/blog.$slug";

export async function loader({ params }: Route.LoaderArgs) {
    const post = getBlogPost(params.slug);
    if (!post) {
        throw new Response("Not Found", { status: 404 });
    }
    return { post };
}

export function meta({ data }: Route.MetaArgs) {
    if (!data?.post) {
        return [{ title: "Post Not Found - WellAfterSixty" }];
    }
    return [
        { title: `${data.post.title} - WellAfterSixty` },
        { name: "description", content: data.post.excerpt },
    ];
}

// Simple markdown to HTML converter
function renderMarkdown(markdown: string) {
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            elements.push(
                <ul key={`list-${elements.length}`} className="list-disc ml-6 mb-4 text-navy/80 space-y-1">
                    {listItems.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                    ))}
                </ul>
            );
            listItems = [];
        }
        inList = false;
    };

    const formatInline = (text: string) => {
        return text
            .replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy font-semibold">$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>');
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('## ')) {
            flushList();
            elements.push(
                <h2 key={i} className="text-2xl font-bold text-navy mt-8 mb-4">
                    {line.replace('## ', '')}
                </h2>
            );
        } else if (line.startsWith('### ')) {
            flushList();
            elements.push(
                <h3 key={i} className="text-xl font-bold text-navy mt-6 mb-3">
                    {line.replace('### ', '')}
                </h3>
            );
        } else if (line.startsWith('- ') || line.startsWith('* ')) {
            inList = true;
            listItems.push(line.replace(/^[-*] /, ''));
        } else if (line.match(/^\d+\. /)) {
            flushList();
            elements.push(
                <p key={i} className="text-lg text-navy/80 mb-2 ml-4" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
            );
        } else if (line.trim() === '') {
            flushList();
        } else if (line.trim()) {
            flushList();
            elements.push(
                <p key={i} className="text-lg text-navy/80 mb-4" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
            );
        }
    }

    flushList();
    return elements;
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
    const { post } = loaderData;

    return (
        <>
            <Header />
            <main className="flex-grow">
                {/* Hero Image */}
                <div className="w-full h-[400px] relative">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${post.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Article Content */}
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative">
                    <div className="bg-surface-light rounded-lg shadow-lg p-8 sm:p-12">
                        {/* Category */}
                        <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                            {post.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <div>
                                <p className="font-bold text-navy">{post.author}</p>
                                {post.authorTitle && <p className="text-sm text-navy/60">{post.authorTitle}</p>}
                            </div>
                            <div className="ml-auto text-right text-sm text-navy/60">
                                <p>{post.date}</p>
                                <p>{post.readTime}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            {renderMarkdown(post.body)}
                        </div>

                        {/* Back to Blog */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Back to All Articles
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Newsletter CTA */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="bg-primary rounded-lg p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
                        <p className="text-white/90 mb-6">Get more health tips delivered to your inbox every week.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg text-navy border-none focus:ring-2 focus:ring-white/50"
                            />
                            <button className="bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy/80 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
