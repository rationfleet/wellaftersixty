import type { Route } from "./+types/home";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "WellAfterSixty - Wellness for Seniors" },
    { name: "description", content: "Empowering seniors to live their healthiest, happiest lives through evidence-based wellness guidance." },
  ];
}

// Sample article data (in a real app, this would come from content files)
const featuredArticles = [
  {
    slug: "strength-training-guide",
    title: "Strength Training After 65: The Ultimate Guide to Bone Health",
    excerpt: "Building muscle isn't just for bodybuilders. Discover how light resistance training can significantly improve bone density and reduce fall risk.",
    category: "Mobility & Fitness",
    author: "Dr. Sarah Jenkins",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKzt4SyTCXBnfkElTjmJ3uRVXJvThQ1xjMWUBH5Nl4lmZiWclEEo3P5TWpNgMk1OXyc98iXPWeLdqRfowI43mJC-dvWQWwpPEshco1Ad97lhQv21UaoBBUxMdanrUVP794zbebyAxSjIzqf4Ka-YnKaXNm0bdQnxziiMqTMpUrsy6hc-ZgJWpWhapRWgu0H_I9K-HS_qKHoH427GbP2e8-hs2xiQyTulh2gu2cmsd3-KAGkNl9QAoJZeLqBaSe3BFyroQ6WW3BeICH",
  },
  {
    slug: "heart-healthy-diet",
    title: "Heart-Healthy Diet Plans for Beginners",
    category: "Nutrition",
    readTime: "4 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCSY-OJTZz7NCz-GEC2pZf5trQvm5Kv_UNg6x6mxEKYkZK2Gy9X9WQynNGaAZ9W2tlbnqtIh5lOFxe6p7vkJfitatXb9zMRkC_ah5inyU9k77HoMnMLen5KWJnlnAe4HVL2JRuxcfbnyEB4TLblmU6igHq36AQAoxv3R6xVDvd91uWTiCSoYVQjH5GuGFMRJ1XNZk5Md8iKOFAdP-6XCJmMkcJk4TN6TkrS6SjAYmNbpSiKPKytXd17QVlKUWQ0RoX5lcZrzhZf0vW",
  },
  {
    slug: "senior-friendly-tablets",
    title: "Top 5 Senior-Friendly Tablets in 2024",
    category: "Tech",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYhHzX3-UR8neCBPNzcIPEARkGl9sFwpti5F1f66zNo38mLkYjcfJwp7ZxCBlwDuQ3USiOi6XSDCpeeA4NDGG7X27YLX_yNybuAAN2h_kd-o0IeI5Fm8FWeuSFTb_FQFqmTg_fLn4Kq-IHg3f5-VoL2sQO3NN-M_1Fq9MhL7_nS4mYLPbNL_RQhrQN66UEOeOwAaeYWbZjiGjPz3l5lUrLUda3HzphocldeZ5ucp9cpyPXJqj0xeAB7KEtQN-VlLaUOikqDzmcho9E",
  },
];

const latestArticles = [
  {
    slug: "low-impact-exercises",
    title: "The Best Low-Impact Exercises for Joint Pain",
    excerpt: "Swimming and cycling are fantastic, but have you tried Tai Chi? Explore exercises that are kind to your knees.",
    category: "Fitness",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpK932ah4AmxZaI1ElkS3C80QkxOPJScKSNNZ_G0WrW7e7k2pPSiq1r-UwO2YFJi1PtVM78POLB2LzC88JBXaqLLiB4QpwnSOBjiB7g2cGYtCDMNcAQ7VOC7PdddDKK8NHQL70XYCeJ9I6725ZNiKso06MOtSdcLfVclLlLNl2pMLunJTIoOYSu4NYh7mqraTU4xMLB2wbqePfEdabjEhXmnzqNK1CXnYu4G_qzMCcP3urqk2nS1tLes_VpGBiyYg2Wcscm9e1N0pB",
  },
  {
    slug: "medicare-changes",
    title: "Navigating Medicare: Changes You Need to Know",
    excerpt: "Understanding the new enrollment periods and coverage updates for the upcoming fiscal year.",
    category: "Chronic Care",
    date: "Oct 10, 2023",
    readTime: "8 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfcd7whPwPA-n01qvWFxSu76TrogpeQZtABoAam8W9UoiI01xmPDUJuHygMmwFb2WsY8GBx5Pe-pVaJ8k_4jurlOIwanYFOvpBG4BcT47JgPxcl__SeSuykukJhYGfjgP8u2MIlxDl6MYFI2AHwMxlf_GKWPbnobgtGspYvawRHyUX7v05swzyQTkPb6q-wX3qdhhoynjQCUqv_MnGOXfUnrOELEwlUeJfSyvXhQAEW0xzje0LEbFInstB16gWlXQ-Z8j7KBa0u6Q5",
  },
  {
    slug: "social-connection-longevity",
    title: "Social Connection: The Secret to Longevity?",
    excerpt: "New studies suggest that maintaining a strong social circle is as important as diet and exercise.",
    category: "Lifestyle",
    date: "Oct 08, 2023",
    readTime: "4 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOs2Ga_4BZz-gyYkYx2IxsWqi_Br3_zOSE2y85_jWTaFpgHOZypDPl1LeH0MbIIjolaQnNzhKu78chJR5LUcDlqyr_-eXTx0R0yy4O1RzRVMTZRQUsptHBbRpfH95jooutZB45q6hgX54DjdDkO2vODkwO9wOoChsTxxVfLS7ylsyx9mPHr0ZZjBnVrMxgntgW4h7mAJx5WaRiWU-sdIF4KemWqO2KBhBYLqS59t2PCKDGS3BZYaBUp1pG2Kxod0UteOcc9oV6kuy4",
  },
];

