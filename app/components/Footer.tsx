import { Link } from "react-router";

export function Footer() {
    return (
        <footer className="bg-surface-light border-t border-gray-200 mt-12 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4 text-primary">
                            <span className="material-symbols-outlined text-3xl">spa</span>
                            <span className="text-xl font-black tracking-tight text-navy font-serif">
                                WellAfterSixty
                            </span>
                        </Link>
                        <p className="text-navy/70 text-sm">
                            Empowering seniors to live their healthiest, happiest lives
                            through evidence-based wellness guidance.
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-bold text-navy mb-4">Categories</h4>
                        <ul className="space-y-2 text-sm text-navy/70">
                            <li>
                                <Link to="/blog?category=mobility-fitness" className="hover:text-primary">
                                    Mobility & Fitness
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog?category=chronic-care" className="hover:text-primary">
                                    Chronic Care
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog?category=nutrition" className="hover:text-primary">
                                    Nutrition
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog?category=senior-tech" className="hover:text-primary">
                                    Senior Tech
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-navy mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-navy/70">
                            <li>
                                <Link to="/about" className="hover:text-primary">About Us</Link>
                            </li>
                            <li>
                                <Link to="/medical-review" className="hover:text-primary">Medical Review Board</Link>
                            </li>
                            <li>
                                <Link to="/editorial-policy" className="hover:text-primary">Editorial Policy</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-primary">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-navy mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-navy/70">
                            <li>
                                <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
                            </li>
                            <li>
                                <Link to="/cookies" className="hover:text-primary">Cookie Policy</Link>
                            </li>
                            <li>
                                <Link to="/accessibility" className="hover:text-primary">Accessibility</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-navy/50">
                        © {new Date().getFullYear()} WellAfterSixty. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-navy/50 hover:text-primary">
                            <span className="sr-only">Facebook</span>FB
                        </a>
                        <a href="#" className="text-navy/50 hover:text-primary">
                            <span className="sr-only">Twitter</span>TW
                        </a>
                        <a href="#" className="text-navy/50 hover:text-primary">
                            <span className="sr-only">Instagram</span>IG
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
