import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SolutionsSlider.css';
import earthZyncImg from '../assets/earthzync.png';
import c4TreeImg from '../assets/c4supertree.png';

function SolutionsSlider() {
  const navigate = useNavigate();

  const products = [
    {
      name: 'EarthZync Bricks',
      tagline: 'Where bricks have a purpose.',
      image: earthZyncImg,
      route: '/products/earthzync',
    },
    {
      name: 'C4 Super Trees',
      tagline: 'Trees with power.',
      image: c4TreeImg,
      route: '/products/c4SuperTree',
    },
  ];

  return (
    <section className="solutions-slider" id="products">
      <h2>Our Solutions</h2>
      <div className="slider-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.tagline}</p>
            <button onClick={() => navigate(product.route)}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolutionsSlider;
