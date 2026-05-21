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
    setIsMobileMenuOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        document.body.style.overflow = 'hidden';
        window.history.pushState({ menuOpen: true }, '');
      } else {
        document.body.style.overflow = '';
        if (window.history.state?.menuOpen) {
          window.history.back();
        }
      }
      return nextState;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
    if (window.history.state?.menuOpen) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    
    // Short timeout allows the menu to begin transition and body overflow to restore
    // before calculating the target scroll position.
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
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
          <div 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="close-menu" onClick={closeMobileMenu} aria-label="Close Menu">
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
