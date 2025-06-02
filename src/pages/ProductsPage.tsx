import { Link } from 'react-router-dom';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <section className="page-header bg-primary">
        <div className="container">
          <h1>Products & Services</h1>
          <p>Automation solutions to help your business work less and grow more</p>
        </div>
      </section>

      <section className="products-intro section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Our Three-Pillar Approach</h2>
              <p>At SmartStacks AI, we offer a comprehensive suite of automation solutions designed to help businesses of all sizes streamline their operations, reduce manual work, and focus on growth.</p>
              <p>Our offerings are built around three core pillars, each designed to meet different automation needs and preferences.</p>
            </div>
            <div className="intro-image">
              <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="SmartStacks AI Products" />
            </div>
          </div>
        </div>
      </section>

      <section className="product-categories section bg-light">
        <div className="container">
          <div className="categories-grid">
            <div className="category-card" id="digital-products">
              <div className="category-icon">
                <img src="/images/09D37FC5-A2BD-4C82-BB5C-131C87C6C582.png" alt="Digital Products" />
              </div>
              <div className="category-content">
                <h2>Digital Products</h2>
                <p>Ready-to-implement templates, guides, and automation blueprints that help you streamline your business processes without technical expertise.</p>
                <Link to="#digital-products-list" className="button button-secondary">View Products</Link>
              </div>
            </div>
            
            <div className="category-card" id="consultancy">
              <div className="category-icon">
                <img src="/images/1ACBE98E-E393-4164-827E-19C62021F03F.png" alt="Consultancy" />
              </div>
              <div className="category-content">
                <h2>Consultancy</h2>
                <p>Personalized automation strategies and implementation support for businesses that need custom solutions and hands-on guidance.</p>
                <Link to="#consultancy-services" className="button button-secondary">View Services</Link>
              </div>
            </div>
            
            <div className="category-card" id="affiliate">
              <div className="category-icon">
                <img src="/images/C52DC437-8702-4EA7-BBC1-8DBCC1132165.png" alt="Affiliate Ecosystem" />
              </div>
              <div className="category-content">
                <h2>Affiliate Ecosystem</h2>
                <p>Curated recommendations for the best automation tools and platforms, with exclusive discounts and implementation guides.</p>
                <Link to="/tools" className="button button-secondary">Explore Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="digital-products-section section" id="digital-products-list">
        <div className="container">
          <div className="section-header">
            <h2>Digital Products</h2>
            <p>Ready-to-implement automation solutions</p>
          </div>
          
          <div className="products-grid">
            <div className="product-card featured-product">
              <div className="product-badge">Bestseller</div>
              <div className="product-image">
                <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="The Automation Blueprint" />
              </div>
              <div className="product-content">
                <h3>The Automation Blueprint</h3>
                <p>Your step-by-step guide to automating your entire business. Includes 7-step framework, 20+ templates, and implementation guides.</p>
                <div className="product-price">£197</div>
                <div className="product-actions">
                  <Link to="/products/automation-blueprint" className="button button-secondary">Learn More</Link>
                  <button className="button button-primary">Buy Now</button>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="Client Onboarding Automation" />
              </div>
              <div className="product-content">
                <h3>Client Onboarding Automation</h3>
                <p>Streamline your client onboarding process with these ready-to-use templates and automation workflows.</p>
                <div className="product-price">£47</div>
                <div className="product-actions">
                  <Link to="/products/client-onboarding" className="button button-secondary">Learn More</Link>
                  <button className="button button-primary">Buy Now</button>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <img src="/images/0E458A29-F846-44EE-B55E-FC9E1CE8F04F.png" alt="Content Marketing Automation" />
              </div>
              <div className="product-content">
                <h3>Content Marketing Automation</h3>
                <p>Automate your content creation, distribution, and repurposing with these powerful templates and workflows.</p>
                <div className="product-price">£47</div>
                <div className="product-actions">
                  <Link to="/products/content-marketing" className="button button-secondary">Learn More</Link>
                  <button className="button button-primary">Buy Now</button>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="Email Marketing Automation" />
              </div>
              <div className="product-content">
                <h3>Email Marketing Automation</h3>
                <p>Enhance your email marketing with automated sequences, segmentation, and personalization workflows.</p>
                <div className="product-price">£47</div>
                <div className="product-actions">
                  <Link to="/products/email-marketing" className="button button-secondary">Learn More</Link>
                  <button className="button button-primary">Buy Now</button>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-badge">New</div>
              <div className="product-image">
                <img src="/images/09D37FC5-A2BD-4C82-BB5C-131C87C6C582.png" alt="AI Automation Pack" />
              </div>
              <div className="product-content">
                <h3>AI Automation Pack</h3>
                <p>Leverage the power of AI in your business with these cutting-edge automation templates and workflows.</p>
                <div className="product-price">£67</div>
                <div className="product-actions">
                  <Link to="/products/ai-automation" className="button button-secondary">Learn More</Link>
                  <button className="button button-primary">Buy Now</button>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-badge">Bundle</div>
              <div className="product-image">
                <img src="/images/C52DC437-8702-4EA7-BBC1-8DBCC1132165.png" alt="Automation Starter Bundle" />
              </div>
              <div className="product-content">
                <h3>Automation Starter Bundle</h3>
                <p>Get all three specialized automation packs (Client, Content, Email) at a special bundle price.</p>
                <div className="product-price">£97</div>
                <div className="product-actions">
                  <Link to="/products/starter-bundle" className="button button-secondary">Learn More</Link>
                  <button className="button button-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="consultancy-section section bg-light" id="consultancy-services">
        <div className="container">
          <div className="section-header">
            <h2>Consultancy Services</h2>
            <p>Personalized automation support for your business</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/1ACBE98E-E393-4164-827E-19C62021F03F.png" alt="Automation Strategy Session" />
              </div>
              <div className="service-content">
                <h3>Automation Strategy Session</h3>
                <p>A 90-minute deep dive into your business to identify automation opportunities and create a prioritized roadmap.</p>
                <ul className="service-features">
                  <li>Business process analysis</li>
                  <li>Automation opportunity identification</li>
                  <li>ROI calculation for each opportunity</li>
                  <li>Prioritized implementation roadmap</li>
                  <li>Tool recommendations</li>
                </ul>
                <div className="service-price">£297</div>
                <div className="service-actions">
                  <Link to="/contact" className="button button-secondary">Book Now</Link>
                </div>
              </div>
            </div>
            
            <div className="service-card featured-service">
              <div className="service-badge">Most Popular</div>
              <div className="service-icon">
                <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="Automation Implementation Package" />
              </div>
              <div className="service-content">
                <h3>Automation Implementation Package</h3>
                <p>Hands-on support to implement your top three automation priorities, with training for your team.</p>
                <ul className="service-features">
                  <li>Implementation of 3 key automations</li>
                  <li>Custom workflow design</li>
                  <li>Tool setup and configuration</li>
                  <li>Team training session</li>
                  <li>30 days of support</li>
                </ul>
                <div className="service-price">£997</div>
                <div className="service-actions">
                  <Link to="/contact" className="button button-secondary">Book Now</Link>
                </div>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/0E458A29-F846-44EE-B55E-FC9E1CE8F04F.png" alt="Business Automation Overhaul" />
              </div>
              <div className="service-content">
                <h3>Business Automation Overhaul</h3>
                <p>A comprehensive service to transform your entire business through strategic automation implementation.</p>
                <ul className="service-features">
                  <li>Complete business process mapping</li>
                  <li>Comprehensive automation strategy</li>
                  <li>Implementation of 5+ key automations</li>
                  <li>Custom integration development</li>
                  <li>Team training program</li>
                  <li>90 days of support</li>
                </ul>
                <div className="service-price">Custom Pricing</div>
                <div className="service-actions">
                  <Link to="/contact" className="button button-secondary">Request Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bundle-section section">
        <div className="container">
          <div className="bundle-content">
            <div className="bundle-image">
              <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="Ultimate Automation Bundle" />
            </div>
            <div className="bundle-details">
              <div className="bundle-badge">Best Value</div>
              <h2>Ultimate Automation Bundle</h2>
              <p className="bundle-tagline">Everything you need to transform your business through automation</p>
              <p className="bundle-description">Get The Automation Blueprint, all specialized automation packs, and a 90-minute strategy session at a special bundle price.</p>
              <div className="bundle-includes">
                <h3>Bundle Includes:</h3>
                <ul>
                  <li>The Automation Blueprint (£197 value)</li>
                  <li>Client Onboarding Automation (£47 value)</li>
                  <li>Content Marketing Automation (£47 value)</li>
                  <li>Email Marketing Automation (£47 value)</li>
                  <li>AI Automation Pack (£67 value)</li>
                  <li>Automation Strategy Session (£297 value)</li>
                </ul>
              </div>
              <div className="bundle-pricing">
                <div className="price-comparison">
                  <div className="original-price">£702</div>
                  <div className="sale-price">£497</div>
                </div>
                <div className="savings">Save £205 (29%)</div>
              </div>
              <div className="bundle-cta">
                <button className="button button-primary">Get the Bundle</button>
                <Link to="/contact" className="button button-outline">Have Questions?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Success stories from businesses that have implemented our automation solutions</p>
          </div>
          
          <div className="testimonials-grid">
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
                <p>"The Automation Strategy Session was eye-opening. We identified over £50,000 in potential savings through automation, and the implementation roadmap made it easy to prioritize our efforts."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  {/* Placeholder for author image */}
                  <div className="author-image-placeholder">JM</div>
                </div>
                <div className="author-details">
                  <div className="author-name">Jennifer Martinez</div>
                  <div className="author-title">Agency Director</div>
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

      <section className="guarantee-section section">
        <div className="container">
          <div className="guarantee-content">
            <div className="guarantee-icon">✓</div>
            <div className="guarantee-text">
              <h2>Our 30-Day Satisfaction Guarantee</h2>
              <p>We're confident that our products will transform your business. If you're not completely satisfied for any reason, simply email us within 30 days of purchase for a full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our products and services</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <span>Do I need technical skills to use your products?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>No, our products are designed for business owners of all technical skill levels. Our step-by-step implementation guides walk you through every process, and we provide video tutorials for the most common automation tools.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>How quickly will I see results?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Most customers implement their first automation within 48 hours of purchasing our products. Depending on the complexity of your business, you can expect to see significant time savings within 1-2 weeks of implementation.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>What if I'm not satisfied with a product?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>We offer a 30-day satisfaction guarantee on all our digital products. If you're not completely satisfied, simply email us within 30 days of purchase for a full refund, no questions asked.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>Do I get lifetime access to the materials?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Yes, your purchase includes lifetime access to all materials included in your package. For certain products, you'll also receive updates and new templates as they're released.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>What tools do I need to implement the automations?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Our products are tool-agnostic, meaning you can implement the strategies using whatever tools you prefer. However, we provide specific implementation guides for popular tools like Zapier, Make (formerly Integromat), Airtable, and more.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>Is there any support if I get stuck?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Yes, all products include email support. Certain packages include additional support options to help you implement your automation strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to automate your business?</h2>
            <p>Get started with our products or book a consultation today.</p>
            <div className="cta-buttons">
              <Link to="#digital-products-list" className="button button-secondary">View Products</Link>
              <Link to="/contact" className="button button-outline">Book a Call</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
