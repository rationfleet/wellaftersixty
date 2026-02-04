import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Link, useParams } from "react-router";
import type { Route } from "./+types/blog.$slug";

// Sample blog post content - in production, this would come from markdown files
const blogPostsContent: Record<string, {
    title: string;
    excerpt: string;
    category: string;
    author: string;
    authorTitle: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
}> = {
    "strength-training-guide": {
        title: "Strength Training After 65: The Ultimate Guide to Bone Health",
        excerpt: "Building muscle isn't just for bodybuilders. Discover how light resistance training can significantly improve bone density and reduce fall risk.",
        category: "Mobility & Fitness",
        author: "Dr. Sarah Jenkins",
        authorTitle: "Geriatric Physical Therapist",
        date: "October 15, 2023",
        readTime: "6 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKzt4SyTCXBnfkElTjmJ3uRVXJvThQ1xjMWUBH5Nl4lmZiWclEEo3P5TWpNgMk1OXyc98iXPWeLdqRfowI43mJC-dvWQWwpPEshco1Ad97lhQv21UaoBBUxMdanrUVP794zbebyAxSjIzqf4Ka-YnKaXNm0bdQnxziiMqTMpUrsy6hc-ZgJWpWhapRWgu0H_I9K-HS_qKHoH427GbP2e8-hs2xiQyTulh2gu2cmsd3-KAGkNl9QAoJZeLqBaSe3BFyroQ6WW3BeICH",
        content: `
## Why Strength Training Matters After 65

As we age, our bodies naturally lose muscle mass and bone density. This process, called sarcopenia, can lead to weakness, increased fall risk, and reduced independence. But here's the good news: **strength training can reverse these effects**, no matter your age.

Studies show that adults who engage in regular resistance training experience:

- **Up to 3% increase in bone density** within the first year
- **40% reduction in fall risk**
- Improved balance and coordination
- Better management of chronic conditions like diabetes and arthritis

## Getting Started Safely

Before beginning any exercise program, consult with your healthcare provider. Once cleared, consider these beginner-friendly approaches:

### 1. Resistance Bands
Resistance bands are gentle on joints while providing effective muscle engagement. Start with light resistance and work your way up.

### 2. Chair Exercises
Many strength exercises can be modified to perform while seated, making them accessible for those with balance concerns.

### 3. Light Dumbbells
Start with 2-3 pound weights and focus on proper form. Gradually increase weight as you build strength.

## Sample Beginner Routine

Here's a simple routine to get you started (perform 2-3 times per week):

1. **Seated Leg Raises** - 10 repetitions each leg
2. **Wall Push-ups** - 8-10 repetitions
3. **Seated Arm Curls** - 10 repetitions with light weights
4. **Standing Heel Raises** - 10 repetitions (hold onto a chair for balance)

## The Bottom Line

It's never too late to start strength training. With proper guidance and a gradual approach, you can build muscle, strengthen bones, and improve your quality of life at any age.

*Always consult with a healthcare provider before starting a new exercise program.*
    `,
    },
    "heart-healthy-diet": {
        title: "Heart-Healthy Diet Plans for Beginners",
        excerpt: "Your heart deserves the best nutrition. Learn about the Mediterranean diet and other approaches proven to support cardiovascular health.",
        category: "Nutrition",
        author: "Maria Santos, RD",
        authorTitle: "Registered Dietitian",
        date: "October 14, 2023",
        readTime: "4 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCSY-OJTZz7NCz-GEC2pZf5trQvm5Kv_UNg6x6mxEKYkZK2Gy9X9WQynNGaAZ9W2tlbnqtIh5lOFxe6p7vkJfitatXb9zMRkC_ah5inyU9k77HoMnMLen5KWJnlnAe4HVL2JRuxcfbnyEB4TLblmU6igHq36AQAoxv3R6xVDvd91uWTiCSoYVQjH5GuGFMRJ1XNZk5Md8iKOFAdP-6XCJmMkcJk4TN6TkrS6SjAYmNbpSiKPKytXd17QVlKUWQ0RoX5lcZrzhZf0vW",
        content: `
## Eating for Heart Health

Heart disease remains the leading cause of death for adults over 60. But here's the empowering truth: **what you eat directly impacts your heart health**.

## The Mediterranean Diet: Gold Standard

The Mediterranean diet consistently ranks as one of the best diets for heart health. It emphasizes:

- **Olive oil** as the primary fat source
- **Plenty of vegetables** and fruits
- **Whole grains** like whole wheat, oats, and brown rice
- **Lean proteins** including fish and legumes
- **Limited red meat** and processed foods

## Foods That Love Your Heart

### Include More:
- Fatty fish (salmon, mackerel) - 2 times per week
- Nuts and seeds (a small handful daily)
- Leafy greens (spinach, kale)
- Berries (blueberries, strawberries)
- Oatmeal and whole grains

### Limit These:
- Sodium (less than 2,300mg daily)
- Added sugars
- Saturated fats
- Processed meats

## A Sample Day of Heart-Healthy Eating

**Breakfast**: Oatmeal with walnuts and blueberries

**Lunch**: Mediterranean salad with chickpeas, tomatoes, cucumber, and olive oil dressing

**Dinner**: Baked salmon with roasted vegetables and quinoa

**Snacks**: Apple with almond butter, or a small handful of mixed nuts

## Making the Transition

Don't try to change everything at once. Start with one meal and gradually incorporate more heart-healthy choices. Your heart will thank you!
    `,
    },
};

export function meta({ params }: Route.MetaArgs) {
    const post = blogPostsContent[params.slug];
    if (!post) {
        return [
            { title: "Post Not Found - WellAfterSixty" },
        ];
    }
    return [
        { title: `${post.title} - WellAfterSixty` },
        { name: "description", content: post.excerpt },
    ];
}

export default function BlogPost() {
    const { slug } = useParams();
    const post = slug ? blogPostsContent[slug] : null;

    if (!post) {
        return (
            <>
                <Header />
                <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold text-navy mb-4">Post Not Found</h1>
                    <p className="text-navy/70 mb-8">Sorry, we couldn't find the article you're looking for.</p>
                    <Link to="/blog" className="text-primary font-bold hover:underline">
                        ← Back to Blog
                    </Link>
                </main>
                <Footer />
            </>
        );
    }

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
                                <p className="text-sm text-navy/60">{post.authorTitle}</p>
                            </div>
                            <div className="ml-auto text-right text-sm text-navy/60">
                                <p>{post.date}</p>
                                <p>{post.readTime}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-p:text-navy/80 prose-a:text-primary prose-strong:text-navy prose-ul:text-navy/80 prose-ol:text-navy/80">
                            {post.content.split('\n').map((paragraph, index) => {
                                if (paragraph.startsWith('## ')) {
                                    return <h2 key={index} className="text-2xl font-bold text-navy mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                                }
                                if (paragraph.startsWith('### ')) {
                                    return <h3 key={index} className="text-xl font-bold text-navy mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                                }
                                if (paragraph.startsWith('- ')) {
                                    return <li key={index} className="ml-6 text-navy/80">{paragraph.replace('- ', '')}</li>;
                                }
                                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
                                    return <li key={index} className="ml-6 text-navy/80">{paragraph.replace(/^\d+\. /, '')}</li>;
                                }
                                if (paragraph.trim() === '') {
                                    return null;
                                }
                                return <p key={index} className="text-lg text-navy/80 mb-4">{paragraph}</p>;
                            })}
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
