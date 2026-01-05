import { GraduationCap, BookOpen, Award, TrendingUp } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education & Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="p-6 bg-white border border-gray-200 shadow-xl rounded-3xl">
          <div className="space-y-6">
            {/* Academic Degree Card */}
            <div className="p-4 bg-gradient-to-r from-pink-200 to-rose-200 border border-pink-300/50 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-gray-700" />
                  </div>
                  <span className="font-medium text-gray-800">BBA Degree</span>
                </div>
                <span className="font-semibold text-gray-800">CGPA: 7.03</span>
              </div>
            </div>

            {/* Specialization Card */}
            <div className="p-4 bg-gradient-to-r from-purple-200 to-indigo-200 border border-purple-300/50 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-gray-700" />
                  </div>
                  <span className="font-medium text-gray-800">HR Management</span>
                </div>
                <span className="font-semibold text-gray-800">Grade: A</span>
              </div>
            </div>

            {/* Main Education Details */}
            <div className="space-y-4 py-6 px-2 border border-gray-100 rounded-2xl bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 font-medium">Academic Journey</span>
                </div>
                <Award className="w-5 h-5 text-pink-500" />
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900">Bachelor of Business Administration</div>
                <div className="flex items-center gap-2 text-pink-500">
                  <span className="font-medium">Human Resource Management Specialization</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Savitribai Phule Pune University | 2022-2025</p>
                  <p className="mt-1">Shree Siddhivinayak Arts & Commerce Mahila Mahavidyalaya, Pune</p>
                </div>
              </div>
            </div>

            {/* Coursework Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center border border-pink-200">
                  <GraduationCap className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Core HR Courses</h3>
                  <p className="text-sm text-gray-500">HRM, Global HRM, Legal Aspects in HR</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Business & Analytics</h3>
                  <p className="text-sm text-gray-500">MIS, Data Mining, Research Methodology</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center border border-purple-200">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Digital & Management</h3>
                  <p className="text-sm text-gray-500">E-Commerce, CSR, Business Project Management</p>
                </div>
              </div>
            </div>

            {/* Certifications Summary */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Professional Certifications</h3>
                <span className="text-sm font-medium text-blue-600">10+ Courses</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Digital Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>E-commerce</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Email Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
