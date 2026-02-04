import { Link } from "react-router";

export function Header() {
    return (
        <header className="bg-surface-light border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Row: Search, Logo, Subscribe */}
                <div className="flex items-center justify-between py-4">
                    {/* Search (Left) */}
                    <div className="flex-1 flex justify-start">
                        <button
                            aria-label="Search"
                            className="p-2 text-navy hover:bg-cream rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </div>

                    {/* Logo (Center) */}
                    <div className="flex-1 flex justify-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="text-primary">
                                <span className="material-symbols-outlined text-4xl">spa</span>
                            </div>
                            <h1 className="text-2xl font-black tracking-tight text-navy group-hover:text-primary transition-colors">
                                WellAfterSixty
                            </h1>
                        </Link>
                    </div>

                    {/* Subscribe (Right) */}
                    <div className="flex-1 flex justify-end gap-3">
                        <button className="hidden sm:flex bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors items-center gap-2">
                            <span>Subscribe</span>
                            <span className="material-symbols-outlined text-[18px]">mail</span>
                        </button>
                        <button className="sm:hidden p-2 text-navy">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Row: Navigation Links */}
                <nav className="hidden sm:flex justify-center pb-4 pt-1 border-t border-gray-100 mt-1">
                    <div className="flex gap-8 items-center">
                        <Link
                            to="/blog?category=mobility-fitness"
                            className="text-navy/80 hover:text-primary font-medium text-sm tracking-wide py-2 border-b-2 border-transparent hover:border-primary transition-all"
                        >
                            Mobility & Fitness
                        </Link>
                        <Link
                            to="/blog?category=chronic-care"
                            className="text-navy/80 hover:text-primary font-medium text-sm tracking-wide py-2 border-b-2 border-transparent hover:border-primary transition-all"
                        >
                            Chronic Care
                        </Link>
                        <Link
                            to="/blog?category=nutrition"
                            className="text-navy/80 hover:text-primary font-medium text-sm tracking-wide py-2 border-b-2 border-transparent hover:border-primary transition-all"
                        >
                            Nutrition
                        </Link>
                        <Link
                            to="/blog?category=senior-tech"
                            className="text-navy/80 hover:text-primary font-medium text-sm tracking-wide py-2 border-b-2 border-transparent hover:border-primary transition-all"
                        >
                            Senior Tech
                        </Link>
                        <Link
                            to="/blog?category=lifestyle"
                            className="text-navy/80 hover:text-primary font-medium text-sm tracking-wide py-2 border-b-2 border-transparent hover:border-primary transition-all"
                        >
                            Lifestyle
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
