import React from 'react';
import { Users, Target, Award, BookOpen, CheckCircle } from 'lucide-react';

function About() {
  const strengths = [
    {
      icon: Users,
      title: 'Expert Tutors',
      description: 'Qualified teachers with years of board exam experience'
    },
    {
      icon: Target,
      title: 'Personalized Plans',
      description: 'Customized study plans tailored to each student\'s needs'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '95% of our students achieve their target scores'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Coverage',
      description: 'Complete syllabus coverage for all subjects'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 animate-fade-in">About Omega Coaching</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 animate-slide-up">
            Transforming academic journeys with personalized coaching and proven methodologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-neumorphic-deep dark:shadow-neumorphic-dark-deep p-8 transition-all duration-300 hover-lift">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Omega Coaching Team"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-neumorphic dark:shadow-neumorphic-dark p-10 transition-all duration-300">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Our Story</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg transition-colors duration-300">
                Omega is a premier coaching service with 5+ years of helping Class 9-12 students 
                excel in their board exams. We believe that every student has the potential to 
                achieve greatness with the right guidance and support.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg transition-colors duration-300">
                Our mission is to provide personalized, high-quality education that not only 
                improves grades but also builds confidence and critical thinking skills that 
                last a lifetime.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-success-600 dark:text-success-500 mr-4" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium text-lg transition-colors duration-300">5+ Years of Excellence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-success-600 dark:text-success-500 mr-4" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium text-lg transition-colors duration-300">500+ Successful Students</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-success-600 dark:text-success-500 mr-4" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium text-lg transition-colors duration-300">Expert Faculty Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-success-600 dark:text-success-500 mr-4" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium text-lg transition-colors duration-300">Proven Teaching Methods</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-neumorphic dark:shadow-neumorphic-dark p-10 hover:shadow-neumorphic-deep dark:hover:shadow-neumorphic-dark-deep transition-all duration-300 hover-lift group">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mx-auto mb-8 transition-all duration-300 group-hover:scale-110">
                  <strength.icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{strength.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">{strength.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;