'use client';

export default function Footer({ data }) {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer>
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-about">
            <a href="#" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
              HouseStudio <span>Interiors</span>
            </a>
            <p>
              {data?.description || 'Elevating lifestyles through premium interior design. We create spaces that are as functional as they are beautiful, combining luxury aesthetics with custom details.'}
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Social Media</h4>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/housestudio_interiors?igsh=M2Y5enJhbWY4MGs5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1B7a8y9EUH/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>{data?.copyrightText || `© ${new Date().getFullYear()} HouseStudio Interiors. All Rights Reserved.`}</p>
          <p style={{ marginTop: '8px', fontSize: '0.9em', color: 'rgba(255,255,255,0.7)' }}>Developed by Kalla Venkatesh and number is 9581108448</p>
        </div>

      </div>
    </footer>
  );
}
