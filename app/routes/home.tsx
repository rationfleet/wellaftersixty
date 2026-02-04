import type { Route } from "./+types/home";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Link } from "react-router";
import { getAllBlogPosts, getAllProducts, getFeaturedPosts } from "~/utils/content.server";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "WellAfterSixty - Wellness for Seniors" },
    { name: "description", content: "Empowering seniors to live their healthiest, happiest lives through evidence-based wellness guidance." },
  ];
}

export async function loader() {
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedPosts();
  const latestPosts = allPosts.filter(p => !p.featured).slice(0, 3);
  const products = getAllProducts();

  return {
    featuredPosts,
    latestPosts,
    products,
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 mb-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`material-symbols-outlined text-[16px] ${star <= rating ? "text-yellow-500" : star - 0.5 <= rating ? "text-yellow-500" : "text-gray-300"
            }`}
        >
          {star <= rating ? "star" : star - 0.5 <= rating ? "star_half" : "star"}
        </span>
      ))}
    </div>
  );
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { featuredPosts, latestPosts, products } = loaderData;

  // Get primary featured and secondary featured
  const primaryFeatured = featuredPosts[0];
  const secondaryFeatured = featuredPosts.slice(1, 3);

  return (
    <>
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section: Top 3 Grid */}
        {primaryFeatured && (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Primary Article (2/3 Width) */}
            <Link to={`/blog/${primaryFeatured.slug}`} className="lg:col-span-2 group cursor-pointer flex flex-col h-full">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-4 shadow-sm">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                <div
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${primaryFeatured.image}')` }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {primaryFeatured.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-grow justify-start">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3 leading-tight group-hover:text-primary transition-colors">
                  {primaryFeatured.title}
                </h2>
                <p className="text-lg text-navy/70 mb-4 line-clamp-2">
                  {primaryFeatured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-navy/60 font-medium mt-auto">
                  <span>By {primaryFeatured.author}</span>
                  <span>•</span>
                  <span>{primaryFeatured.readTime}</span>
                </div>
              </div>
            </Link>

            {/* Secondary Stack (1/3 Width) */}
            <div className="flex flex-col gap-8 h-full">
              {secondaryFeatured.map((article) => (
                <Link to={`/blog/${article.slug}`} key={article.slug} className="flex-1 group cursor-pointer flex flex-col">
                  <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg mb-3 shadow-sm">
                    <div
                      className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${article.image}')` }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-navy text-xs font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-navy/60 font-medium mt-auto">
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Trust Bar */}
        <section className="bg-surface-light rounded-lg shadow-sm border border-gray-100 p-6 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex-1 flex items-center gap-4 px-4 w-full justify-center md:justify-start">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Medically Reviewed</h4>
                <p className="text-sm text-navy/70">Content reviewed by certified geriatricians.</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 px-4 pt-4 md:pt-0 w-full justify-center md:justify-start">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <span className="material-symbols-outlined">fact_check</span>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Fact-Checked</h4>
                <p className="text-sm text-navy/70">Rigorous process for accuracy and trust.</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 px-4 pt-4 md:pt-0 w-full justify-center md:justify-start">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <span className="material-symbols-outlined">clinical_notes</span>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Expert Contributors</h4>
                <p className="text-sm text-navy/70">Written by qualified health professionals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Latest Articles (2/3) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            <div className="flex items-center justify-between border-b-2 border-primary/20 pb-2 mb-2">
              <h2 className="text-2xl font-bold text-navy">Latest Articles</h2>
              <Link to="/blog" className="text-primary font-bold hover:underline text-sm flex items-center">
                View All <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>

            {latestPosts.map((article, index) => (
              <div key={article.slug}>
                <Link to={`/blog/${article.slug}`} className="flex flex-col md:flex-row gap-6 items-start group">
                  <div className="w-full md:w-[35%] aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-sm flex-shrink-0">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${article.image}')` }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                      {article.category}
                    </span>
                    <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-lg text-navy/70 mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="text-sm text-navy/50 font-medium">
                      {article.date} • {article.readTime}
                    </div>
                  </div>
                </Link>
                {index < latestPosts.length - 1 && (
                  <hr className="border-gray-200 mt-10" />
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Sidebar (1/3) */}
          <aside className="w-full lg:w-1/3 flex flex-col gap-8">
            {/* Recommended Products Widget */}
            <div className="bg-surface-light border border-gray-200 rounded-lg p-6 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">thumb_up</span>
                <h3 className="text-xl font-bold text-navy">Recommended for You</h3>
              </div>
              <p className="text-xs text-navy/50 mb-6 italic">
                We may earn a commission from links on this page.
              </p>
              <div className="flex flex-col gap-5">
                {products.map((product) => (
                  <a key={product.slug} href={product.affiliateUrl || "#"} className="flex gap-4 group items-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${product.image}')` }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-navy text-sm leading-tight group-hover:text-primary mb-1">
                        {product.title}
                      </h4>
                      <StarRating rating={product.rating} />
                      <span className="text-primary text-xs font-bold uppercase">{product.badge}</span>
                    </div>
                  </a>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-bold transition-colors text-sm">
                View All Recommendations
              </button>
            </div>

            {/* Newsletter Mini */}
            <div className="bg-primary rounded-lg p-6 shadow-sm text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined">mark_email_unread</span>
                <h3 className="text-xl font-bold font-serif">Weekly Wellness</h3>
              </div>
              <p className="text-white/90 mb-4 text-sm">
                Get expert tips and senior health news delivered to your inbox every Tuesday.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full rounded px-3 py-2 text-navy border-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your email address"
                  type="email"
                />
                <button className="w-full bg-navy text-white font-bold py-2 rounded hover:bg-navy/80 transition-colors">
                  Join Free
                </button>
              </div>
              <p className="text-xs text-white/60 mt-3 text-center">Unsubscribe at any time.</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
