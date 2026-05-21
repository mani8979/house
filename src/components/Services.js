'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    icon: 'fa-home',
    title: 'Home Interiors',
    desc: 'Complete end-to-end interior solutions for luxury villas and modern apartments.'
  },
  {
    icon: 'fa-utensils',
    title: 'Modular Kitchens',
    desc: 'Modern, highly ergonomic, and aesthetically pleasing modular kitchen designs.'
  },
  {
    icon: 'fa-bed',
    title: 'Bedroom Designs',
    desc: 'Transforming bedroom layouts into serene, cozy, and luxury private retreats.'
  },
  {
    icon: 'fa-couch',
    title: 'Living Room Styling',
    desc: 'Creating elegant, welcoming, and statement living spaces for your family.'
  },
  {
    icon: 'fa-vector-square',
    title: 'Space Optimization',
    desc: 'Maximizing space utility and flow without compromising on premium luxury.'
  },
  {
    icon: 'fa-cube',
    title: '3D Visualization',
    desc: 'Photorealistic 3D renders to help you visualize your spaces before execution.'
  }
];

export default function Services() {
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

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header reveal-up">
          <span className="sub-heading">Our Expertise</span>
          <h2>Premium Design Services</h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
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
