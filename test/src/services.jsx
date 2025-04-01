import { useEffect } from 'react';
import './services.css';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <header className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Comprehensive solutions for your web development needs</p>
        </header>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🛠️</div>
            <h3 className="service-name">Framework Development</h3>
            <p className="service-description">
              Custom framework solutions tailored to your specific project requirements with optimized performance.
            </p>
            <ul className="service-features">
              <li>Custom configuration</li>
              <li>Performance optimization</li>
              <li>Modular architecture</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3 className="service-name">Application Building</h3>
            <p className="service-description">
              End-to-end web application development using Mexuri Framework's powerful tools.
            </p>
            <ul className="service-features">
              <li>Full-stack development</li>
              <li>Responsive design</li>
              <li>API integration</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3 className="service-name">Training & Support</h3>
            <p className="service-description">
              Comprehensive training programs and ongoing support for your development team.
            </p>
            <ul className="service-features">
              <li>Onboarding sessions</li>
              <li>Documentation</li>
              <li>Priority support</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3 className="service-name">Migration Services</h3>
            <p className="service-description">
              Smooth transition from legacy systems to Mexuri Framework with zero downtime.
            </p>
            <ul className="service-features">
              <li>Codebase analysis</li>
              <li>Incremental migration</li>
              <li>Compatibility layers</li>
            </ul>
          </div>
        </div>

        <div className="services-cta">
          <h3>Ready to transform your development workflow?</h3>
          <button className="cta-button">Get Started Today</button>
        </div>
      </div>
    </section>
  );
}