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
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-navy/50 mr-2">Follow us:</span>
                        <a
                            href="https://instagram.com/wellaftersixty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                            <span>@wellaftersixty</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
