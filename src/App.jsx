import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './pages/AboutPage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import C4SuperTreePage from './pages/C4SuperTreePage';
import EarthZyncPage from './pages/EarthZyncPage';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">BioZync</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/c4SuperTree" element={<C4SuperTreePage />} />
        <Route path="/products/earthzync" element={<EarthZyncPage />} />
      </Routes>

      <footer className="footer">
        <div className="footer-logo">BioZync - Restoring Earth, one innovation at a time.</div>
        <div className="footer-menu">
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Join the Movement</Link>
        </div>
        <div className="footer-socials">
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
