import { Code, BarChart3, Brain, TrendingUp, Users, Mail, Briefcase } from 'lucide-react';

const SkillsAndCertifications = () => {
    return (
        <>
            {/* Skills Section */}
            <section id="skills" className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-pink-500 text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-pink-400"></span>
                            MY EXPERTISE
                            <span className="w-8 h-px bg-pink-400"></span>
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 relative inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Skills
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-300 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                            Technical proficiency and soft skills that drive results
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Digital Marketing Skills */}
                        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-200">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <Code className="text-pink-500" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Digital Marketing
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { skill: 'Social Media Optimization', level: 90 },
                                    { skill: 'Content Writing', level: 85 },
                                    { skill: 'Campaign Analysis', level: 88 },
                                    { skill: 'PPC & SEM Strategies', level: 82 },
                                    { skill: 'Conversion Rate Optimization', level: 80 },
                                    { skill: 'SEO', level: 85 }
                                ].map((item, index) => (
                                    <div key={index} className="group/item">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-700 group-hover/item:text-pink-500 transition-colors duration-200">
                                                {item.skill}
                                            </span>
                                            <span className="text-pink-500 font-semibold bg-pink-50 px-3 py-1 rounded-full text-sm">
                                                {item.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                            <div 
                                                className="bg-gradient-to-r from-pink-400 to-pink-300 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Data Visualization Skills */}
                        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <BarChart3 className="text-blue-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Data & Tools
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { skill: 'Microsoft Power BI', level: 85 },
                                    { skill: 'Excel', level: 90 },
                                    { skill: 'Google Analytics', level: 82 },
                                    { skill: 'SEMrush', level: 78 },
                                    { skill: 'WordPress', level: 80 },
                                    { skill: 'Adobe Creative Suite', level: 75 }
                                ].map((item, index) => (
                                    <div key={index} className="group/item">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-700 group-hover/item:text-blue-400 transition-colors duration-200">
                                                {item.skill}
                                            </span>
                                            <span className="text-blue-400 font-semibold bg-blue-50 px-3 py-1 rounded-full text-sm">
                                                {item.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                            <div 
                                                className="bg-gradient-to-r from-blue-400 to-blue-300 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Soft Skills */}
                        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-200">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <Brain className="text-pink-500" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Soft Skills
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { skill: 'Presentation', example: 'Effective communication of ideas and concepts' },
                                    { skill: 'Planning', example: 'Strategic organization of tasks and projects' },
                                    { skill: 'Creative Problem-Solving', example: 'Innovative approaches to challenges' },
                                    { skill: 'Teamwork', example: 'Collaborative work in diverse environments' },
                                    { skill: 'Adaptability', example: 'Quick adjustment to changing circumstances' },
                                    { skill: 'Analytical Thinking', example: 'Data-driven decision making' }
                                ].map((item, index) => (
                                    <div key={index} className="group/item border-l-4 border-pink-400 hover:border-pink-500 pl-4 py-3 transition-all duration-300 hover:bg-pink-50/50 rounded-r-lg transform hover:translate-x-1">
                                        <h4 className="font-semibold text-black mb-1 group-hover/item:text-pink-500 transition-colors duration-200 flex items-center">
                                            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>
                                            {item.skill}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.example}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* SEO Tools */}
                    <div className="mt-12 bg-black p-8 lg:p-10 rounded-3xl shadow-2xl">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                            SEO & Software Tools
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                            {[
                                'Google Search Console', 'Google Analytics', 'Looker Studio', 'Google Trends', 
                                'Screaming Frog', 'SEMrush', 'Ahrefs', 'WordPress', 'Project (MSP)', 
                                'Adobe PhotoShop', 'Adobe Audition', 'Canva'
                            ].map((tool, index) => (
                                <div key={index} className="group text-center p-4 bg-white/10 hover:bg-gradient-to-br hover:from-pink-400/20 hover:to-blue-400/20 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-pink-400/30">
                                    <p className="font-medium text-sm lg:text-base text-white group-hover:text-pink-300 transition-colors duration-200">
                                        {tool}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Languages */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { language: 'English', level: 'Fluent', width: '90%', color: 'pink' },
                            { language: 'Marathi', level: 'Native', width: '100%', color: 'blue' },
                            { language: 'Hindi', level: 'Native', width: '100%', color: 'pink' }
                        ].map((lang, index) => (
                            <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-pink-200">
                                <h4 className="font-semibold text-black mb-3 group-hover:text-pink-500 transition-colors duration-300 flex items-center text-lg">
                                    <div className={`w-2 h-2 ${lang.color === 'pink' ? 'bg-pink-400' : 'bg-blue-400'} rounded-full mr-3`}></div>
                                    {lang.language}
                                </h4>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2 overflow-hidden">
                                    <div 
                                        className={`h-2.5 rounded-full ${lang.color === 'pink' ? 'bg-gradient-to-r from-pink-400 to-pink-300' : 'bg-gradient-to-r from-blue-400 to-blue-300'}`}
                                        style={{ width: lang.width }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 font-medium">{lang.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-pink-500 text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-pink-400"></span>
                            PROFESSIONAL DEVELOPMENT
                            <span className="w-8 h-px bg-pink-400"></span>
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 relative inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Certifications & Courses
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-300 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                            Continuous learning and professional development
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'Foundations of Digital Marketing and E-commerce',
                                issuer: 'Coursera',
                                hours: '12 hours',
                                icon: TrendingUp,
                                color: 'pink'
                            },
                            {
                                name: 'Attract and Engage Customers with Digital Marketing',
                                issuer: 'Coursera',
                                hours: '14 hours',
                                icon: Users,
                                color: 'blue'
                            },
                            {
                                name: 'From Likes to Leads: Interact with Customers Online',
                                issuer: 'Coursera',
                                hours: '21 hours',
                                icon: TrendingUp,
                                color: 'pink'
                            },
                            {
                                name: 'Think Outside the Inbox: Email Marketing',
                                issuer: 'Coursera',
                                hours: '18 hours',
                                icon: Mail,
                                color: 'blue'
                            },
                            {
                                name: 'Assess for Success: Marketing Analytics and Measurement',
                                issuer: 'Coursera',
                                hours: '18 hours',
                                icon: BarChart3,
                                color: 'pink'
                            },
                            {
                                name: 'Make the Sale: Build, Launch, and Manage E-commerce Stores',
                                issuer: 'Coursera',
                                hours: '15 hours',
                                icon: Briefcase,
                                color: 'blue'
                            },
                            {
                                name: 'Satisfaction Guaranteed: Develop Customer Loyalty Online',
                                issuer: 'Coursera',
                                hours: '15 hours',
                                icon: Users,
                                color: 'pink'
                            },
                            {
                                name: 'Accelerate Your Job Search with AI',
                                issuer: 'Coursera',
                                hours: '',
                                icon: TrendingUp,
                                color: 'blue'
                            },
                            {
                                name: 'Person-Centred Counselling Course',
                                issuer: 'Udemy',
                                hours: '',
                                icon: Users,
                                color: 'pink'
                            },
                            {
                                name: 'Diploma Training Course in Modern Applied Psychology (DiMAP)',
                                issuer: 'Udemy',
                                hours: '',
                                icon: Brain,
                                color: 'blue'
                            }
                        ].map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-pink-200">
                                    <div className="flex items-start space-x-4">
                                        <div className={`${cert.color === 'pink' ? 'bg-pink-100 group-hover:bg-pink-200' : 'bg-blue-100 group-hover:bg-blue-200'} p-3 rounded-xl transition-colors duration-300 mt-1`}>
                                            <Icon className={cert.color === 'pink' ? 'text-pink-500' : 'text-blue-400'} size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg text-black mb-2 group-hover:text-pink-500 transition-colors duration-200">
                                                {cert.name}
                                            </h4>
                                            <p className="text-pink-500 font-medium mb-1">{cert.issuer}</p>
                                            {cert.hours && <p className="text-gray-600 text-sm">{cert.hours}</p>}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Skills Summary */}
                    <div className="mt-16 bg-white p-8 lg:p-10 rounded-3xl shadow-2xl border-2 border-gray-100">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-black inline-block relative" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Key Skills Acquired
                            </h3>
                            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-300 mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                'Digital Marketing Strategy', 'Social Media Marketing', 'Email Marketing', 'Content Creation',
                                'SEO Fundamentals', 'Marketing Analytics', 'E-commerce Management', 'Customer Relationship Management',
                                'Campaign Planning', 'Performance Tracking', 'Conversion Optimization', 'Brand Development'
                            ].map((skill, index) => (
                                <div key={index} className="group flex items-center space-x-3 p-3 bg-gray-50 hover:bg-pink-50 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-pink-200">
                                    <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                    <p className="text-gray-700 group-hover:text-black font-medium text-sm">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillsAndCertifications;
