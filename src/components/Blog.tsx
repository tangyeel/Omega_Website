import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Target } from 'lucide-react';

function Blog() {
  const blogPosts = [
    {
      title: 'How to Ace Math Boards: 10 Proven Strategies',
      excerpt: 'Master mathematical concepts and problem-solving techniques that guarantee success in board examinations.',
      author: 'Omega Team',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Math Tips',
      icon: Target,
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Mastering Economics for Class 12: Complete Guide',
      excerpt: 'Comprehensive strategies to understand economic theories, solve numerical problems, and excel in board exams.',
      author: 'Omega Team',
      date: 'January 12, 2025',
      readTime: '7 min read',
      category: 'Economics',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Science Study Techniques That Actually Work',
      excerpt: 'Evidence-based study methods to improve retention and understanding of complex scientific concepts.',
      author: 'Omega Team',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Science',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">Study Tips & Resources</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Expert advice and proven strategies to help you excel in your academic journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-deep dark:hover:shadow-neumorphic-dark-deep transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-200 dark:bg-gray-800 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium shadow-neumorphic dark:shadow-neumorphic-dark transition-colors duration-300">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mr-3 transition-colors duration-300">
                    <post.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {post.readTime}
                  </div>
                </div>

                <button className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic-deep dark:shadow-neumorphic-dark-deep p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">
              Want More Study Tips?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              Get exclusive study materials and tips delivered to your WhatsApp
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent('Hi! I would like to receive study tips and materials on WhatsApp.');
                window.open(`https://wa.me/919828535854?text=${message}`, '_blank');
              }}
              className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-800 text-green-600 font-medium rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Subscribe via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;