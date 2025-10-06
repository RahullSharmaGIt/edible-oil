import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const oilProducts = [
    {
      name: 'Refined Sunflower Oil',
      description: 'Premium quality sunflower oil with high vitamin E content',
      image: 'https://images.unsplash.com/photo-1613500788522-89c4d55bdd0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBzZWVkc3xlbnwwfHx8fDE3NTk3NDQ4MTd8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Refined Palm Oil',
      description: 'Sustainably sourced palm oil for industrial and culinary use',
      image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxlZGlibGUlMjBvaWwlMjBib3R0bGVzfGVufDB8fHx8MTc1OTc0NDgxMnww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Refined Soybean Oil',
      description: 'Versatile soybean oil with neutral flavor profile',
      image: 'https://images.pexels.com/photos/971080/pexels-photo-971080.jpeg'
    },
    {
      name: 'Premium Olive Oil',
      description: 'Extra virgin and refined olive oil varieties',
      image: 'https://images.unsplash.com/photo-1757801333175-65177bd6969c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxlZGlibGUlMjBvaWwlMjBib3R0bGVzfGVufDB8fHx8MTc1OTc0NDgxMnww&ixlib=rb-4.1.0&q=85'
    }
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Premium Quality',
      description: 'Rigorous quality control ensures only the finest oils reach our customers'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Global Supply Network',
      description: 'Worldwide distribution network ensuring reliable supply chains'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      title: 'Sustainability Focus',
      description: 'Committed to environmentally responsible sourcing and production'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 9V5a3 3 0 0 0-6 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <rect x="2" y="9" width="20" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Quality Assurance',
      description: 'Certified processes and international quality standards compliance'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="display-large">
                Premium Edible Oils for Global Markets
              </h1>
              <p className="body-large">
                Oleen Co is your trusted partner in high-quality edible oils trading. 
                From sunflower to palm oil, we deliver excellence across international markets 
                with sustainable sourcing and reliable supply chains.
              </p>
              <div className="hero-buttons">
                <Link to="/edible-oils" className="btn-primary">
                  Explore Our Oils
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.pexels.com/photos/4589141/pexels-photo-4589141.jpeg" 
                alt="Premium edible oils"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="heading-1">Leading the Edible Oils Industry</h2>
              <p className="body-large">
                With decades of experience in global oil trading, Oleen Co has established 
                itself as a reliable partner for businesses worldwide. We specialize in 
                premium refined oils, sustainable sourcing, and building long-term partnerships.
              </p>
              <p className="body-medium">
                Our commitment to quality, transparency, and environmental responsibility 
                sets us apart in the competitive edible oils market.
              </p>
              <Link to="/about" className="btn-primary mt-6">
                Learn More About Us
              </Link>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h3 className="stat-number">25+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Countries Served</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">1000+</h3>
                <p className="stat-label">Satisfied Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oil Products Grid */}
      <section className="products">
        <div className="container">
          <div className="section-header text-center mb-6">
            <h2 className="heading-1">Our Premium Oil Collection</h2>
            <p className="body-large">
              Discover our comprehensive range of high-quality edible oils, 
              sourced globally and refined to perfection.
            </p>
          </div>
          
          <div className="products-grid">
            {oilProducts.map((product, index) => (
              <div key={index} className="oil-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <h3 className="heading-3">{product.name}</h3>
                  <p className="body-medium">{product.description}</p>
                  <Link to="/edible-oils" className="btn-secondary mt-4">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <div className="container">
          <div className="section-header text-center mb-6">
            <h2 className="heading-1">Why Choose Oleen Co</h2>
            <p className="body-large">
              We bring together quality, reliability, and sustainability to deliver 
              exceptional value in the edible oils market.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="heading-3">{feature.title}</h3>
                <p className="body-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Ready to Partner with Us?</h2>
            <p className="body-large">
              Join hundreds of businesses worldwide who trust Oleen Co for their 
              edible oil supply needs. Contact us for wholesale partnerships and custom solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: var(--spacing-giant) 0;
          background: linear-gradient(135deg, var(--bg-page) 0%, var(--bg-subtle) 100%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .hero-text {
          max-width: 90%;
        }

        .hero-text h1 {
          margin-bottom: var(--spacing-md);
        }

        .hero-text p {
          margin-bottom: var(--spacing-xl);
        }

        .hero-buttons {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .hero-image {
          display: flex;
          justify-content: center;
        }

        .hero-img {
          width: 100%;
          max-width: 500px;
          height: 400px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(27, 94, 32, 0.15);
        }

        .about-preview {
          padding: var(--spacing-giant) 0;
        }

        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .about-text h2 {
          margin-bottom: var(--spacing-md);
        }

        .about-text p {
          margin-bottom: var(--spacing-md);
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .stat-card {
          background: var(--bg-card);
          padding: var(--spacing-lg);
          border-radius: 20px;
          text-align: center;
          border: 1px solid var(--border-light);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--brand-primary);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .products {
          padding: var(--spacing-giant) 0;
          background: var(--bg-subtle);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-xl);
        }

        .product-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-content {
          padding: var(--spacing-md) 0 0;
        }

        .product-content h3 {
          margin-bottom: var(--spacing-sm);
        }

        .features {
          padding: var(--spacing-giant) 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-xl);
        }

        .feature-card {
          background: var(--bg-card);
          padding: var(--spacing-xl);
          border-radius: 24px;
          text-align: center;
          border: 1px solid var(--border-light);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(27, 94, 32, 0.15);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          background: var(--brand-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-md);
          color: var(--brand-primary);
        }

        .feature-card h3 {
          margin-bottom: var(--spacing-sm);
        }

        .cta-banner {
          padding: var(--spacing-giant) 0;
          background: var(--brand-light);
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          margin-bottom: var(--spacing-md);
        }

        .cta-content p {
          margin-bottom: var(--spacing-xl);
        }

        .cta-buttons {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
            text-align: center;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .about-stats {
            flex-direction: row;
            justify-content: space-around;
          }
        }

        @media (max-width: 768px) {
          .hero-buttons,
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .about-stats {
            flex-direction: column;
          }

          .hero-img {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;