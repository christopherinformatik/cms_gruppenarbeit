// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Strapi &amp; React</h1>
        <p className="hero-subtitle">
          Das Power-Duo für moderne Webentwicklung
        </p>
        <div className="hero-badges">
          <Link to="/backend" className="hero-badge hero-badge-backend">
            Backend
          </Link>
          <span className="hero-plus">+</span>
          <Link to="/frontend" className="hero-badge hero-badge-frontend">
            Frontend
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
