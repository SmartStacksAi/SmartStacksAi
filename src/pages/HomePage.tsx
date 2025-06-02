import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Tech tools to work less and grow more</h1>
              <p>SmartStacks AI helps you automate your business processes so you can focus on what matters most: growth and innovation.</p>
              <div className="hero-cta">
                <Link to="/products" className="button button-primary">Explore Solutions</Link>
                <Link to="/contact" className="button button-outline">Book a Call</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/IMG_6393.png" alt="SmartStacks AI Automation" />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="lead-magnet-section section bg-light">
        <div className="container">
          <div className="lead-magnet-content">
            <div className="lead-magnet-image">
              <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="SmartStacks AI Toolkit" />
            </div>
            <div className="lead-magnet-text">
              <h2>Get Our Free SmartStacks AI Toolkit</h2>
              <p>Discover the 15 essential tools that will transform your business automation strategy. Our curated toolkit includes:</p>
              <ul className="lead-magnet-features">
                <li>AI and content creation tools</li>
                <li>Business infrastructure solutions</li>
                <li>Automation and integration platforms</li>
                <li>Design and visual elements</li>
                <li>Marketing and distribution tools</li>
              </ul>
              <form className="lead-magnet-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="button button-primary">Get Free Access</button>
              </form>
              <p className="form-disclaimer">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header">
            <h2>How We Help You Automate</h2>
            <p>Our three-pillar approach to business automation</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/09D37FC5-A2BD-4C82-BB5C-131C87C6C582.png" alt="Digital Products" />
              </div>
              <h3>Digital Products</h3>
              <p>Ready-to-implement templates, guides, and automation blueprints that help you streamline your business processes without technical expertise.</p>
              <Link to="/products" className="button button-secondary">View Products</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/1ACBE98E-E393-4164-827E-19C62021F03F.png" alt="Consultancy" />
              </div>
              <h3>Consultancy</h3>
              <p>Personalized automation strategies and implementation support for businesses that need custom solutions and hands-on guidance.</p>
              <Link to="/products#consultancy" className="button button-secondary">Learn More</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/C52DC437-8702-4EA7-BBC1-8DBCC1132165.png" alt="Affiliate Ecosystem" />
              </div>
              <h3>Affiliate Ecosystem</h3>
              <p>Curated recommendations for the best automation tools and platforms, with exclusive discounts and implementation guides.</p>
              <Link to="/tools" className="button button-secondary">Explore Tools</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section section bg-light">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Our Philosophy</h2>
              <h3 className="philosophy-tagline">Build it once. Automate the rest.</h3>
              <p>We believe that the most valuable asset in your business is your time and creativity. That's why we're passionate about helping you automate everything that doesn't require your unique human touch.</p>
              <p>Our approach combines practical automation strategies with carefully curated tech tools to create systems that work for you—not the other way around.</p>
              <Link to="/about" className="button button-secondary">About Us</Link>
            </div>
            <div className="philosophy-image">
              <img src="/images/0E458A29-F846-44EE-B55E-FC9E1CE8F04F.png" alt="Build it once. Automate the rest." />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="featured-product-section section">
        <div className="container">
          <div className="featured-product-content">
            <div className="featured-product-image">
              <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="The Automation Blueprint" />
            </div>
            <div className="featured-product-text">
              <div className="product-badge">Featured Product</div>
              <h2>The Automation Blueprint</h2>
              <p className="product-tagline">Your step-by-step guide to automating your entire business</p>
              <p>The Automation Blueprint is a comprehensive system that helps you identify, prioritize, and implement automation opportunities across your business. This isn't just theory—it's a practical, actionable framework that you can start using today.</p>
              <div className="product-features">
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">7-step automation framework</div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">20+ pre-built automation templates</div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">ROI calculator for prioritization</div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">Implementation guides for popular tools</div>
                </div>
              </div>
              <div className="product-pricing">
                <div className="price">£197</div>
                <div className="price-note">One-time payment, lifetime access</div>
              </div>
              <div className="product-cta">
                <Link to="/products/automation-blueprint" className="button button-primary">Learn More</Link>
                <button className="button button-secondary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Success stories from businesses that have implemented our automation strategies</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"SmartStacks AI helped me automate my client onboarding process, saving me 10+ hours every week. The templates were easy to implement, even with my limited tech skills."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  {/* Placeholder for author image */}
                  <div className="author-image-placeholder">SJ</div>
                </div>
                <div className="author-details">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Marketing Consultant</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The Automation Blueprint completely transformed how I run my e-commerce business. I've reduced my working hours by 30% while increasing sales by 45% in just three months."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  {/* Placeholder for author image */}
                  <div className="author-image-placeholder">DT</div>
                </div>
                <div className="author-details">
                  <div className="author-name">David Thompson</div>
                  <div className="author-title">E-commerce Store Owner</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As a non-technical founder, I was skeptical about automation. SmartStacks AI made it accessible and practical. Now my team focuses on growth instead of repetitive tasks."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  {/* Placeholder for author image */}
                  <div className="author-image-placeholder">MP</div>
                </div>
                <div className="author-details">
                  <div className="author-name">Michelle Patel</div>
                  <div className="author-title">SaaS Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="blog-preview-section section">
        <div className="container">
          <div className="section-header">
            <h2>Latest from Our Blog</h2>
            <p>Automation tips, strategies, and insights</p>
          </div>
          
          <div className="blog-preview-grid">
            <div className="blog-preview-card">
              <div className="preview-image">
                <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="5 AI Tools That Will Transform Your Business" />
              </div>
              <div className="preview-content">
                <div className="preview-category">Automation</div>
                <h3 className="preview-title">5 AI Tools That Will Transform Your Business</h3>
                <p className="preview-excerpt">Discover how these powerful AI tools can automate your workflows, enhance customer experiences, and drive growth without requiring technical expertise.</p>
                <Link to="/blog/ai-tools-transform-business" className="read-more">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-preview-card">
              <div className="preview-image">
                <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="How to Create Your First Automation in 30 Minutes" />
              </div>
              <div className="preview-content">
                <div className="preview-category">Tutorials</div>
                <h3 className="preview-title">How to Create Your First Automation in 30 Minutes</h3>
                <p className="preview-excerpt">A step-by-step guide to setting up your first business automation, even if you have zero technical experience.</p>
                <Link to="/blog/first-automation-30-minutes" className="read-more">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-preview-card">
              <div className="preview-image">
                <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="The ROI of Automation: Calculate Your Time Savings" />
              </div>
              <div className="preview-content">
                <div className="preview-category">Strategy</div>
                <h3 className="preview-title">The ROI of Automation: Calculate Your Time Savings</h3>
                <p className="preview-excerpt">Learn how to measure the return on investment for your automation efforts and prioritize which processes to automate first.</p>
                <Link to="/blog/roi-automation-time-savings" className="read-more">Read More →</Link>
              </div>
            </div>
          </div>
          
          <div className="blog-preview-cta">
            <Link to="/blog" className="button button-secondary">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

export default HomePage;
