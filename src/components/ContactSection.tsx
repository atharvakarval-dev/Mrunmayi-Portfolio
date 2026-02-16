import { ChevronRight, Mail, Phone, MapPin, Linkedin as LinkedIn, Calendar, ExternalLink, Download } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Elements - lighter and cleaner */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-pink-500 text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-8 h-px bg-pink-400"></span>
                        GET IN TOUCH
                        <span className="w-8 h-px bg-pink-400"></span>
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 relative inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Let's Connect
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-300 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to discuss opportunities and collaborations
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-200 relative overflow-hidden group">
                        {/* Hover gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-8 flex items-center text-black relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                            <div className="w-1.5 h-8 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full mr-4"></div>
                            Send a Message
                        </h3>

                        <form className="space-y-6 relative z-10">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="group/input">
                                    <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within/input:text-pink-500 transition-colors duration-200">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-200 placeholder-gray-400"
                                        placeholder="Your first name"
                                    />
                                </div>
                                <div className="group/input">
                                    <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within/input:text-pink-500 transition-colors duration-200">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-200 placeholder-gray-400"
                                        placeholder="Your last name"
                                    />
                                </div>
                            </div>

                            <div className="group/input">
                                <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within/input:text-pink-500 transition-colors duration-200">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-200 placeholder-gray-400"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="group/input">
                                <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within/input:text-pink-500 transition-colors duration-200">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-200 placeholder-gray-400"
                                    placeholder="Job Opportunity / Project Collaboration"
                                />
                            </div>

                            <div className="group/input">
                                <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within/input:text-pink-500 transition-colors duration-200">Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-200 resize-none placeholder-gray-400"
                                    placeholder="I'd love to discuss..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group/btn w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-200 flex items-center justify-center"
                            >
                                <span className="mr-2">Send Message</span>
                                <ChevronRight className="group-hover/btn:translate-x-1 transition-transform duration-200" size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <div>
                            <h3 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Get In Touch
                            </h3>
                            <div className="space-y-4">
                                <a href="mailto:mrunmayishahane@gmail.com" className="group flex items-center space-x-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="bg-pink-50 p-3 rounded-xl group-hover:bg-pink-100 transition-colors duration-200">
                                        <Mail className="text-pink-500" size={24} />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-pink-600 transition-colors duration-200 text-lg">mrunmayishahane@gmail.com</span>
                                </a>
                                <a href="tel:+917775935914" className="group flex items-center space-x-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-100 transition-colors duration-200">
                                        <Phone className="text-blue-500" size={24} />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-200 text-lg">+91 7775935914</span>
                                </a>
                                <div className="group flex items-center space-x-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300">
                                    <div className="bg-pink-50 p-3 rounded-xl group-hover:bg-pink-100 transition-colors duration-200">
                                        <MapPin className="text-pink-500" size={24} />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-pink-600 transition-colors duration-200 text-lg">Pune, India</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 text-xl mb-6 flex items-center">
                                <span className="w-8 h-px bg-gray-300 mr-4"></span>
                                Professional Links
                            </h4>
                            <div className="space-y-3">
                                <a href="https://linkedin.com/in/mrunmayi-shahane" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-700 border border-transparent hover:shadow-lg hover:shadow-blue-200">
                                    <div className="flex items-center space-x-3">
                                        <LinkedIn size={20} />
                                        <span className="font-medium">LinkedIn Profile</span>
                                    </div>
                                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                                <a href="#" className="group flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 hover:bg-pink-500 hover:text-white transition-all duration-300 text-gray-700 border border-transparent hover:shadow-lg hover:shadow-pink-200">
                                    <div className="flex items-center space-x-3">
                                        <Calendar size={20} />
                                        <span className="font-medium">Schedule a Meeting</span>
                                    </div>
                                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                                <a href="/Modern_Simple_ATS_Friendly_LateX_CV.pdf" download className="group flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 hover:bg-gray-900 hover:text-white transition-all duration-300 text-gray-700 border border-transparent hover:shadow-lg">
                                    <div className="flex items-center space-x-3">
                                        <Download size={20} />
                                        <span className="font-medium">Download Resume</span>
                                    </div>
                                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                            <h4 className="font-semibold text-green-800 text-lg mb-2">Quick Response</h4>
                            <p className="text-green-700/80 text-sm mb-4">
                                I typically respond within 24 hours. For urgent matters, please feel free to call directly.
                            </p>
                            <div className="flex items-center space-x-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-green-700 text-sm font-medium">Available for opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
