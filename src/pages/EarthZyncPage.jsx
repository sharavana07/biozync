// src/pages/EarthZyncPage.jsx
import React from 'react';
import './EarthZyncPage.css';

function EarthZyncPage() {
  return (
    <div className="product-page">
      <header className="product-header">
        <h1>🌍 EarthZync Bricks</h1>
        <img 
          src="/assets/earthzync.png" 
          alt="EarthZync Bricks - Sustainable construction materials" 
          className="product-image" 
        />
      </header>

      <section className="product-section">
        <h2>What are EarthZync Bricks?</h2>
        <p>
          EarthZync Bricks are next-generation eco-friendly bricks made by blending{' '}
          <strong>biochar</strong>, <strong>natural mud</strong>, and{' '}
          <strong>agro-residues</strong>. These bricks are engineered to be{' '}
          <em>sustainable</em>, <em>durable</em>, and <em>carbon-negative</em>, 
          meaning they actually help in reducing atmospheric CO₂.
        </p>
      </section>

      <section className="product-section">
        <h2>How Are They Made?</h2>
        <ul className="manufacturing-process">
          <li>
            🌱 <strong>Biochar</strong> is produced by pyrolyzing agricultural waste—locking 
            carbon instead of releasing it.
          </li>
          <li>
            🌾 Mixed with <strong>locally sourced mud</strong> and clay for structure 
            and binding.
          </li>
          <li>
            🌡️ <strong>Cured naturally</strong> using sunlight—no need for 
            energy-intensive kiln firing.
          </li>
        </ul>
      </section>

      <section className="product-section">
        <h2>Why Use EarthZync Bricks?</h2>
        <ul className="benefits-list">
          <li>
            ♻️ <strong>Low Carbon Footprint</strong> – They store carbon rather than emit it.
          </li>
          <li>
            🏗️ <strong>High Durability</strong> – Comparable strength to fired bricks 
            but without the emissions.
          </li>
          <li>
            🌬️ <strong>Breathable Structure</strong> – Helps regulate indoor temperature 
            and humidity.
          </li>
          <li>
            💸 <strong>Affordable & Scalable</strong> – Made from abundant, low-cost materials.
          </li>
          <li>
            🔥 <strong>Fire Resistant</strong> – Tested to withstand high temperatures.
          </li>
        </ul>
      </section>

      <section className="product-section">
        <h2>Safety & Sustainability</h2>
        <p>
          EarthZync Bricks are <strong>non-toxic</strong>, <strong>asbestos-free</strong>, 
          and <strong>safe for both indoor and outdoor use</strong>. The materials used 
          are entirely biodegradable and pose <strong>zero risk to human health or the 
          environment</strong>. Every brick helps in sequestering carbon, making it a 
          positive contributor to climate goals.
        </p>
      </section>

      <section className="product-section">
        <h2>Applications</h2>
        <ul className="applications-list">
          <li>🏡 Green Homes & Sustainable Housing Projects</li>
          <li>🏫 Eco-Schools & Institutions</li>
          <li>🏢 Commercial Green Buildings</li>
          <li>🏞️ Climate-Resilient Rural Infrastructure</li>
        </ul>
      </section>

      <section className="product-section comparison-section">
        <h2>EarthZync vs Traditional Bricks</h2>
        <div className="table-container">
          <table className="product-comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>EarthZync Brick</th>
                <th>Traditional Brick</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CO₂ Impact</td>
                <td className="positive">Carbon-Negative</td>
                <td className="negative">High Emissions</td>
              </tr>
              <tr>
                <td>Energy Use</td>
                <td className="positive">Sun-Dried</td>
                <td className="negative">High (Kiln Fired)</td>
              </tr>
              <tr>
                <td>Raw Materials</td>
                <td className="positive">Biochar, Mud</td>
                <td className="negative">Topsoil, Water</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td className="positive">Lower</td>
                <td className="negative">Higher (long-term)</td>
              </tr>
              <tr>
                <td>Durability</td>
                <td className="positive">High</td>
                <td className="neutral">High</td>
              </tr>
              <tr>
                <td>Environmental Impact</td>
                <td className="positive">Positive</td>
                <td className="negative">Negative</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="product-section cta-section">
        <h2>Ready to Build Sustainably?</h2>
        <p>
          Join the green construction revolution with EarthZync Bricks. 
          Contact us to learn more about pricing, availability, and bulk orders.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Get Quote</button>
          <button className="btn btn-secondary">Download Specifications</button>
        </div>
      </section>
    </div>
  );
}

export default EarthZyncPage;