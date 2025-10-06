import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: 'general',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Head Office',
      details: [
        '123 Trade Center Boulevard',
        'Oil District, Commerce City',
        'International Trade Zone 12345'
      ]
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Phone Numbers',
      details: [
        'Main: +1 (555) 123-4567',
        'Sales: +1 (555) 123-4568',
        'Support: +1 (555) 123-4569'
      ]
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Email Addresses',
      details: [
        'General: info@oleenco.com',
        'Sales: sales@oleenco.com',
        'Support: support@oleenco.com'
      ]
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 3:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const offices = [
    {
      region: 'North America',
      city: 'Houston, TX',
      address: '456 Energy Corridor, Houston, TX 77079',
      phone: '+1 (713) 555-0123',
      email: 'houston@oleenco.com'
    },
    {
      region: 'Europe',
      city: 'Rotterdam, Netherlands',
      address: '789 Port District, 3011 Rotterdam, Netherlands',
      phone: '+31 10 555-0123',
      email: 'rotterdam@oleenco.com'
    },
    {
      region: 'Asia Pacific',
      city: 'Singapore',
      address: '321 Marina Bay, Singapore 018956',
      phone: '+65 6555-0123',
      email: 'singapore@oleenco.com'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-medium">Get in Touch</h1>
            <p className="body-large">
              Ready to discuss your edible oil requirements? Our team of experts 
              is here to help you find the perfect solutions for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="heading-2">Send us a Message</h2>
                <p className="body-medium">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType" className="form-label">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="wholesale">Wholesale Partnership</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="quality">Quality & Specifications</option>
                      <option value="logistics">Logistics & Shipping</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="6"
                    required
                    placeholder="Please describe your requirements or inquiry in detail..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message success">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-header">
                <h2 className="heading-2">Contact Information</h2>
                <p className="body-medium">
                  Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h3 className="info-title">{info.title}</h3>
                      <div className="info-details">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="info-detail">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="global-offices">
        <div className="container">
          <div className="section-header text-center mb-6">
            <h2 className="heading-1">Our Global Presence</h2>
            <p className="body-large">
              With offices across key trading hubs worldwide, we're always close to our customers.
            </p>
          </div>

          <div className="offices-grid">
            {offices.map((office, index) => (
              <div key={index} className="office-card">
                <div className="office-header">
                  <h3 className="heading-3">{office.region}</h3>
                  <p className="office-city">{office.city}</p>
                </div>
                <div className="office-details">
                  <div className="office-detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    <span>{office.address}</span>
                  </div>
                  <div className="office-detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    <span>{office.phone}</span>
                  </div>
                  <div className="office-detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
          padding: var(--spacing-giant) 0;
          background: linear-gradient(135deg, var(--bg-page) 0%, var(--bg-subtle) 100%);
        }

        .hero-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-content h1 {
          margin-bottom: var(--spacing-md);
        }

        .contact-main {
          padding: var(--spacing-giant) 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-giant);
          align-items: start;
        }

        .form-header,
        .info-header {
          margin-bottom: var(--spacing-xl);
        }

        .form-header h2,
        .info-header h2 {
          margin-bottom: var(--spacing-sm);
        }

        .contact-form {
          background: var(--bg-card);
          padding: var(--spacing-xl);
          border-radius: 24px;
          border: 1px solid var(--border-light);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .form-group {
          margin-bottom: var(--spacing-md);
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
          font-size: 0.9rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: var(--spacing-sm);
          border: 2px solid var(--border-light);
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.2s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--brand-primary);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          margin-top: var(--spacing-md);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-message {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          margin-top: var(--spacing-md);
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: 12px;
          font-size: 0.9rem;
        }

        .form-message.success {
          background: #E8F5E8;
          color: #2E7D32;
          border: 1px solid #C8E6C9;
        }

        .form-message.error {
          background: #FFEBEE;
          color: #C62828;
          border: 1px solid #FFCDD2;
        }

        .contact-info-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .info-card {
          display: flex;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: var(--bg-card);
          border-radius: 20px;
          border: 1px solid var(--border-light);
        }

        .info-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: var(--brand-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-primary);
        }

        .info-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .info-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-detail {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .global-offices {
          padding: var(--spacing-giant) 0;
          background: var(--bg-subtle);
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .office-card {
          background: var(--bg-card);
          padding: var(--spacing-xl);
          border-radius: 24px;
          border: 1px solid var(--border-light);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .office-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(27, 94, 32, 0.15);
        }

        .office-header {
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        .office-header h3 {
          margin-bottom: var(--spacing-xs);
        }

        .office-city {
          color: var(--brand-primary);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .office-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .office-detail {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-xs);
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .office-detail svg {
          color: var(--brand-primary);
          margin-top: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: var(--spacing-lg);
          }

          .offices-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;