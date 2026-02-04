import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Form, useActionData } from "react-router";
import type { Route } from "./+types/newsletter";

export function meta() {
    return [
        { title: "Newsletter - WellAfterSixty" },
        { name: "description", content: "Subscribe to our weekly newsletter for the latest senior health tips, wellness advice, and product recommendations." },
    ];
}

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const email = formData.get("email") as string;

    // In a real app, you'd save this to a database or email service
    // For now, we'll just return a success message
    if (email && email.includes("@")) {
        return { success: true, message: "Thank you for subscribing! Check your inbox for a confirmation email." };
    }

    return { success: false, message: "Please enter a valid email address." };
}

export default function Newsletter({ actionData }: Route.ComponentProps) {
    return (
        <>
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary via-[#5B7B6B] to-[#4A6B5B] text-white py-24 px-4 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
                    <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20 shadow-lg">
                            <span className="material-symbols-outlined text-xl">mail</span>
                            <span className="text-sm font-semibold tracking-wide">Weekly Newsletter</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Stay Healthy,<br />Stay Informed
                        </h1>
                        <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
                            Join thousands of seniors who receive our weekly wellness tips, health news, and expert advice straight to their inbox.
                        </p>

                        {/* Glassmorphic Subscription Card */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-lg mx-auto border border-white/20 shadow-2xl">
                            <Form method="post">
                                <div className="flex flex-col gap-4">
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-navy/50">email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Enter your email address"
                                            className="w-full pl-12 pr-5 py-4 rounded-xl text-navy text-lg bg-white border-2 border-transparent focus:border-white focus:ring-4 focus:ring-white/30 transition-all shadow-lg placeholder:text-navy/40"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-navy hover:bg-navy/90 text-white font-bold px-8 py-4 rounded-xl transition-all text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span>Subscribe Free</span>
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>

                                {actionData && (
                                    <div className={`mt-5 p-4 rounded-xl flex items-center gap-3 ${actionData.success ? 'bg-green-500/30 border border-green-400/30' : 'bg-red-500/30 border border-red-400/30'}`}>
                                        <span className="material-symbols-outlined">{actionData.success ? 'check_circle' : 'error'}</span>
                                        <span>{actionData.message}</span>
                                    </div>
                                )}
                            </Form>

                            <div className="flex items-center justify-center gap-4 mt-5 text-sm text-white/60">
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-base">lock</span>
                                    No spam, ever
                                </span>
                                <span className="w-1 h-1 bg-white/40 rounded-full" />
                                <span>Unsubscribe anytime</span>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-10 flex flex-col items-center gap-3">
                            <div className="flex -space-x-2">
                                {['👩‍🦳', '👨‍🦳', '👵', '👴', '🧓'].map((emoji, i) => (
                                    <div key={i} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 text-lg">
                                        {emoji}
                                    </div>
                                ))}
                            </div>
                            <p className="text-white/70 text-sm">
                                <span className="font-semibold text-white">10,000+</span> seniors already subscribed
                            </p>
                        </div>
                    </div>
                </section>


                {/* What You'll Get */}
                <section className="py-16 px-4 bg-surface-light">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-navy text-center mb-12">What You'll Receive</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Weekly Health Tips</h3>
                                <p className="text-navy/70">
                                    Practical, evidence-based advice for living your healthiest life after 60.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-primary text-3xl">article</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Latest Articles</h3>
                                <p className="text-navy/70">
                                    Be the first to read our newest blog posts on fitness, nutrition, and wellness.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-primary text-3xl">local_offer</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Exclusive Deals</h3>
                                <p className="text-navy/70">
                                    Special discounts on products we recommend, only for subscribers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-navy text-center mb-12">What Subscribers Say</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-surface-light rounded-lg p-6 border border-gray-100">
                                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-lg">star</span>)}
                                </div>
                                <p className="text-navy/80 italic mb-4">
                                    "This newsletter has become my Tuesday morning ritual. The health tips are practical and easy to follow. I've already improved my walking routine thanks to their fitness articles!"
                                </p>
                                <p className="font-bold text-navy">— Margaret T., 72</p>
                            </div>

                            <div className="bg-surface-light rounded-lg p-6 border border-gray-100">
                                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-lg">star</span>)}
                                </div>
                                <p className="text-navy/80 italic mb-4">
                                    "Finally, a health resource that speaks to people my age! No overwhelming medical jargon, just clear guidance I can actually use. Highly recommend subscribing."
                                </p>
                                <p className="font-bold text-navy">— Robert K., 68</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 px-4 bg-cream">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-navy mb-6">Ready to Join?</h2>
                        <p className="text-lg text-navy/70 mb-8">
                            Over 10,000 seniors trust us for their weekly wellness guidance.
                        </p>
                        <Form method="post" className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your email address"
                                    className="flex-grow px-5 py-4 rounded-lg text-navy text-lg border border-gray-200 focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    type="submit"
                                    className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </Form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
