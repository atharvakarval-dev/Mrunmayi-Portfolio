import { Mail, Phone, Linkedin as LinkedIn } from 'lucide-react';

const FooterSection = () => {
    return (
        <footer className="bg-black text-gray-400 py-16 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Mrunmayi Shahane
                        </h2>
                    </div>

                    <p className="mb-8 text-gray-500 text-lg">Digital Marketer and HR Professional</p>

                    <div className="flex justify-center space-x-6 mb-10">
                        <a href="https://linkedin.com/in/mrunmayi-shahane" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-pink-500/50">
                            <LinkedIn className="text-gray-400 group-hover:text-pink-400 transition-colors duration-200" size={24} />
                        </a>
                        <a href="mailto:mrunmayishahane@gmail.com" className="group p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-pink-500/50">
                            <Mail className="text-gray-400 group-hover:text-pink-400 transition-colors duration-200" size={24} />
                        </a>
                        <a href="tel:+917775935914" className="group p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-pink-500/50">
                            <Phone className="text-gray-400 group-hover:text-pink-400 transition-colors duration-200" size={24} />
                        </a>
                    </div>

                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500/20 to-pink-500/40 mx-auto mb-8 rounded-full"></div>

                    <p className="text-sm text-gray-600">
                        © 2024 Mrunmayi Shahane. All rights reserved. | Digital Marketing & HR Professional
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
