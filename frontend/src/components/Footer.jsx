import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span>Oleen Co</span>
            </div>
            <p className="footer-description">
              Premium edible oils trading company committed to quality, 
              sustainability, and global partnerships in the oil industry.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span>123 Trade Center, Oil District</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span>info@oleenco.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/edible-oils" className="footer-link">Our Products</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3 className="footer-title">Our Oils</h3>
            <div className="footer-links">
              <Link to="/edible-oils" className="footer-link">Sunflower Oil</Link>
              <Link to="/edible-oils" className="footer-link">Palm Oil</Link>
              <Link to="/edible-oils" className="footer-link">Soybean Oil</Link>
              <Link to="/edible-oils" className="footer-link">Canola Oil</Link>
              <Link to="/edible-oils" className="footer-link">Olive Oil</Link>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <div className="footer-links">
              <span className="footer-link">Wholesale Trading</span>
              <span className="footer-link">Quality Assurance</span>
              <span className="footer-link">Global Distribution</span>
              <span className="footer-link">Custom Solutions</span>
              <span className="footer-link">Partnership Programs</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Oleen Co. All rights reserved.
            </p>
            <div className="footer-legal">
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Service</span>
              <span className="legal-link">Sustainability</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--text-primary);
          color: white;
          margin-top: var(--spacing-giant);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--spacing-xl);
          padding: var(--spacing-giant) 0 var(--spacing-xl);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
        }

        .logo-icon {
          color: var(--brand-primary);
        }

        .footer-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #cccccc;
          margin-bottom: var(--spacing-md);
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: #cccccc;
          font-size: 0.9rem;
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
          color: white;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .footer-link {
          color: #cccccc;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .footer-link:hover {
          color: var(--brand-primary);
        }

        .footer-bottom {
          border-top: 1px solid #333333;
          padding: var(--spacing-md) 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          color: #cccccc;
          font-size: 0.9rem;
        }

        .footer-legal {
          display: flex;
          gap: var(--spacing-md);
        }

        .legal-link {
          color: #cccccc;
          font-size: 0.9rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .legal-link:hover {
          color: var(--brand-primary);
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-lg);
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
            padding: var(--spacing-xl) 0 var(--spacing-lg);
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: var(--spacing-sm);
            text-align: center;
          }

          .footer-legal {
            gap: var(--spacing-sm);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;