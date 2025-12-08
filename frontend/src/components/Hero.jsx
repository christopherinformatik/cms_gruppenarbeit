// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Strapi &amp; React</h1>
        <p className="hero-subtitle">
          Das Power-Duo für moderne Webentwicklung
        </p>
        <div className="hero-badges">
          <span className="hero-badge hero-badge-backend">Backend</span>
          <span className="hero-plus">+</span>
          <span className="hero-badge hero-badge-frontend">Frontend</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
