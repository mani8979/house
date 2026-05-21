'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Small delay to trigger the entering reveal-up animations cleanly
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const headerOffset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Image using next/image for optimum web vitals */}
      <div className="hero-bg">
        <Image
          src="/assets/images/hero.png"
          alt="Premium Living Room"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={95}
        />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className={`reveal-up ${isActive ? 'reveal-active' : ''}`}>
          Transforming Spaces Into <br />
          <span>Timeless Experiences</span>
        </h1>
        <p className={`reveal-up ${isActive ? 'reveal-active' : ''}`} style={{ transitionDelay: '0.2s' }}>
          Premium Interior Design Studio for Modern Homes, Apartments & Luxury Spaces
        </p>
        <div className={`hero-btns reveal-up ${isActive ? 'reveal-active' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('projects');
              if (target) {
                window.scrollTo({
                  top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                  behavior: 'smooth',
                });
              }
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('contact');
              if (target) {
                window.scrollTo({
                  top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                  behavior: 'smooth',
                });
              }
            }}
          >
            Book Consultation
          </a>
        </div>
      </div>

      <div className="scroll-indicator" onClick={handleScrollClick}>
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
