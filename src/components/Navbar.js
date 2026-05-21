'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <a href="#" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
            HouseStudio <span>Interiors</span>
          </a>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
            <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a></li>
            <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
            <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')}>Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
          </ul>
          <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="close-menu" onClick={closeMobileMenu}>
          <i className="fas fa-times"></i>
        </div>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
          <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
          <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}
