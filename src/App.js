import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Areas from './components/Areas';
import About from './components/About';
import TrustStats from './components/TrustStats';
import ServicesAndTesti from './components/ServicesAndTesti';
import Why from './components/Why';
import Locations from './components/Locations';
import NewspaperNews from './components/NewspaperNews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll handling for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Custom Cursor Logic
    const cur = document.getElementById('cur');
    const ring = document.getElementById('ring');
    
    const moveCursor = (e) => {
      if (cur) {
        cur.style.left = e.clientX + 'px';
        cur.style.top = e.clientY + 'px';
      }
      if (ring) {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.rv, .rv2');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`App ${isScrolled ? 'nav-scrolled' : ''}`}>
      
      <Header isScrolled={isScrolled} />
      <Hero />
      <Areas />
      <Locations />
      <About />
      <TrustStats />
      <Why />
      <ServicesAndTesti />
      <NewspaperNews />
      <ContactForm />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
