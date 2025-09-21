import React from 'react';
import { MessageCircle, BookOpen, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

function Hero({ onContactClick }: HeroProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919828535854', '_blank');
  };

  const handleTrialClick = () => {
    const message = encodeURIComponent('Hi! I would like to join a free trial class. Please provide more details.');
    window.open(`https://wa.me/919828535854?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 min-h-screen transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300 animate-fade-in">
              Excel in Your Studies with
              <span className="text-gradient dark:text-gradient-dark block mt-2">Omega Coaching</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300 animate-slide-up">
              Personalized tutoring for Class 9-12 to achieve academic success. 
              Join thousands of students who have transformed their grades with our expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleTrialClick}
                className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-deep dark:hover:shadow-neumorphic-dark-deep transition-all duration-300 hover-lift animate-glow"
              >
                <BookOpen className="w-5 h-5 mr-3" />
                Join a Free Trial Class
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-success-600 dark:text-success-500 font-semibold rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-deep dark:hover:shadow-neumorphic-dark-deep transition-all duration-300 hover-lift"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset transition-all duration-300 hover-lift">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Students Taught</div>
              </div>
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset transition-all duration-300 hover-lift">
                <div className="text-3xl font-bold text-success-600 dark:text-success-500 mb-2">95%</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset transition-all duration-300 hover-lift">
                <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">5+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-neumorphic-deep dark:shadow-neumorphic-dark-deep p-8 overflow-hidden transition-all duration-300 animate-float">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying together"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-8 bg-gradient-to-t from-primary-600/30 to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark p-6 hidden lg:block transition-all duration-300 animate-bounce-subtle">
              <div className="flex items-center">
                <Award className="w-8 h-8 text-warning-500 mr-3" />
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Top Rated</div>
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Coaching Center</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark p-6 hidden lg:block transition-all duration-300 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-success-500 mr-3" />
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">95% Success</div>
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Board Exams</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-white dark:bg-gray-800 text-success-600 dark:text-success-500 rounded-full shadow-neumorphic-deep dark:shadow-neumorphic-dark-deep hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-all duration-300 flex items-center justify-center hover-lift animate-bounce-subtle animate-glow"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
}

export default Hero;