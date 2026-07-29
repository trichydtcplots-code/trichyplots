import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socials = [
    { name: 'WhatsApp', url: 'https://wa.me/917904595766', color: '#25D366', icon: <FaWhatsapp /> },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1GjfjTbJrL/', color: '#1877F2', icon: <FaFacebook /> },
    { name: 'Instagram', url: 'https://www.instagram.com/saravanamu', color: '#E4405F', icon: <FaInstagram /> },
    { name: 'YouTube', url: 'https://youtube.com/@trichydtcpplots', color: '#FF0000', icon: <FaYoutube /> },
    { name: 'X', url: 'https://x.com/SaravanaMu26', color: '#000000', icon: <FaXTwitter /> },
    { name: 'Threads', url: 'https://www.threads.com/@saravanamu', color: '#000000', icon: <SiThreads /> },
  ];

  return (
    <div className={`floating-actions ${isVisible ? 'visible' : ''}`}>
      <div className="social-stack">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`round-btn btn-${social.name.toLowerCase()}`}
            aria-label={social.name}
          >
            <span className="btn-icon">
              {social.icon}
            </span>
          </a>
        ))}
      </div>

      <button
        className="round-btn scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      <style dangerouslySetInnerHTML={{
        __html: `
        .floating-actions {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.4s var(--e);
        }
        .floating-actions.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .social-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .round-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border: 1px solid rgba(15, 23, 42, 0.08);
          cursor: pointer;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: #334155;
        }
        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: inherit;
          transition: transform 0.3s var(--e);
        }
        .round-btn:hover .btn-icon {
          transform: scale(1.1);
        }
        .round-btn:hover {
          transform: translateY(-5px) scale(1.08);
        }
        /* Vibrant brand colors and matching shadows by default */
        .btn-whatsapp {
          background: #25D366 !important;
          color: white !important;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3) !important;
          border-color: transparent !important;
        }
        .btn-whatsapp:hover {
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.45) !important;
        }
        .btn-facebook {
          background: #1877F2 !important;
          color: white !important;
          box-shadow: 0 4px 15px rgba(24, 119, 242, 0.3) !important;
          border-color: transparent !important;
        }
        .btn-facebook:hover {
          box-shadow: 0 8px 25px rgba(24, 119, 242, 0.45) !important;
        }
        .btn-instagram {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
          color: white !important;
          box-shadow: 0 4px 15px rgba(220, 39, 67, 0.3) !important;
          border-color: transparent !important;
        }
        .btn-instagram:hover {
          box-shadow: 0 8px 25px rgba(220, 39, 67, 0.45) !important;
        }
        .btn-youtube {
          background: #FF0000 !important;
          color: white !important;
          box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3) !important;
          border-color: transparent !important;
        }
        .btn-youtube:hover {
          box-shadow: 0 8px 25px rgba(255, 0, 0, 0.45) !important;
        }
        .btn-x {
          background: #000000 !important;
          color: white !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        .btn-x:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.45) !important;
        }
        .btn-threads {
          background: #000000 !important;
          color: white !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        .btn-threads:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.45) !important;
        }
        .scroll-top {
          background: var(--primary);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25);
        }
        .scroll-top:hover {
          background: var(--primary-dark);
          box-shadow: 0 8px 25px rgba(30, 64, 175, 0.45);
        }
        @media (max-width: 600px) {
          .floating-actions {
            bottom: 20px;
            right: 20px;
            gap: 10px;
          }
          .round-btn {
            width: 44px;
            height: 44px;
          }
          .btn-icon {
            font-size: 18px;
          }
        }
      `}} />
    </div>
  );
};

export default FloatingActions;
