import React from 'react';
import { BookOpen, Users, User, MessageCircle } from 'lucide-react';

function Services() {
  const handleWhatsAppClick = (className: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${className} coaching. Please provide more details about the courses and fees.`);
    window.open(`https://wa.me/919828535854?text=${message}`, '_blank');
  };

  const handleTrialClick = (className: string) => {
    const message = encodeURIComponent(`Hi! I would like to book a free trial class for ${className}. Please let me know the available slots.`);
    window.open(`https://wa.me/919828535854?text=${message}`, '_blank');
  };

  const services = [
    {
      class: 'Class 9',
      subjects: ['SST', 'Math', 'Science'],
      description: 'Build strong foundations for higher classes with comprehensive coverage of NCERT syllabus',
      features: ['Interactive group classes', 'Personalized 1-on-1 sessions', 'Regular assessments', 'Doubt clearing sessions'],
      color: 'blue'
    },
    {
      class: 'Class 10',
      subjects: ['SST', 'Math', 'Science'],
      description: 'Board exam preparation with focused practice and exam strategies',
      features: ['Board exam pattern practice', 'Previous year papers', 'Mock tests', 'Performance analysis'],
      color: 'green'
    },
    {
      class: 'Class 11',
      subjects: ['Economics', 'Accounts', 'Applied Maths'],
      description: 'Smooth transition to higher secondary with conceptual clarity',
      features: ['Commerce stream specialization', 'Practical applications', 'Case study analysis', 'Career guidance'],
      color: 'purple'
    },
    {
      class: 'Class 12',
      subjects: ['Economics', 'Accounts', 'Applied Maths'],
      description: 'Final board exam preparation with intensive practice and revision',
      features: ['Intensive board preparation', 'Sample paper practice', 'Time management skills', 'College admission guidance'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600'
    };
    return colors[color as keyof typeof colors] || 'text-blue-600';
  };

  return (
    <section id="services" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">Our Tutoring Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Comprehensive coaching programs designed for each class with expert faculty and proven methodologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark p-8 hover:shadow-neumorphic-deep dark:hover:shadow-neumorphic-dark-deep transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mr-4 transition-colors duration-300`}>
                  <BookOpen className={`w-6 h-6 ${getColorClasses(service.color)}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">{service.class}</h3>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.subjects.map((subject, subIndex) => (
                    <span
                      key={subIndex}
                      className={`px-3 py-1 bg-gray-200 dark:bg-gray-800 ${getColorClasses(service.color)} text-sm font-medium rounded-lg shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset transition-colors duration-300`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleTrialClick(service.class)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-800 text-blue-600 font-medium rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Free Trial
                </button>
                <button
                  onClick={() => handleWhatsAppClick(service.class)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-800 text-green-600 font-medium rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Class Types */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark p-8 text-center transition-colors duration-300">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">Group Classes</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              Interactive group sessions with peer learning and collaborative problem-solving
            </p>
            <ul className="text-left space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
              <li>• Small batch sizes (8-12 students)</li>
              <li>• Interactive teaching methods</li>
              <li>• Peer learning opportunities</li>
              <li>• Cost-effective pricing</li>
            </ul>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark p-8 text-center transition-colors duration-300">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <User className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">1-on-1 Sessions</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              Personalized attention with customized learning pace and individual focus
            </p>
            <ul className="text-left space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
              <li>• Completely personalized approach</li>
              <li>• Flexible scheduling</li>
              <li>• Focused attention on weak areas</li>
              <li>• Faster progress tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;