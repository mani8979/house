'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Projects({ projects = [] }) {
  const sectionRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

    const items = sectionRef.current?.querySelectorAll('.reveal-up') || [];
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % projects.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, projects.length]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="portfolio" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header reveal-up">
          <span className="sub-heading">Portfolio</span>
          <h2>Recent Masterpieces</h2>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item reveal-up"
              style={{ transitionDelay: `${index * 0.15}s` }}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index);
                }
              }}
            >
              <Image
                src={project.image}
                alt={project.alt || project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                quality={85}
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Premium Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
          
          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length);
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <Image
                src={projects[lightboxIndex].image}
                alt={projects[lightboxIndex].alt || projects[lightboxIndex].title}
                fill
                sizes="90vw"
                style={{ objectFit: 'contain' }}
                quality={95}
                priority
              />
            </div>
            <div className="lightbox-meta">
              <span>{projects[lightboxIndex].category}</span>
              <h3>{projects[lightboxIndex].title}</h3>
            </div>
          </div>

          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % projects.length);
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <style jsx global>{`
            .lightbox {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
              background-color: rgba(13, 13, 13, 0.95);
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .lightbox-close {
              position: absolute;
              top: 30px;
              right: 40px;
              background: none;
              border: none;
              color: #ffffff;
              font-size: 2rem;
              cursor: pointer;
              z-index: 10000;
              transition: all 0.3s ease;
            }
            .lightbox-close:hover {
              color: #d4af37;
              transform: rotate(90deg);
            }
            .lightbox-nav {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: #ffffff;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
              z-index: 10000;
              transition: all 0.3s ease;
            }
            .lightbox-nav:hover {
              background: #d4af37;
              border-color: #d4af37;
              transform: translateY(-50%) scale(1.1);
            }
            .lightbox-nav.prev { left: 40px; }
            .lightbox-nav.next { right: 40px; }
            .lightbox-content {
              width: 80%;
              max-width: 1000px;
              height: 75vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .lightbox-image-container {
              position: relative;
              width: 100%;
              height: 90%;
            }
            .lightbox-meta {
              text-align: center;
              margin-top: 20px;
              color: #ffffff;
            }
            .lightbox-meta span {
              color: #d4af37;
              text-transform: uppercase;
              letter-spacing: 2px;
              font-size: 0.8rem;
              font-weight: 600;
              margin-bottom: 5px;
              display: block;
            }
            .lightbox-meta h3 {
              font-size: 1.6rem;
              font-family: var(--font-playfair), serif;
              font-weight: 500;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @media (max-width: 768px) {
              .lightbox-nav {
                width: 44px;
                height: 44px;
                font-size: 1rem;
              }
              .lightbox-nav.prev { left: 15px; }
              .lightbox-nav.next { right: 15px; }
              .lightbox-close {
                top: 20px;
                right: 20px;
                font-size: 1.6rem;
              }
              .lightbox-content {
                width: 90%;
                height: 60vh;
              }
              .lightbox-meta h3 {
                font-size: 1.25rem;
              }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}
