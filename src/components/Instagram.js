'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const INSTA_ITEMS = [
  { image: '/assets/images/hero.png', alt: 'Instagram Post Living Room' },
  { image: '/assets/images/kitchen.png', alt: 'Instagram Post Kitchen' },
  { image: '/assets/images/bedroom.png', alt: 'Instagram Post Bedroom' },
  { image: '/assets/images/about.png', alt: 'Instagram Post Studio' }
];

export default function Instagram() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal-up') || [];
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="instagram-showcase" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header reveal-up">
          <span className="sub-heading">Follow Our Journey</span>
          <h2>Instagram @housestudio_interiors</h2>
        </div>

        <div className="insta-grid">
          {INSTA_ITEMS.map((item, index) => (
            <a
              key={index}
              href="https://www.instagram.com/housestudio_interiors?igsh=M2Y5enJhbWY4MGs5"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-item reveal-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{ objectFit: 'cover' }}
                quality={85}
              />
              <div className="insta-overlay">
                <i className="fab fa-instagram"></i>
              </div>
            </a>
          ))}
        </div>

        <div className="social-links-cta reveal-up" style={{ transitionDelay: '0.4s' }}>
          <a
            href="https://www.instagram.com/housestudio_interiors?igsh=M2Y5enJhbWY4MGs5"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn insta"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1B7a8y9EUH/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn fb"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
        </div>

      </div>
    </section>
  );
}
