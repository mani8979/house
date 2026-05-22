'use client';

import { useEffect, useRef } from 'react';

export default function Services({ services = [] }) {
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

    const cards = sectionRef.current?.querySelectorAll('.reveal-up') || [];
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const filteredServices = services.filter(service => !service.title.toLowerCase().includes('3d visualization'));
  if (!filteredServices || filteredServices.length === 0) return null;

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header reveal-up">
          <span className="sub-heading">Our Expertise</span>
          <h2>Premium Design Services</h2>
        </div>

        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="service-card reveal-up"
              style={{ transitionDelay: `${index * 0.1}s` }} // Staggered reveal delay
            >
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
