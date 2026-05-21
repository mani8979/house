'use client';

import { useEffect, useRef } from 'react';

const ADVANTAGES = [
  {
    icon: 'fa-pencil-ruler',
    title: 'Creative Designs',
    desc: 'Unique concepts tailored to your personality, space dynamics, and lifestyle.'
  },
  {
    icon: 'fa-gem',
    title: 'Premium Materials',
    desc: 'Only the finest materials sourced globally from verified luxury brands.'
  },
  {
    icon: 'fa-clock',
    title: 'On-Time Delivery',
    desc: 'We respect your timeline, executing planning efficiently to deliver on schedule.'
  },
  {
    icon: 'fa-user-tie',
    title: 'Personalized Planning',
    desc: 'Dedicated designer consultations capturing every single detail of your vision.'
  },
  {
    icon: 'fa-tags',
    title: 'Affordable Luxury',
    desc: 'Splendid premium aesthetics offered at competitive prices with zero compromise.'
  }
];

export default function WhyChooseUs() {
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
    <section className="why-us" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header reveal-up">
          <span className="sub-heading">Why Choose Us</span>
          <h2>The HouseStudio Advantage</h2>
        </div>

        <div className="why-grid">
          {ADVANTAGES.map((adv, index) => (
            <div
              key={index}
              className="why-card reveal-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <i className={`fas ${adv.icon}`}></i>
              <h3>{adv.title}</h3>
              <p>{adv.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
