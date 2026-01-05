import { useState, useEffect } from 'react';
import { Menu, X, Download, MessageCircle, GraduationCap, Award, Briefcase, User, Mail, Phone, MapPin, Linkedin as LinkedIn, Calendar, ExternalLink, ChevronRight, Star, TrendingUp, Users, BookOpen, Code, BarChart3, Brain, ArrowUp } from 'lucide-react';
import profileImage from './DSC_8833.jpg';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import { Timeline } from './components/Timeline';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowScrollTop(currentScrollY > 500);

      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="font-lato bg-white text-gray-900 overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section id="hero" className="bg-gray-50">
        {/* Header */}
        <header className="py-4 md:py-6">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-gray-900">Mrunmayi Shahane</div>
              </div>

              <div className="flex lg:hidden">
                <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900">
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>

              <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                <button onClick={() => scrollToSection('about')} className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">About</button>
                <button onClick={() => scrollToSection('experience')} className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Experience</button>
                <button onClick={() => scrollToSection('skills')} className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Contact</button>
              </div>

              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                <a href="https://linkedin.com/in/mrunmayi-shahane" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">LinkedIn</a>
                <a href="/Modern_Simple_ATS_Friendly_LateX_CV.pdf" download className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              <div>
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                    HR Professional Ready to Drive Organizational Success
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                    Passionate about talent acquisition, employee engagement, and building positive workplace cultures. Open to new opportunities.
                  </p>

                  <form action="#" method="POST" className="mt-8 sm:mt-10" onSubmit={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                    <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                        required
                      />
                      <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                        <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">
                          Get in Touch
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                  <div className="flex items-center">
                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">3+</p>
                    <p className="ml-3 text-sm text-gray-900 font-pj">Years<br />Experience</p>
                  </div>

                  <div className="hidden sm:block">
                    <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                      <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                      <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                      <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                      <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                    </svg>
                  </div>

                  <div className="flex items-center">
                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">50+</p>
                    <p className="ml-3 text-sm text-gray-900 font-pj">Successful<br />Hires</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 rounded-3xl transform rotate-3"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute top-1/4 -right-8 w-16 h-16 border-4 border-gold/30 rounded-full"></div>
                <div className="absolute bottom-1/4 -left-8 w-20 h-20 border-4 border-blue-300/30 rounded-full"></div>
                <div className="absolute top-10 -left-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="2" fill="#F59E0B" opacity="0.6"/>
                    <circle cx="10" cy="10" r="1.5" fill="#3B82F6" opacity="0.5"/>
                    <circle cx="30" cy="15" r="1.5" fill="#8B5CF6" opacity="0.5"/>
                  </svg>
                </div>
                <div className="absolute bottom-10 -right-6">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 25 L20 15 L30 25 L20 35 Z" fill="#F59E0B" opacity="0.3"/>
                  </svg>
                </div>
                <img className="w-full relative z-10 rounded-2xl shadow-2xl" src={profileImage} alt="Mrunmayi Shahane - HR Professional" />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Enhanced About Section */}
      <AboutSection />

      {/* Enhanced Education Section */}
      <EducationSection />

      {/* Professional Experience Section - Timeline */}
      <section id="experience">
        <Timeline data={[
          {
            title: "2024",
            content: (
              <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-pink-400">
                <div className="p-6 lg:p-8 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-100/30 to-transparent rounded-bl-3xl -z-10"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="font-poppins text-xl lg:text-2xl font-bold text-navy mb-2 group-hover:text-pink-600 transition-colors duration-300">HR Intern</h3>
                      <p className="text-blue-600 font-medium">Silver Birch Multispeciality Hospital Pvt. Ltd.</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium shadow-sm group-hover:bg-pink-100 transition-colors duration-300">
                        September 2024 - November 2024
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy mb-3 flex items-center">
                        <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-blue-400 rounded-full mr-3"></div>
                        Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-3 pl-2">
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Assisted in day-to-day HR operations including recruitment, employee management, and performance reviews.</p>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Supported administrative HR functions while gaining exposure to healthcare HR practices.</p>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Worked under the guidance of the hospital's gynecologist to understand clinical support functions.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "2023-24",
            content: (
              <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-blue-400">
                <div className="p-6 lg:p-8 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-transparent rounded-bl-3xl -z-10"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="font-poppins text-xl lg:text-2xl font-bold text-navy mb-2 group-hover:text-blue-600 transition-colors duration-300">Administration Intern</h3>
                      <p className="text-pink-600 font-medium">Rely On Pharmaceuticals Pvt. Ltd.</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium shadow-sm group-hover:bg-blue-100 transition-colors duration-300">
                        December 2023 - March 2024
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy mb-3 flex items-center">
                        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-pink-400 rounded-full mr-3"></div>
                        Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-3 pl-2">
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Interned in the Administration Department, contributing to daily operational management.</p>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Assisted with coordination between departments, file management, and routine reporting tasks.</p>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Strengthened organizational and communication skills in a corporate environment.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "2019",
            content: (
              <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-purple-400">
                <div className="p-6 lg:p-8 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100/30 to-transparent rounded-bl-3xl -z-10"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="font-poppins text-xl lg:text-2xl font-bold text-navy mb-2 group-hover:text-purple-600 transition-colors duration-300">Rights Cell Intern (Volunteer)</h3>
                      <p className="text-blue-600 font-medium">Global Human Welfare Organization</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium shadow-sm group-hover:bg-purple-100 transition-colors duration-300">
                        March 2019 - December 2019
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy mb-3 flex items-center">
                        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
                        Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-3 pl-2">
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Worked on social justice and human rights advocacy projects under the Shivane Vibhag division.</p>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Collaborated on research related to corruption, bonded labor, child rights, and human rights protection.</p>
                        </li>
                        <li className="flex items-start group/item">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover/item:text-navy transition-colors duration-300">Participated in outreach and awareness initiatives across government-linked programs.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
        ]} />
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 relative inline-block">
              Skills
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-600">Technical proficiency and soft skills</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Digital Marketing Skills */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold to-yellow-400 p-3 rounded-full mr-4">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-navy">Digital Marketing</h3>
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
                  <div key={index} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="font-medium text-navy group-hover:text-gold transition-colors duration-200">{item.skill}</span>
                      <span className="text-gold font-semibold bg-gold/10 px-2 py-0.5 rounded-md">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-navy via-gold to-yellow-400 h-3 rounded-full transition-all duration-1000 transform origin-left group-hover:scale-105 relative"
                        style={{ width: `${item.level}%` }}
                      >
                        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Data Visualization Skills */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold to-yellow-400 p-3 rounded-full mr-4">
                  <BarChart3 className="text-white" size={28} />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-navy">Data & Tools</h3>
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
                  <div key={index} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="font-medium text-navy group-hover:text-gold transition-colors duration-200">{item.skill}</span>
                      <span className="text-gold font-semibold bg-gold/10 px-2 py-0.5 rounded-md">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-navy via-gold to-yellow-400 h-3 rounded-full transition-all duration-1000 transform origin-left group-hover:scale-105 relative"
                        style={{ width: `${item.level}%` }}
                      >
                        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold to-yellow-400 p-3 rounded-full mr-4">
                  <Brain className="text-white" size={28} />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-navy">Soft Skills</h3>
              </div>
              <div className="space-y-6">
                {[
                  { skill: 'Presentation', example: 'Effective communication of ideas and concepts' },
                  { skill: 'Planning', example: 'Strategic organization of tasks and projects' },
                  { skill: 'Creative Problem-Solving', example: 'Innovative approaches to challenges' },
                  { skill: 'Teamwork', example: 'Collaborative work in diverse environments' },
                  { skill: 'Adaptability', example: 'Quick adjustment to changing circumstances' },
                  { skill: 'Analytical Thinking', example: 'Data-driven decision making' }
                ].map((item, index) => (
                  <div key={index} className="group border-l-4 border-gold hover:border-yellow-400 pl-4 py-3 transition-all duration-300 hover:bg-gold/5 rounded-r-lg transform hover:-translate-x-1 hover:shadow-md">
                    <h4 className="font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-200 flex items-center">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      {item.skill}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* SEO Tools */}
          <div className="mt-12 bg-gradient-to-r from-navy via-navy/95 to-navy p-6 lg:p-8 rounded-3xl text-white shadow-2xl">
            <h3 className="font-poppins text-2xl font-bold mb-8 text-center">SEO & Software Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
              {[
                'Google Search Console', 'Google Analytics', 'Looker Studio', 'Google Trends', 
                'Screaming Frog', 'SEMrush', 'Ahrefs', 'WordPress', 'Project (MSP)', 
                'Adobe PhotoShop', 'Adobe Audition', 'Canva'
              ].map((tool, index) => (
                <div key={index} className="group text-center p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <p className="font-medium text-sm lg:text-base group-hover:text-gold transition-colors duration-200">{tool}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Languages */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { language: 'English', level: 'Fluent', width: '90%' },
              { language: 'Marathi', level: 'Native', width: '100%' },
              { language: 'Hindi', level: 'Native', width: '100%' }
            ].map((lang, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-gold transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-transparent hover:border-gold">
                <h4 className="font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300 flex items-center">
                  <div className="w-1.5 h-4 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {lang.language}
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-gold to-yellow-400 h-3 rounded-full relative"
                    style={{ width: lang.width }}
                  >
                    <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 relative inline-block">
              Certifications & Courses
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-600">Continuous learning and professional development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Foundations of Digital Marketing and E-commerce',
                issuer: 'Coursera',
                hours: '12 hours',
                icon: TrendingUp
              },
              {
                name: 'Attract and Engage Customers with Digital Marketing',
                issuer: 'Coursera',
                hours: '14 hours',
                icon: Users
              },
              {
                name: 'From Likes to Leads: Interact with Customers Online',
                issuer: 'Coursera',
                hours: '21 hours',
                icon: TrendingUp
              },
              {
                name: 'Think Outside the Inbox: Email Marketing',
                issuer: 'Coursera',
                hours: '18 hours',
                icon: Mail
              },
              {
                name: 'Assess for Success: Marketing Analytics and Measurement',
                issuer: 'Coursera',
                hours: '18 hours',
                icon: BarChart3
              },
              {
                name: 'Make the Sale: Build, Launch, and Manage E-commerce Stores',
                issuer: 'Coursera',
                hours: '15 hours',
                icon: Briefcase
              },
              {
                name: 'Satisfaction Guaranteed: Develop Customer Loyalty Online',
                issuer: 'Coursera',
                hours: '15 hours',
                icon: Users
              },
              {
                name: 'Accelerate Your Job Search with AI',
                issuer: 'Coursera',
                hours: '',
                icon: TrendingUp
              },
              {
                name: 'Person-Centred Counselling Course',
                issuer: 'Udemy',
                hours: '',
                icon: Users
              },
              {
                name: 'Diploma Training Course in Modern Applied Psychology (DiMAP)',
                issuer: 'Udemy',
                hours: '',
                icon: Brain
              }
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold/20 group-hover:bg-gold/30 p-3 rounded-full transition-colors duration-300 mt-1">
                      <Icon className="text-gold" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-poppins font-semibold text-lg text-navy mb-1 group-hover:text-gold transition-colors duration-200">{cert.name}</h4>
                      <p className="text-gold font-medium mb-1">{cert.issuer}</p>
                      {cert.hours && <p className="text-gray-600 text-sm">{cert.hours}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Skills Summary */}
          <div className="mt-16 bg-gradient-to-br from-white to-gray-50 p-6 lg:p-8 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="font-poppins text-2xl font-bold text-navy mb-8 text-center relative inline-block">
              Key Skills Acquired
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold to-yellow-400 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Digital Marketing Strategy', 'Social Media Marketing', 'Email Marketing', 'Content Creation',
                'SEO Fundamentals', 'Marketing Analytics', 'E-commerce Management', 'Customer Relationship Management',
                'Campaign Planning', 'Performance Tracking', 'Conversion Optimization', 'Brand Development'
              ].map((skill, index) => (
                <div key={index} className="group flex items-center space-x-3 p-3 bg-white hover:bg-gold/10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-gold/20">
                  <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-gray-700 group-hover:text-navy font-medium text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-navy via-navy/95 to-navy/90 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
              Let's Connect
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-yellow-400 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-lg lg:text-xl text-gray-300">Ready to discuss opportunities and collaborations</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg p-6 lg:p-8 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
              
              <h3 className="font-poppins text-2xl font-bold mb-6 flex items-center">
                <div className="w-1.5 h-6 bg-gold rounded-full mr-3"></div>
                Send a Message
              </h3>
              
              <form className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder-white/60 shadow-inner"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder-white/60 shadow-inner"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder-white/60 shadow-inner"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder-white/60 shadow-inner"
                    placeholder="Job Opportunity / Project Collaboration"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-gold transition-colors duration-200">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 resize-none placeholder-white/60 shadow-inner"
                    placeholder="I'd love to discuss..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="group w-full bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-gold flex items-center justify-center"
                >
                  <span className="mr-2">Send Message</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
              </form>
            </div>
            
            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-200">
                    <div className="bg-gold/20 p-3 rounded-full group-hover:bg-gold/30 transition-colors duration-200">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <span className="group-hover:text-gold transition-colors duration-200">mrunmayishahane@gmail.com</span>
                  </div>
                  <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-200">
                    <div className="bg-gold/20 p-3 rounded-full group-hover:bg-gold/30 transition-colors duration-200">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <span className="group-hover:text-gold transition-colors duration-200">+91 7775935914</span>
                  </div>
                  <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-200">
                    <div className="bg-gold/20 p-3 rounded-full group-hover:bg-gold/30 transition-colors duration-200">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <span className="group-hover:text-gold transition-colors duration-200">Pune, India</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-poppins text-xl font-semibold mb-4">Professional Links</h4>
                <div className="space-y-3">
                  <a href="https://linkedin.com/in/mrunmayi-shahane" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-gray-300 hover:text-gold transition-all duration-200 p-3 rounded-xl hover:bg-white/10">
                    <LinkedIn size={20} />
                    <span>LinkedIn Profile</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a href="#" className="group flex items-center space-x-3 text-gray-300 hover:text-gold transition-all duration-200 p-3 rounded-xl hover:bg-white/10">
                    <Calendar size={20} />
                    <span>Schedule a Meeting</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a href="/Modern_Simple_ATS_Friendly_LateX_CV.pdf" download className="group flex items-center space-x-3 text-gray-300 hover:text-gold transition-all duration-200 p-3 rounded-xl hover:bg-white/10">
                    <Download size={20} />
                    <span>Download Resume</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h4 className="font-poppins text-lg font-semibold mb-3">Quick Response</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  I typically respond within 24 hours. For urgent matters, please feel free to call directly.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-navy-dark text-gray-400 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="font-poppins font-bold text-2xl mb-4">
              <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Mrunmayi Shahane</span>
            </div>
            <p className="mb-6">Digital Marketer and HR Professional</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://linkedin.com/in/mrunmayi-shahane" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full hover:bg-gold/10 transition-all duration-200 hover:scale-110">
                <LinkedIn className="group-hover:text-gold transition-colors duration-200" size={24} />
              </a>
              <a href="mailto:mrunmayishahane@gmail.com" className="group p-3 rounded-full hover:bg-gold/10 transition-all duration-200 hover:scale-110">
                <Mail className="group-hover:text-gold transition-colors duration-200" size={24} />
              </a>
              <a href="tel:+917775935914" className="group p-3 rounded-full hover:bg-gold/10 transition-all duration-200 hover:scale-110">
                <Phone className="group-hover:text-gold transition-colors duration-200" size={24} />
              </a>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-6"></div>
            <p className="text-sm">
              © 2024 Mrunmayi Shahane. All rights reserved. | Digital Marketing & HR Professional
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy p-3 rounded-full shadow-gold hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 border-2 border-white/30"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="animate-bounce-slow" />
        </button>
      )}
    </div>
  );
}

export default App;
