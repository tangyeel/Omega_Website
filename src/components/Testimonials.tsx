import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rohan Sharma',
      class: 'Class 10',
      score: '95%',
      subject: 'Science',
      quote: 'Omega helped me score 95% in Class 10 Science! The teachers are amazing and the study material is excellent.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Patel',
      class: 'Class 12',
      score: '92%',
      subject: 'Economics',
      quote: 'The personalized attention I received at Omega was incredible. I went from struggling with Economics to scoring 92% in boards!',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Arjun Singh',
      class: 'Class 11',
      score: '89%',
      subject: 'Accounts',
      quote: 'The 1-on-1 sessions helped me understand complex accounting concepts easily. Highly recommend Omega!',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sneha Gupta',
      class: 'Class 9',
      score: '94%',
      subject: 'Math',
      quote: 'Math used to be my weakest subject, but Omega\'s teaching methods made it my strongest! Scored 94% in finals.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rajesh Kumar (Parent)',
      class: 'Parent of Class 12 student',
      score: '96%',
      subject: 'Overall',
      quote: 'My daughter improved tremendously after joining Omega. The teachers are dedicated and the results speak for themselves.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">Student Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Hear from our students and parents about their transformative learning experience
          </p>
        </div>

        <div className="relative">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic-deep dark:shadow-neumorphic-dark-deep p-8 md:p-12 transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Testimonial Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset overflow-hidden transition-colors duration-300">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mx-auto md:mx-0 mb-4" />
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{testimonials[currentTestimonial].class}</p>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-end">
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset px-4 py-2 transition-colors duration-300">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-lg font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                          {testimonials[currentTestimonial].score}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 ml-1 transition-colors duration-300">in {testimonials[currentTestimonial].subject}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial
                  ? 'bg-blue-600 shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset'
                  : 'bg-gray-200 dark:bg-gray-800 shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-colors duration-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;