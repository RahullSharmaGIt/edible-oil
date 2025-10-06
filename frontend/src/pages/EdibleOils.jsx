import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EdibleOils = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const oilProducts = [
    {
      id: 1,
      name: 'Refined Sunflower Oil',
      category: 'sunflower',
      description: 'Premium quality sunflower oil with high vitamin E content and neutral flavor profile.',
      features: ['High Smoke Point', 'Rich in Vitamin E', 'Cholesterol Free', 'Light Flavor'],
      applications: ['Cooking', 'Frying', 'Baking', 'Salad Dressings'],
      specifications: {
        'Free Fatty Acid': '≤ 0.1%',
        'Peroxide Value': '≤ 2 meq O2/kg',
        'Moisture': '≤ 0.1%',
        'Iodine Value': '120-140'
      },
      image: 'https://images.unsplash.com/photo-1613500788522-89c4d55bdd0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBzZWVkc3xlbnwwfHx8fDE3NTk3NDQ4MTd8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      name: 'Refined Palm Oil',
      category: 'palm',
      description: 'Sustainably sourced palm oil with excellent stability and versatile applications.',
      features: ['High Oxidative Stability', 'Semi-Solid at Room Temp', 'Long Shelf Life', 'Sustainable Sourcing'],
      applications: ['Food Manufacturing', 'Margarine Production', 'Confectionery', 'Industrial Use'],
      specifications: {
        'Free Fatty Acid': '≤ 0.1%',
        'Peroxide Value': '≤ 2 meq O2/kg',
        'Moisture': '≤ 0.1%',
        'Melting Point': '33-39°C'
      },
      image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxlZGlibGUlMjBvaWwlMjBib3R0bGVzfGVufDB8fHx8MTc1OTc0NDgxMnww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 3,
      name: 'Refined Soybean Oil',
      category: 'soybean',
      description: 'Versatile soybean oil with balanced fatty acid profile and excellent performance.',
      features: ['Balanced Omega Fatty Acids', 'Light Color', 'Neutral Taste', 'Good Stability'],
      applications: ['General Cooking', 'Mayonnaise', 'Margarine', 'Food Service'],
      specifications: {
        'Free Fatty Acid': '≤ 0.1%',
        'Peroxide Value': '≤ 2 meq O2/kg',
        'Moisture': '≤ 0.1%',
        'Iodine Value': '120-143'
      },
      image: 'https://images.pexels.com/photos/971080/pexels-photo-971080.jpeg'
    },
    {
      id: 4,
      name: 'Refined Canola Oil',
      category: 'canola',
      description: 'Heart-healthy canola oil with low saturated fat and high smoke point.',
      features: ['Low Saturated Fat', 'High Smoke Point', 'Omega-3 Rich', 'Light Texture'],
      applications: ['Healthy Cooking', 'Salad Oils', 'Baking', 'Food Processing'],
      specifications: {
        'Free Fatty Acid': '≤ 0.1%',
        'Peroxide Value': '≤ 2 meq O2/kg',
        'Moisture': '≤ 0.1%',
        'Saturated Fat': '≤ 7%'
      },
      image: 'https://images.unsplash.com/photo-1757801333175-65177bd6969c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxlZGlibGUlMjBvaWwlMjBib3R0bGVzfGVufDB8fHx8MTc1OTc0NDgxMnww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 5,
      name: 'Extra Virgin Olive Oil',
      category: 'olive',
      description: 'Premium Mediterranean olive oil with rich flavor and health benefits.',
      features: ['Cold Pressed', 'Rich Antioxidants', 'Mediterranean Origin', 'Distinctive Flavor'],
      applications: ['Gourmet Cooking', 'Salad Dressings', 'Dipping Oil', 'Health Foods'],
      specifications: {
        'Free Fatty Acid': '≤ 0.8%',
        'Peroxide Value': '≤ 20 meq O2/kg',
        'Polyphenols': '≥ 250 mg/kg',
        'Origin': 'Mediterranean'
      },
      image: 'https://images.pexels.com/photos/4589141/pexels-photo-4589141.jpeg'
    },
    {
      id: 6,
      name: 'Refined Rapeseed Oil',
      category: 'rapeseed',
      description: 'European-quality rapeseed oil with excellent cooking properties.',
      features: ['European Quality', 'High Smoke Point', 'Stable at Heat', 'Mild Flavor'],
      applications: ['Professional Cooking', 'Industrial Frying', 'Food Manufacturing', 'Biodiesel'],
      specifications: {
        'Free Fatty Acid': '≤ 0.1%',
        'Peroxide Value': '≤ 2 meq O2/kg',
        'Moisture': '≤ 0.1%',
        'Smoke Point': '204°C'
      },
      image: 'https://images.unsplash.com/photo-1635843111961-06c71c3ed8cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxzdW5mbG93ZXIlMjBzZWVkc3xlbnwwfHx8fDE3NTk3NDQ4MTd8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 7,
      name: 'Refined Corn Oil',
      category: 'corn',
      description: 'High-quality corn oil with excellent frying performance and stability.',
      features: ['High Smoke Point', 'Light Golden Color', 'Good Stability', 'Cost Effective'],
      applications: ['Deep Frying', 'Snack Foods', 'Commercial Cooking', 'Food Processing'],
      specifications: {
        'Free Fatty Acid': '≤ 0.1%',
        'Peroxide Value': '≤ 2 meq O2/kg',
        'Moisture': '≤ 0.1%',
        'Smoke Point': '232°C'
      },
      image: 'https://images.pexels.com/photos/1080067/pexels-photo-1080067.jpeg'
    },
    {
      id: 8,
      name: 'Crude Palm Oil',
      category: 'crude-palm',
      description: 'Unrefined palm oil for industrial processing and further refinement.',
      features: ['Natural State', 'Rich in Carotenes', 'Industrial Grade', 'Bulk Supply'],
      applications: ['Oil Refining', 'Industrial Processing', 'Biodiesel Production', 'Chemical Industry'],
      specifications: {
        'Free Fatty Acid': '≤ 5%',
        'Moisture': '≤ 0.25%',
        'Dirt': '≤ 0.02%',
        'Carotene': '500-700 ppm'
      },
      image: 'https://images.pexels.com/photos/4282694/pexels-photo-4282694.jpeg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: oilProducts.length },
    { id: 'sunflower', name: 'Sunflower Oil', count: 1 },
    { id: 'palm', name: 'Palm Oil', count: 1 },
    { id: 'soybean', name: 'Soybean Oil', count: 1 },
    { id: 'canola', name: 'Canola Oil', count: 1 },
    { id: 'olive', name: 'Olive Oil', count: 1 },
    { id: 'rapeseed', name: 'Rapeseed Oil', count: 1 },
    { id: 'corn', name: 'Corn Oil', count: 1 },
    { id: 'crude-palm', name: 'Crude Palm Oil', count: 1 }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? oilProducts 
    : oilProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="edible-oils">
      {/* Hero Section */}
      <section className="oils-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-medium">Premium Edible Oils Collection</h1>
            <p className="body-large">
              Discover our comprehensive range of high-quality edible oils, 
              sourced globally and refined to meet the highest international standards. 
              From cooking to industrial applications, we provide oils for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories">
        <div className="container">
          <div className="categories-header">
            <h2 className="heading-2">Browse by Category</h2>
            <p className="body-medium">
              Filter our oil products by type to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h2 className="heading-2">
              {selectedCategory === 'all' ? 'All Products' : 
               categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="body-medium">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                
                <div className="product-content">
                  <h3 className="heading-3">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  {/* Features */}
                  <div className="product-features">
                    <h4 className="features-title">Key Features</h4>
                    <div className="features-list">
                      {product.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Applications */}
                  <div className="product-applications">
                    <h4 className="applications-title">Applications</h4>
                    <div className="applications-list">
                      {product.applications.map((app, index) => (
                        <span key={index} className="application-tag">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Specifications */}
                  <div className="product-specs">
                    <h4 className="specs-title">Specifications</h4>
                    <div className="specs-grid">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className="spec-item">
                          <span className="spec-key">{key}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="product-actions">
                    <Link to="/contact" className="btn-primary">
                      Request Quote
                    </Link>
                    <Link to="/contact" className="btn-secondary">
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="oils-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Need Custom Oil Solutions?</h2>
            <p className="body-large">
              We offer customized oil blending, packaging, and specification 
              development to meet your unique business requirements.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Discuss Requirements
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .oils-hero {
          padding: var(--spacing-giant) 0;
          background: linear-gradient(135deg, var(--bg-page) 0%, var(--bg-subtle) 100%);
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-content h1 {
          margin-bottom: var(--spacing-md);
        }

        .categories {
          padding: var(--spacing-xl) 0;
          background: var(--bg-card);
        }

        .categories-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .categories-header h2 {
          margin-bottom: var(--spacing-sm);
        }

        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
          justify-content: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .category-btn {
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 25px;
          padding: var(--spacing-sm) var(--spacing-md);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: 0.9rem;
        }

        .category-btn:hover,
        .category-btn.active {
          border-color: var(--brand-primary);
          background: var(--brand-light);
          color: var(--brand-primary);
        }

        .category-name {
          font-weight: 500;
        }

        .category-count {
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .products-section {
          padding: var(--spacing-giant) 0;
        }

        .products-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .products-header h2 {
          margin-bottom: var(--spacing-xs);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-xl);
        }

        .product-card {
          background: var(--bg-card);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(27, 94, 32, 0.15);
        }

        .product-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-content {
          padding: var(--spacing-lg);
        }

        .product-content h3 {
          margin-bottom: var(--spacing-sm);
          color: var(--text-primary);
        }

        .product-description {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }

        .product-features,
        .product-applications,
        .product-specs {
          margin-bottom: var(--spacing-lg);
        }

        .features-title,
        .applications-title,
        .specs-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .features-list,
        .applications-list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .feature-tag,
        .application-tag {
          background: var(--brand-light);
          color: var(--brand-primary);
          padding: 4px var(--spacing-sm);
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xs);
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          padding: var(--spacing-xs) 0;
          border-bottom: 1px solid var(--border-light);
          font-size: 0.85rem;
        }

        .spec-key {
          font-weight: 500;
          color: var(--text-secondary);
        }

        .spec-value {
          color: var(--text-primary);
          font-weight: 600;
        }

        .product-actions {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }

        .oils-cta {
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

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            gap: var(--spacing-xs);
          }

          .category-btn {
            padding: var(--spacing-xs) var(--spacing-sm);
            font-size: 0.8rem;
          }

          .specs-grid {
            grid-template-columns: 1fr;
          }

          .product-actions {
            flex-direction: column;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default EdibleOils;