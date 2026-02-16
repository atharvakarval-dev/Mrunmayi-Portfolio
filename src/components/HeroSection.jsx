import React, { useState } from 'react';
import { Mail, Linkedin, FileText, Briefcase } from 'lucide-react';

const HeroSection = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <header className="py-6">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-900">
                            Mrunmayi Shahane
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition">Experience</a>
                            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="pt-20 pb-24 lg:pt-32">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="text-center lg:text-left">
                            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                                Open to HR Opportunities
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                HR Professional Ready to Drive 
                                <span className="text-blue-600"> Organizational Success</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Passionate about talent acquisition, employee engagement, and building positive workplace cultures. Let's connect and explore opportunities together.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                                    Get in Touch
                                </a>
                                <a href="#resume" className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-gray-200 flex items-center justify-center gap-2">
                                    <FileText size={20} />
                                    View Resume
                                </a>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-8">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-gray-900">5+</p>
                                    <p className="text-sm text-gray-600">Years Experience</p>
                                </div>
                                <div className="h-12 w-px bg-gray-300"></div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-gray-900">100+</p>
                                    <p className="text-sm text-gray-600">Successful Hires</p>
                                </div>
                                <div className="h-12 w-px bg-gray-300"></div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-gray-900">15+</p>
                                    <p className="text-sm text-gray-600">HR Projects</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-6 flex items-center justify-center">
                                    <span className="text-white text-6xl font-bold">MS</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                        <Briefcase className="text-blue-600" size={24} />
                                        <div>
                                            <p className="font-semibold text-gray-900">HR Specialist</p>
                                            <p className="text-sm text-gray-600">Talent & Culture</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-center pt-4">
                                        <a href="mailto:mrunmayi@example.com" className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                                            <Mail size={24} />
                                        </a>
                                        <a href="https://linkedin.com" className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                                            <Linkedin size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
