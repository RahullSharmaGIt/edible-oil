import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in oil refining and trading, ensuring every product meets international quality certifications.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Sustainable Sourcing',
      description: 'Environmental responsibility guides our sourcing decisions, supporting eco-friendly farming and production methods.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9 0-9 9z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 22C7.03 22 3 17.97 3 13c4.5 0 9 0 9 9z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 13V2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Global Partnerships',
      description: 'Building lasting relationships with suppliers, distributors, and customers across continents to ensure reliable supply chains.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
  ];

  const timeline = [
    {
      year: '1998',
      title: 'Company Founded',
      description: 'Oleen Co was established with a vision to revolutionize edible oil trading through quality and transparency.'
    },
    {
      year: '2005',
      title: 'International Expansion',
      description: 'Expanded operations to serve markets across Asia, Europe, and the Americas with premium oil products.'
    },
    {
      year: '2012',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive sustainability program focusing on eco-friendly sourcing and production methods.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented advanced supply chain technology to enhance efficiency and transparency in operations.'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Achieved recognition as a leading global supplier of premium edible oils with 1000+ satisfied partners.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-text">
              <h1 className="display-medium">
                Pioneering Excellence in Edible Oil Trading
              </h1>
              <p className="body-large">
                For over two decades, Oleen Co has been at the forefront of the global 
                edible oils industry, setting standards for quality, sustainability, 
                and reliable partnerships worldwide.
              </p>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>25+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Global Markets</p>
              </div>
              <div className="stat-item">
                <h3>8</h3>
                <p>Premium Oil Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h2 className="heading-2">Our Mission</h2>
              <p className="body-medium">
                To provide premium quality edible oils to global markets while maintaining 
                the highest standards of sustainability, transparency, and customer service. 
                We strive to be the most trusted partner in the edible oils industry.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h2 className="heading-2">Our Vision</h2>
              <p className="body-medium">
                To become the world's leading sustainable edible oils trading company, 
                pioneering innovative solutions that benefit our partners, communities, 
                and the environment for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values">
        <div className="container">
          <div className="section-header text-center mb-6">
            <h2 className="heading-1">Our Core Values</h2>
            <p className="body-large">
              These fundamental principles guide every aspect of our business operations 
              and relationships with partners worldwide.
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="heading-3">{value.title}</h3>
                <p className="body-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="timeline">
        <div className="container">
          <div className="section-header text-center mb-6">
            <h2 className="heading-1">Our Journey</h2>
            <p className="body-large">
              From a local oil trading company to a global industry leader, 
              discover the milestones that shaped our success story.
            </p>
          </div>
          
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">
                  <span>{item.year}</span>
                </div>
                <div className="timeline-content">
                  <h3 className="heading-3">{item.title}</h3>
                  <p className="body-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <div className="container">
          <div className="expertise-content">
            <div className="expertise-text">
              <h2 className="heading-1">Industry Expertise</h2>
              <p className="body-large">
                Our deep understanding of global oil markets, combined with strategic 
                partnerships and advanced logistics capabilities, enables us to deliver 
                consistent quality and reliable supply to customers worldwide.
              </p>
              
              <div className="expertise-points">
                <div className="point">
                  <div className="point-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <span>International quality certifications (ISO, HACCP, Kosher)</span>
                </div>
                <div className="point">
                  <div className="point-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <span>Advanced supply chain management systems</span>
                </div>
                <div className="point">
                  <div className="point-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <span>Comprehensive market analysis and price optimization</span>
                </div>
                <div className="point">
                  <div className="point-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <span>Sustainability and traceability programs</span>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary mt-6">
                Partner With Us
              </Link>
            </div>
            
            <div className="expertise-image">
              <img 
                src="https://images.pexels.com/photos/4282694/pexels-photo-4282694.jpeg"
                alt="Oil refinery operations"
                className="expertise-img"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          padding: var(--spacing-giant) 0;
          background: linear-gradient(135deg, var(--bg-page) 0%, var(--bg-subtle) 100%);
        }

        .about-hero-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .hero-text h1 {
          margin-bottom: var(--spacing-md);
        }

        .hero-stats {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .stat-item {
          text-align: center;
          padding: var(--spacing-lg);
          background: var(--bg-card);
          border-radius: 20px;
          border: 1px solid var(--border-light);
        }

        .stat-item h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--brand-primary);
          margin-bottom: var(--spacing-xs);
          line-height: 1;
        }

        .stat-item p {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .mission-vision {
          padding: var(--spacing-giant) 0;
        }

        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
        }

        .mission-card,
        .vision-card {
          background: var(--bg-card);
          padding: var(--spacing-xl);
          border-radius: 24px;
          border: 1px solid var(--border-light);
          text-align: center;
        }

        .card-icon {
          width: 80px;
          height: 80px;
          background: var(--brand-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-lg);
          color: var(--brand-primary);
        }

        .mission-card h2,
        .vision-card h2 {
          margin-bottom: var(--spacing-md);
        }

        .values {
          padding: var(--spacing-giant) 0;
          background: var(--bg-subtle);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .value-card {
          background: var(--bg-card);
          padding: var(--spacing-xl);
          border-radius: 24px;
          border: 1px solid var(--border-light);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(27, 94, 32, 0.15);
        }

        .value-icon {
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

        .value-card h3 {
          margin-bottom: var(--spacing-sm);
        }

        .timeline {
          padding: var(--spacing-giant) 0;
        }

        .timeline-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: var(--border-medium);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .timeline-item:nth-child(even) {
          direction: rtl;
        }

        .timeline-item:nth-child(even) .timeline-content {
          direction: ltr;
        }

        .timeline-year {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .timeline-year span {
          background: var(--brand-primary);
          color: white;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: 20px;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .timeline-content {
          background: var(--bg-card);
          padding: var(--spacing-lg);
          border-radius: 20px;
          border: 1px solid var(--border-light);
        }

        .timeline-content h3 {
          margin-bottom: var(--spacing-sm);
        }

        .expertise {
          padding: var(--spacing-giant) 0;
          background: var(--bg-subtle);
        }

        .expertise-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .expertise-text h2 {
          margin-bottom: var(--spacing-md);
        }

        .expertise-text p {
          margin-bottom: var(--spacing-lg);
        }

        .expertise-points {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .point {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .point-icon {
          color: var(--brand-primary);
          flex-shrink: 0;
        }

        .point span {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .expertise-image {
          display: flex;
          justify-content: center;
        }

        .expertise-img {
          width: 100%;
          max-width: 500px;
          height: 400px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(27, 94, 32, 0.15);
        }

        @media (max-width: 1024px) {
          .about-hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
            text-align: center;
          }

          .hero-stats {
            flex-direction: row;
            justify-content: space-around;
          }

          .mission-vision-grid {
            grid-template-columns: 1fr;
          }

          .expertise-content {
            grid-template-columns: 1fr;
          }

          .timeline-container::before {
            left: 20px;
          }

          .timeline-item {
            grid-template-columns: auto 1fr;
            gap: var(--spacing-md);
          }

          .timeline-item:nth-child(even) {
            direction: ltr;
          }

          .timeline-year {
            justify-content: flex-start;
          }
        }

        @media (max-width: 768px) {
          .hero-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .expertise-img {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;