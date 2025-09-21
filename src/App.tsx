import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <Header onNavigate={scrollToSection} activeSection={activeSection} />
      <main>
        <Hero onContactClick={() => scrollToSection('contact')} />
        <About />
        <Services />
        <Testimonials />
        <Blog />
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;