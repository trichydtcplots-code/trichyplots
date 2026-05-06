import React, { useState } from 'react';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="nlogo" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img
            src="/logo.png"
            alt="Trichy DTCP Plots Logo"
            style={{
              width: isScrolled ? '38px' : '45px',
              height: isScrolled ? '38px' : '45px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.4s var(--e)'
            }}
          />
          <div>
            <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '1px' }}>TRICHY DTCP PLOTS</span>
            <small style={{ display: 'block', opacity: 0.7, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Saravanan &middot; Land Consultant</small>
          </div>
        </div>
        <div className="nlinks">
          <a href="#hero">Home</a>
          <a href="#locations">Locations</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="tel:+917904595766" className="ncall">Call Now</a>
        <button className={`nhbtn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`nmob ${isMenuOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={closeMenu}>Home</a>
        <a href="#locations" onClick={closeMenu}>Locations</a>
        <a href="#about" onClick={closeMenu}>About Me</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#news" onClick={closeMenu}>News</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="tel:+917904595766" style={{ color: 'var(--g)', fontWeight: 700 }} onClick={closeMenu}>&#128222; +91 79045 95766</a>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media(max-width:960px) {
          .social-links-desktop { display: none !important; }
          .ncall { display: none !important; }
        }
        @media(max-width:480px) {
          .nlogo span {
            font-size: 13px !important;
          }
          .nlogo small {
            font-size: 8px !important;
            letter-spacing: 1.1px !important;
          }
          .nlogo {
            gap: 8px !important;
          }
          .ncall {
            padding: 8px 14px !important;
            font-size: 11px !important;
          }
          #nav {
            padding: 0 12px !important;
          }
          .nlogo img {
            width: 34px !important;
            height: 34px !important;
          }
        }
      `}} />
    </>
  );
};

export default Header;
