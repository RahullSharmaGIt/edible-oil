import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOilsDropdownOpen, setIsOilsDropdownOpen] = useState(false);
  const location = useLocation();

  const oilCategories = [
    'Sunflower Oil',
    'Palm Oil', 
    'Soybean Oil',
    'Canola Oil',
    'Olive Oil',
    'Rapeseed Oil',
    'Corn Oil',
    'Crude Palm Oil'
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="nav-wrapper">
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="logo">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              Oleen Co
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </Link>
              
              {/* Edible Oils Dropdown */}
              <div 
                className="dropdown"
                onMouseEnter={() => setIsOilsDropdownOpen(true)}
                onMouseLeave={() => setIsOilsDropdownOpen(false)}
              >
                <Link 
                  to="/edible-oils" 
                  className={`nav-link dropdown-trigger ${isActive('/edible-oils') ? 'active' : ''}`}
                >
                  Edible Oils
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                
                {isOilsDropdownOpen && (
                  <div className="dropdown-menu">
                    {oilCategories.map((oil, index) => (
                      <Link 
                        key={index} 
                        to="/edible-oils" 
                        className="dropdown-item"
                      >
                        {oil}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="container">
            <div className="mobile-nav-links">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/edible-oils" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Edible Oils
              </Link>
              <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-light);
        }

        .nav-wrapper {
          padding: var(--spacing-sm) 0;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          text-decoration: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .logo-icon {
          color: var(--brand-primary);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: 20px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--brand-primary);
          background: var(--brand-light);
        }

        .dropdown {
          position: relative;
        }

        .dropdown-trigger {
          cursor: pointer;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: var(--spacing-sm);
          min-width: 200px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          z-index: 100;
        }

        .dropdown-item {
          display: block;
          color: var(--text-secondary);
          text-decoration: none;
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: 12px;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }

        .dropdown-item:hover {
          background: var(--brand-light);
          color: var(--brand-primary);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: var(--spacing-xs);
        }

        .mobile-nav {
          background: white;
          border-top: 1px solid var(--border-light);
        }

        .mobile-nav-links {
          padding: var(--spacing-md) 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .mobile-nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: var(--spacing-sm);
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover {
          background: var(--brand-light);
          color: var(--brand-primary);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;