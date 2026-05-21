'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function Counter({ target, duration = 2000, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [target, duration]);

  return (
    <h3 ref={elementRef} className="stat-number">
      {count}
      {suffix}
    </h3>
  );
}

export default function About() {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal-left, .reveal-right') || [];
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image reveal-left">
            <Image
              src="/assets/images/about.png"
              alt="Luxury Interior Design Studio"
              width={700}
              height={525}
              style={{ objectFit: 'cover' }}
              quality={90}
            />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>

          <div className="about-content reveal-right">
            <span className="sub-heading">Crafting Excellence</span>
            <h2>Premium Execution for Your Dream Space</h2>
            <p>
              At HouseStudio Interiors, we believe that every space has a story to tell. Our approach combines luxury aesthetics with functional design to create environments that inspire and elevate your lifestyle.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Modern Interiors</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Modular Kitchens</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Living Room Designs</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Space Planning</span>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <Counter target={500} suffix="+" />
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <Counter target={450} suffix="+" />
                <p>Happy Clients</p>
              </div>
              <div className="stat-card">
                <Counter target={15} suffix="" />
                <p>Awards Won</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
