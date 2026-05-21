'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    quote: "HouseStudio transformed our apartment into a dream home. Their attention to detail and choice of materials is unparalleled. Truly a premium experience!",
    name: "Sarah Johnson",
    role: "Homeowner, NYC",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    quote: "The best interior designers I've worked with. They delivered my modular kitchen ahead of schedule and the finish is just spectacular. Highly recommended.",
    name: "Michael Chen",
    role: "Business Owner",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    quote: "Professional, creative, and very easy to communicate with. They understood my vision perfectly and executed it beyond my expectations.",
    name: "Emma Williams",
    role: "Interior Enthusiast",
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Setup autoplay timer
  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header reveal-up">
          <span className="sub-heading">Testimonials</span>
          <h2>What Our Clients Say</h2>
        </div>

        <div className="testimonial-slider reveal-up">
          <div className="testimonial-container">
            {TESTIMONIALS.map((t, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>"{t.quote}"</p>
                <div className="client-info">
                  {/* Avatar using standard image for external pravatar source */}
                  <img src={t.avatar} alt={t.name} width={65} height={65} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="prev-btn" onClick={handlePrev} aria-label="Previous Testimonial">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="next-btn" onClick={handleNext} aria-label="Next Testimonial">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          <div className="slider-dots">
            {TESTIMONIALS.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
