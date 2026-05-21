'use client';

import { useEffect, useRef } from 'react';

const DEFAULT_ADVANTAGES = [
  {
    icon: 'fa-pencil-ruler',
    title: 'Creative Designs',
    description: 'Unique concepts tailored to your personality, space dynamics, and lifestyle.'
  },
  {
    icon: 'fa-gem',
    title: 'Premium Materials',
    description: 'Only the finest materials sourced globally from verified luxury brands.'
  },
  {
    icon: 'fa-clock',
    title: 'On-Time Delivery',
    description: 'We respect your timeline, executing planning efficiently to deliver on schedule.'
  },
  {
    icon: 'fa-user-tie',
    title: 'Personalized Planning',
    description: 'Dedicated designer consultations capturing every single detail of your vision.'
  },
  {
    icon: 'fa-tags',
    title: 'Affordable Luxury',
    description: 'Splendid premium aesthetics offered at competitive prices with zero compromise.'
  }
];

export default function WhyChooseUs({ data }) {
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

  const advantages = data?.advantages?.length ? data.advantages : DEFAULT_ADVANTAGES;

  return (
    <section className="why-us" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header reveal-up">
          <span className="sub-heading">{data?.subheading || 'Why Choose Us'}</span>
          <h2>{data?.heading || 'The HouseStudio Advantage'}</h2>
        </div>

        <div className="why-grid">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="why-card reveal-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <i className={`fas ${adv.icon}`}></i>
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
