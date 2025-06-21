import { Link } from 'react-router-dom';
import React from 'react';
import './Products.css';

export default function Products() {
  return (
    <div className="products-container">
      {/* Dynamic background particles */}
      <div className="bg-particle bg-particle-1"></div>
      <div className="bg-particle bg-particle-2"></div>
      <div className="bg-particle bg-particle-3"></div>

      {/* Subtle grid pattern overlay */}
      <div className="grid-overlay"></div>
      
      <div className="content-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-badge">
            <span className="hero-badge-icon">🌍</span>
            Revolutionary Green Technology
          </div>
          
          <h1 className="hero-title">
            Sustainable Solutions for Tomorrow
          </h1>
          
          <p className="hero-description">
            At <strong className="brand-name">BioZync</strong>, we're pioneering the future with groundbreaking eco-technologies. 
            Our innovative solutions tackle climate change head-on while promoting sustainable architecture and ecosystem regeneration.
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">🌱</div>
            <div className="stat-value">50%</div>
            <div className="stat-label">Carbon Reduction</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🫁</div>
            <div className="stat-value">2×</div>
            <div className="stat-label">Oxygen Production</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">♻️</div>
            <div className="stat-value">100%</div>
            <div className="stat-label">Recycled Materials</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {/* EarthZync Bricks */}
          <div className="product-card">
            <div className="product-card-overlay"></div>
            
            <div className="product-icon">
              🧱
            </div>
            
            <h2 className="product-title">
              EarthZync Bricks
            </h2>
            
            <p className="product-description">
              Revolutionary eco-engineered building blocks crafted from 100% recycled materials. 
              Features advanced thermal regulation technology that reduces heat absorption by 40% 
              while maintaining superior structural integrity for sustainable construction.
            </p>
            
            <div className="product-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                40% better thermal insulation
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                Made from 100% recycled waste
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                Carbon-negative manufacturing
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                50-year durability guarantee
              </div>
            </div>
            
            <Link to="/products/earthzync" className="product-link">
              Explore EarthZync
              <span className="link-arrow">→</span>
            </Link>
          </div>

          {/* C4 Super Trees */}
          <div className="product-card">
            <div className="product-card-overlay"></div>
            
            <div className="product-icon">
              🌲
            </div>
            
            <h2 className="product-title">
              C4 Super Trees
            </h2>
            
            <p className="product-description">
              Next-generation bioengineered trees utilizing advanced C4 photosynthesis pathways. 
              These remarkable organisms absorb 200% more CO₂ while producing 150% more oxygen than traditional trees, 
              accelerating ecosystem restoration and air purification.
            </p>
            
            <div className="product-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                2× CO₂ absorption capacity
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                1.5× oxygen production rate
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                Rapid growth in harsh climates
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                Enhanced biodiversity support
              </div>
            </div>
            
            <Link to="/products/c4SuperTree" className="product-link">
              Discover C4 Trees
              <span className="link-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h3 className="cta-title">
            Ready to Build a Sustainable Future?
          </h3>
          <p className="cta-description">
            Join thousands of forward-thinking organizations already using BioZync solutions 
            to create positive environmental impact while achieving their sustainability goals.
          </p>
        </div>
      </div>
    </div>
  );
}