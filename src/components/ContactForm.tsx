import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, MessageSquare, Phone, MessageCircle, MapPin } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to know more about Omega coaching services.');
    window.open(`https://wa.me/919828535854?text=${message}`, '_blank');
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        class: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic-deep dark:shadow-neumorphic-dark-deep p-12 transition-colors duration-300">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">Message Sent!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <div className="inline-flex items-center text-green-600 font-medium">
              <CheckCircle className="w-5 h-5 mr-2" />
              We've received your message
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Ready to start your academic journey? Contact us today for personalized coaching solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark p-8 h-full transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-colors duration-300">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mr-4 transition-colors duration-300">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">WhatsApp</h4>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +91 98285 35854
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mr-4 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">Phone</h4>
                    <a
                      href="tel:+919828535854"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      +91 98285 35854
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mr-4 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">Email</h4>
                    <a
                      href="mailto:contact@omega.coaching"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      contact@omega.coaching
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-300">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-800 text-green-600 font-medium rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quick WhatsApp Chat
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-colors duration-300">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5 transition-colors duration-300" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-200 dark:bg-gray-800 border-none rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset focus:shadow-neumorphic-deep dark:focus:shadow-neumorphic-dark-deep transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 ${
                          errors.name ? 'ring-2 ring-red-400' : ''
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5 transition-colors duration-300" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-200 dark:bg-gray-800 border-none rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset focus:shadow-neumorphic-deep dark:focus:shadow-neumorphic-dark-deep transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 ${
                          errors.email ? 'ring-2 ring-red-400' : ''
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5 transition-colors duration-300" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-200 dark:bg-gray-800 border-none rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset focus:shadow-neumorphic-deep dark:focus:shadow-neumorphic-dark-deep transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="class" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                      Class
                    </label>
                    <select
                      id="class"
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 border-none rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset focus:shadow-neumorphic-deep dark:focus:shadow-neumorphic-dark-deep transition-all duration-200 text-gray-800 dark:text-gray-200"
                    >
                      <option value="">Select your class</option>
                      <option value="class-9">Class 9</option>
                      <option value="class-10">Class 10</option>
                      <option value="class-11">Class 11</option>
                      <option value="class-12">Class 12</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                    Subject of Interest
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 border-none rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset focus:shadow-neumorphic-deep dark:focus:shadow-neumorphic-dark-deep transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="e.g., Math, Science, Economics"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 w-5 h-5 transition-colors duration-300" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-200 dark:bg-gray-800 border-none rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset focus:shadow-neumorphic-deep dark:focus:shadow-neumorphic-dark-deep transition-all duration-200 resize-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 ${
                        errors.message ? 'ring-2 ring-red-400' : ''
                      }`}
                      placeholder="Tell us about your academic goals and how we can help..."
                    />
                  </div>
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 group inline-flex items-center justify-center px-8 py-4 bg-gray-200 dark:bg-gray-800 text-blue-600 font-semibold rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-gray-200 dark:bg-gray-800 text-green-600 font-semibold rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;