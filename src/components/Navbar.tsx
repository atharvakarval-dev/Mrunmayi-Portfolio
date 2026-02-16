import { useState, useEffect } from 'react';
import { Menu, X, Download, Linkedin as LinkedIn } from 'lucide-react';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNavClick = (id: string) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen
                ? 'bg-white shadow-sm border-b border-gray-100'
                : isScrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo / Name */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-pink-600 hover:to-blue-600 transition-all duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Mrunmayi Shahane
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`text-sm font-medium transition-all duration-200 hover:text-pink-600 relative group ${activeSection === link.id ? 'text-pink-600 font-semibold' : 'text-gray-600'
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`}></span>
                            </button>
                        ))}

                        <div className="h-6 w-px bg-gray-200 mx-4"></div>

                        <a
                            href="https://linkedin.com/in/mrunmayi-shahane"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <LinkedIn size={20} />
                        </a>

                        <a
                            href="/Modern_Simple_ATS_Friendly_LateX_CV.pdf"
                            download
                            className="flex items-center space-x-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                        >
                            <span>Download Resume</span>
                            <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 p-2 rounded-md transition-colors duration-200 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-x-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                style={{ top: '80px', height: 'calc(100vh - 80px)', overflowY: 'auto' }}
            >
                <div className="px-4 pt-4 pb-8 space-y-2 bg-white h-full border-t border-gray-100">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`block w-full text-left px-4 py-4 text-base font-medium rounded-xl transition-all duration-200 ${activeSection === link.id
                                ? 'bg-pink-50 text-pink-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}

                    <div className="pt-6 mt-6 border-t border-gray-100 px-4">
                        <a
                            href="/Modern_Simple_ATS_Friendly_LateX_CV.pdf"
                            download
                            className="flex w-full items-center justify-center space-x-2 px-6 py-4 bg-gray-900 text-white text-base font-medium rounded-xl hover:bg-gray-800 transition-all duration-300 mb-4"
                        >
                            <span>Download Resume</span>
                            <Download size={18} />
                        </a>

                        <a
                            href="https://linkedin.com/in/mrunmayi-shahane"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center space-x-2 px-6 py-4 bg-blue-50 text-blue-700 text-base font-medium rounded-xl hover:bg-blue-100 transition-all duration-300"
                        >
                            <LinkedIn size={18} />
                            <span>Connect on LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
