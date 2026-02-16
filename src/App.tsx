import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import profileImage from './DSC_8833.jpg';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import { Timeline } from './components/Timeline';
import SkillsAndCertifications from './components/SkillsAndCertifications';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';

function App() {
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
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="font-lato bg-white text-gray-900 overflow-x-hidden">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Enhanced Hero Section */}
      <section id="hero" className="bg-gray-50 pt-20">

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
                    <circle cx="20" cy="20" r="2" fill="#F59E0B" opacity="0.6" />
                    <circle cx="10" cy="10" r="1.5" fill="#3B82F6" opacity="0.5" />
                    <circle cx="30" cy="15" r="1.5" fill="#8B5CF6" opacity="0.5" />
                  </svg>
                </div>
                <div className="absolute bottom-10 -right-6">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 25 L20 15 L30 25 L20 35 Z" fill="#F59E0B" opacity="0.3" />
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

      <SkillsAndCertifications />

      <ContactSection />
      <FooterSection />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-pink-200 transition-all duration-300 transform hover:scale-110 z-50 border-2 border-white"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="animate-bounce" />
        </button>
      )}
    </div>
  );
}

export default App;
