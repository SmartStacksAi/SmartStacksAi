import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="page-header bg-primary">
        <div className="container">
          <h1>About SmartStacks AI</h1>
          <p>Our mission is to help businesses build once and automate the rest.</p>
        </div>
      </section>

      <section className="about-intro section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>SmartStacks AI was founded with a simple belief: business owners shouldn't have to choose between growth and work-life balance.</p>
              <p>After years of helping businesses implement automation solutions, we noticed a pattern. Most entrepreneurs were spending countless hours on repetitive tasks that could be automated, but they lacked the technical knowledge or resources to implement effective solutions.</p>
              <p>That's why we created SmartStacks AI—to provide accessible, practical automation tools and strategies that help businesses scale without sacrificing quality or burning out their teams.</p>
            </div>
            <div className="about-image">
              <img src="/images/IMG_6393.png" alt="SmartStacks AI Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission</h2>
            <p>We're on a mission to help businesses work smarter, not harder.</p>
          </div>
          
          <div className="mission-content">
            <div className="mission-card">
              <div className="mission-icon">🚀</div>
              <h3>Simplify</h3>
              <p>We break down complex automation concepts into simple, actionable steps that anyone can implement, regardless of technical background.</p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">🔄</div>
              <h3>Automate</h3>
              <p>We provide the tools, templates, and guidance to help you automate repetitive tasks and streamline your business operations.</p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">📈</div>
              <h3>Scale</h3>
              <p>We help you build systems that grow with your business, allowing you to increase revenue without proportionally increasing workload.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-image">
              <img src="/images/0E458A29-F846-44EE-B55E-FC9E1CE8F04F.png" alt="Build it once. Automate the rest." />
            </div>
            <div className="philosophy-text">
              <h2>Our Philosophy</h2>
              <h3 className="philosophy-tagline">Build it once. Automate the rest.</h3>
              <p>We believe that the most valuable asset in your business is your time and creativity. That's why we're passionate about helping you automate everything that doesn't require your unique human touch.</p>
              <p>Our approach combines practical automation strategies with carefully curated tech tools to create systems that work for you—not the other way around.</p>
              <p>Whether you're just starting out or looking to scale an established business, our goal is to help you build a foundation of automated processes that free you to focus on growth and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <h3>Simplicity</h3>
              <p>We believe the best solutions are often the simplest ones. We focus on creating tools and strategies that are easy to understand and implement.</p>
            </div>
            
            <div className="value-card">
              <h3>Practicality</h3>
              <p>We're not interested in theoretical concepts—we're committed to providing practical solutions that deliver real results for real businesses.</p>
            </div>
            
            <div className="value-card">
              <h3>Accessibility</h3>
              <p>We design our products and services to be accessible to business owners of all technical skill levels and backgrounds.</p>
            </div>
            
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We only recommend tools and strategies we've personally tested and believe in. Your trust is our most valuable asset.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to automate your business?</h2>
            <p>Get started with our free resources or explore our products and services.</p>
            <div className="cta-buttons">
              <Link to="/products" className="button button-secondary">Explore Products</Link>
              <Link to="/contact" className="button button-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
