import { Link, useLocation, Form, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";

function SearchButton() {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputRef.current?.value) {
            navigate(`/search?q=${encodeURIComponent(inputRef.current.value)}`);
            setIsOpen(false);
        }
    };

    return (
        <div className="relative flex items-center">
            {isOpen ? (
                <form onSubmit={handleSubmit} className="flex items-center absolute left-0 bg-white shadow-lg rounded-full border border-gray-200 p-1 z-10 w-64 animate-in fade-in slide-in-from-left-4 duration-200">
                    <span className="material-symbols-outlined text-navy/50 ml-2">search</span>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search articles..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2 py-1 text-navy placeholder:text-navy/40"
                        onBlur={() => !inputRef.current?.value && setIsOpen(false)}
                    />
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded-full text-navy/50"
                    >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                </form>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Search"
                    className="p-2 text-navy hover:bg-cream rounded-full transition-colors"
                >
                    <span className="material-symbols-outlined">search</span>
                </button>
            )}
        </div>
    );
}

export function Header() {
    const location = useLocation();

    const isActive = (path: string) => {
        if (path === "/") return location.pathname === "/" || location.pathname === "";
        return location.pathname.startsWith(path);
    };

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/blog", label: "Blog" },
        { path: "/products", label: "Products" },
        { path: "/newsletter", label: "Newsletter" },
    ];

    return (
        <header className="bg-surface-light border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Row: Search, Logo, Subscribe */}
                <div className="flex items-center justify-between py-4">
                    {/* Search (Left) */}
                    <div className="flex-1 flex justify-start">
                        <SearchButton />
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
                        <Link
                            to="/newsletter"
                            className="hidden sm:flex bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors items-center gap-2"
                        >
                            <span>Subscribe</span>
                            <span className="material-symbols-outlined text-[18px]">mail</span>
                        </Link>
                        <button className="sm:hidden p-2 text-navy">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Row: Navigation Links */}
                <nav className="hidden sm:flex justify-center pb-4 pt-1 border-t border-gray-100 mt-1">
                    <div className="flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium text-sm tracking-wide py-2 border-b-2 transition-all ${isActive(link.path)
                                    ? "text-primary border-primary"
                                    : "text-navy/80 hover:text-primary border-transparent hover:border-primary"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}