const recommendedProducts = [
  {
    name: "Ultra-Cushion Walking Shoes",
    rating: 4.5,
    badge: "Best Seller",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC5-o9UByJOfcrsLtecd3iSwis-uqlVbAuo_uptU12bafGS0_FXT54P7EGaYGkBECBDse2EIYpDY_kidsDp1DhzXlS45kKVNYk4sUnGUhI7-Vugk907eVGpEe9_HS4dAc76EvxizqVwnrYlVkN4Jq6G2ZK2ZbXmViTB1NWa8zUOyttMWItR7GddeGz2iDfm10wDdYqGLXUj0mxfTFi6CLUAG4wUx9_4ZvKVNlZciIKbWe46NXTIy2foKcc_66Hc12Lye0MT2BOQ2PJ",
  },
  {
    name: "Smart Blood Pressure Monitor",
    rating: 4,
    badge: "Top Rated",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAANw7jSM_RcMc8fg0bw5OnQdHeYSyXKfQGVufKuw_xze6xjMtdEd4_2LR0Bh6ov6aQMePMgHuwkmsvIHyJVeD_fZlgBP9g_4A9PkQat1vKpo76Rpxq0SJ94DvThh2G_wT5TplPmXm4uzFsLUELXvHTixMT8OYkwRnsPWJgj0HGQb0E8zMg_8i5PvWM0UYTd8K5056bYDArA2B8Nm2fVdoL9N9uQi5KdH4dYwLxuMFbQgSJ0RDhz9SDVPfDVfiS1KjfqhJJrjtztxBu",
  },
  {
    name: "Daily Senior Multivitamin Pack",
    rating: 5,
    badge: "Trending",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCeAafWzZNCTnF3HuVjQNbpqdndgBhW70PrAohUY5PAKiU4WLnJ_Ly1pyS7X4l0KV9ZSekdETgpIMSL-xLUNVYwEtcSNIyCkexG9DsW-ZVX52UPp-3kdggEPCyxNRdLqae2-EKqGOSunXK8FdTa7xLkPOb5lH2DJ_UMnWAr6SDMg5X6KHVZOFVIKb4BZZ6ljpS38mQVe5RuwhV5k9wYO5lpgV027tRPPNSJSI3OFpvwZUg3XT0hypgII6DPodP4GXG2ZTwwX5t_9qv",
  },
];

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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section: Top 3 Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Primary Article (2/3 Width) */}
          <article className="lg:col-span-2 group cursor-pointer flex flex-col h-full">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-4 shadow-sm">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div
                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${featuredArticles[0].image}')` }}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {featuredArticles[0].category}
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-grow justify-start">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3 leading-tight group-hover:text-primary transition-colors">
                {featuredArticles[0].title}
              </h2>
              <p className="text-lg text-navy/70 mb-4 line-clamp-2">
                {featuredArticles[0].excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm text-navy/60 font-medium mt-auto">
                <span>By {featuredArticles[0].author}</span>
                <span>•</span>
                <span>{featuredArticles[0].readTime}</span>
              </div>
            </div>
          </article>

          {/* Secondary Stack (1/3 Width) */}
          <div className="flex flex-col gap-8 h-full">
            {featuredArticles.slice(1).map((article) => (
              <article key={article.slug} className="flex-1 group cursor-pointer flex flex-col">
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
              </article>
            ))}
          </div>
        </section>

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
              <a href="/blog" className="text-primary font-bold hover:underline text-sm flex items-center">
                View All <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>

            {latestArticles.map((article, index) => (
              <div key={article.slug}>
                <article className="flex flex-col md:flex-row gap-6 items-start group">
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
                </article>
                {index < latestArticles.length - 1 && (
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
                {recommendedProducts.map((product) => (
                  <a key={product.name} href="#" className="flex gap-4 group items-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${product.image}')` }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-navy text-sm leading-tight group-hover:text-primary mb-1">
                        {product.name}
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
