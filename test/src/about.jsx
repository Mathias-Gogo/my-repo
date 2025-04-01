import { useEffect } from 'react';
import './about.css'; // We'll create this SCSS file

export default function About() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <header className="about-header">
          <h1 className="about-title">About Mexuri Framework</h1>
          <p className="about-subtitle">Empowering modern web development</p>
        </header>

        <div className="about-content">
          <article className="about-card">
            <h2 className="about-card-title">Our Vision</h2>
            <p className="about-card-text">
              Mexuri Framework is a cutting-edge web development solution designed to streamline the 
              process of building performant, scalable web applications. We bridge the gap between 
              complex architecture and developer productivity.
            </p>
          </article>

          <article className="about-card">
            <h2 className="about-card-title">Core Principles</h2>
            <ul className="about-features">
              <li className="about-feature-item">
                <span className="feature-icon">⚡</span>
                <span>Lightweight and fast performance</span>
              </li>
              <li className="about-feature-item">
                <span className="feature-icon">🎯</span>
                <span>Developer-friendly syntax and tools</span>
              </li>
              <li className="about-feature-item">
                <span className="feature-icon">🧩</span>
                <span>Modular architecture</span>
              </li>
              <li className="about-feature-item">
                <span className="feature-icon">🔌</span>
                <span>Seamless integration with modern ecosystems</span>
              </li>
            </ul>
          </article>

          <article className="about-card">
            <h2 className="about-card-title">Technical Foundation</h2>
            <p className="about-card-text">
              Built on top of battle-tested technologies like React, Redux, and Webpack, 
              Mexuri Framework combines the power of these tools with sensible defaults 
              and optimized configurations out of the box.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Redux</span>
              <span className="tech-badge">Webpack</span>
              <span className="tech-badge">ES6+</span>
            </div>
          </article>

          <div className="about-cta">
            <h3 className="cta-title">Ready to get started?</h3>
            <p className="cta-text">
              Join thousands of developers building amazing web applications with Mexuri Framework.
            </p>
            <button className="cta-button">Explore Documentation</button>
          </div>
        </div>
      </div>
    </section>
  );
}