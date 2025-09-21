import React from 'react';
import { MessageCircle, Phone, Mail, GraduationCap, Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919828535854', '_blank');
  };

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mr-3 transition-colors duration-300">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">Omega Coaching</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-md transition-colors duration-300">
              Premier coaching service dedicated to helping Class 9-12 students excel in their 
              board exams with personalized attention and proven teaching methods.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset flex items-center justify-center transition-all duration-200"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
              </button>
              <button className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset flex items-center justify-center transition-all duration-200">
                <Facebook className="w-5 h-5 text-blue-600" />
              </button>
              <button className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset flex items-center justify-center transition-all duration-200">
                <Instagram className="w-5 h-5 text-pink-600" />
              </button>
              <button className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset flex items-center justify-center transition-all duration-200">
                <Youtube className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  Study Tips
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6 transition-colors duration-300">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  Refund Policy
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors duration-200"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 transition-colors duration-300">
              © 2025 Omega Coaching. All rights reserved.
            </p>
            <div className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
              Empowering students to achieve academic excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;