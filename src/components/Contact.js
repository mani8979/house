'use client';

import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

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

    const revealElements = sectionRef.current?.querySelectorAll('.reveal-left, .reveal-right') || [];
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('submitting');

    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset button after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-info reveal-left">
            <span className="sub-heading">Get In Touch</span>
            <h2>Let's Create Your <br />Dream Space</h2>
            
            <div className="info-list">
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:housestudiointeriors@gmail.com">
                    housestudiointeriors@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/917995827590" target="_blank" rel="noopener noreferrer">
                    Chat With Us
                  </a>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Visit Us</h4>
                  <p>Vedayapalem, Nellore,<br />Andhra Pradesh 524004</p>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.909772023943!2d79.95654167584164!3d14.415453699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2e055916ad5%3A0xdb73af21e38ada!2sVedayapalem%2C%20Nellore%2C%20Andhra%20Pradesh%20524004!5e0!3m2!1sen!2sin!4v1716298516000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="HouseStudio Location Map - Vedayapalem, Nellore"
              ></iframe>
            </div>
          </div>

          <div className="contact-form reveal-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                style={{
                  backgroundColor: submitStatus === 'success' ? '#2ecc71' : '',
                  borderColor: submitStatus === 'success' ? '#2ecc71' : '',
                  pointerEvents: submitting ? 'none' : 'auto'
                }}
                disabled={submitting}
              >
                {submitStatus === 'idle' && (
                  <>
                    Send Message <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i>
                  </>
                )}
                {submitStatus === 'submitting' && (
                  <>
                    Sending... <i className="fas fa-spinner fa-spin" style={{ marginLeft: '8px' }}></i>
                  </>
                )}
                {submitStatus === 'success' && (
                  <>
                    Sent Successfully! <i className="fas fa-check" style={{ marginLeft: '8px' }}></i>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
