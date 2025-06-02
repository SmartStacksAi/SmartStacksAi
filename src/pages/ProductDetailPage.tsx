import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  // We'll use the id parameter in a real implementation
  useParams<{ id: string }>();
  
  return (
    <div className="product-detail-page">
      <section className="page-header bg-primary">
        <div className="container">
          <h1>The Automation Blueprint</h1>
          <p>Your step-by-step guide to automating your entire business</p>
        </div>
      </section>

      <section className="product-overview section">
        <div className="container">
          <div className="product-content">
            <div className="product-image">
              <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="The Automation Blueprint" />
            </div>
            <div className="product-details">
              <div className="product-badge">Bestseller</div>
              <h2>The Automation Blueprint</h2>
              <p className="product-tagline">Transform your business with our comprehensive automation framework</p>
              <div className="product-price">
                <span className="current-price">£197</span>
                <span className="original-price">£297</span>
                <span className="discount">Save 34%</span>
              </div>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="review-count">47 reviews</span>
              </div>
              <div className="product-actions">
                <button className="button button-primary">Buy Now</button>
                <button className="button button-secondary">Add to Cart</button>
              </div>
              <div className="product-guarantee">
                <span className="guarantee-icon">✓</span>
                <span className="guarantee-text">30-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-description section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>What's Included</h2>
            <p>Everything you need to automate your business from start to finish</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <div className="feature-content">
                <h3>7-Step Automation Framework</h3>
                <p>Our proven methodology for identifying, prioritizing, and implementing automations in any business.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <div className="feature-content">
                <h3>20+ Automation Templates</h3>
                <p>Ready-to-use templates for the most common business processes, from client onboarding to content marketing.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <div className="feature-content">
                <h3>Integration Guides</h3>
                <p>Step-by-step instructions for connecting your favorite tools and creating seamless workflows.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <div className="feature-content">
                <h3>ROI Calculator</h3>
                <p>Custom spreadsheet to calculate the time and money saved by implementing each automation.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <div className="feature-content">
                <h3>Video Tutorials</h3>
                <p>Over 5 hours of video content walking you through each step of the automation process.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <div className="feature-content">
                <h3>Community Access</h3>
                <p>Join our private community of automation enthusiasts for support, inspiration, and networking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section section">
        <div className="container">
          <div className="section-header">
            <h2>How This Will Transform Your Business</h2>
            <p>The real-world benefits of implementing The Automation Blueprint</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <div className="benefit-content">
                <h3>Save 10+ Hours Per Week</h3>
                <p>Eliminate repetitive tasks and reclaim your time for high-value activities that grow your business.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <div className="benefit-content">
                <h3>Reduce Operational Costs</h3>
                <p>Cut down on administrative expenses and reduce the need for additional team members.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <div className="benefit-content">
                <h3>Scale Without Burnout</h3>
                <p>Handle more clients and projects without increasing your workload or stress levels.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <div className="benefit-content">
                <h3>Improve Client Experience</h3>
                <p>Deliver consistent, high-quality service that impresses clients and generates referrals.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🔍</div>
              <div className="benefit-content">
                <h3>Eliminate Errors</h3>
                <p>Reduce human error and ensure critical steps are never missed in your processes.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🧠</div>
              <div className="benefit-content">
                <h3>Reduce Mental Load</h3>
                <p>Free up mental space by automating decision-making for routine tasks and processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Package</h2>
            <p>Select the option that best fits your needs</p>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Standard</h3>
                <div className="pricing-price">£197</div>
                <p className="pricing-description">The complete Automation Blueprint with all core features</p>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>✓ 7-Step Automation Framework</li>
                  <li>✓ 20+ Automation Templates</li>
                  <li>✓ Integration Guides</li>
                  <li>✓ ROI Calculator</li>
                  <li>✓ Video Tutorials</li>
                  <li>✓ Community Access (3 months)</li>
                  <li>✗ 1:1 Implementation Call</li>
                  <li>✗ Template Customization</li>
                  <li>✗ Priority Support</li>
                </ul>
              </div>
              <div className="pricing-cta">
                <button className="button button-primary">Buy Standard</button>
              </div>
            </div>
            
            <div className="pricing-card featured-pricing">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3>Premium</h3>
                <div className="pricing-price">£297</div>
                <p className="pricing-description">Everything in Standard plus personalized support</p>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>✓ 7-Step Automation Framework</li>
                  <li>✓ 20+ Automation Templates</li>
                  <li>✓ Integration Guides</li>
                  <li>✓ ROI Calculator</li>
                  <li>✓ Video Tutorials</li>
                  <li>✓ Community Access (Lifetime)</li>
                  <li>✓ 1:1 Implementation Call (60 min)</li>
                  <li>✓ Template Customization</li>
                  <li>✓ Priority Support (3 months)</li>
                </ul>
              </div>
              <div className="pricing-cta">
                <button className="button button-primary">Buy Premium</button>
              </div>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Enterprise</h3>
                <div className="pricing-price">£997</div>
                <p className="pricing-description">Full implementation support for your entire team</p>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>✓ Everything in Premium</li>
                  <li>✓ Team Training Session (2 hours)</li>
                  <li>✓ Custom Automation Strategy</li>
                  <li>✓ 3 Implementation Calls</li>
                  <li>✓ Custom Workflow Development</li>
                  <li>✓ Priority Support (12 months)</li>
                  <li>✓ Quarterly Strategy Reviews</li>
                </ul>
              </div>
              <div className="pricing-cta">
                <button className="button button-primary">Buy Enterprise</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>Real results from businesses that implemented The Automation Blueprint</p>
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
                <p>"As a marketing agency, we were drowning in client work. The templates in this blueprint helped us automate our client reporting, saving us 15 hours per week and improving client satisfaction."</p>
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
                <p>"I was skeptical about automation as a non-technical founder, but the step-by-step guides made it accessible. We've automated our entire client onboarding process and saved £2,000/month in admin costs."</p>
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

      <section className="faq-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about The Automation Blueprint</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <span>Do I need technical skills to implement these automations?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>No, The Automation Blueprint is designed for business owners of all technical skill levels. Our step-by-step implementation guides walk you through every process, and we provide video tutorials for the most common automation tools. No coding required!</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>How quickly will I see results?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Most customers implement their first automation within 48 hours of purchasing The Automation Blueprint. Depending on the complexity of your business, you can expect to see significant time savings within 1-2 weeks of implementation.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>What if I'm not satisfied with the product?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>We offer a 30-day satisfaction guarantee. If you're not completely satisfied with The Automation Blueprint, simply email us within 30 days of purchase for a full refund, no questions asked.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>Do I get lifetime access to the materials?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Yes, your purchase includes lifetime access to all materials included in The Automation Blueprint. You'll also receive updates and new templates as they're released.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>What tools do I need to implement the automations?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>The Automation Blueprint is tool-agnostic, meaning you can implement the strategies using whatever tools you prefer. However, we provide specific implementation guides for popular tools like Zapier, Make (formerly Integromat), Airtable, and more.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>Is there any support if I get stuck?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Yes, all packages include access to our community forum where you can ask questions and get help. The Premium and Enterprise packages also include direct support options for more personalized assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to transform your business through automation?</h2>
            <p>Get The Automation Blueprint today and start saving time, reducing costs, and scaling your business without burnout.</p>
            <div className="cta-buttons">
              <button className="button button-secondary">Buy Now</button>
              <button className="button button-outline">Learn More</button>
            </div>
            <p className="cta-guarantee">30-Day Money Back Guarantee • Secure Payment • Instant Access</p>
          </div>
        </div>
      </section>

      <section className="related-products section">
        <div className="container">
          <div className="section-header">
            <h2>You May Also Like</h2>
            <p>Other products that complement The Automation Blueprint</p>
          </div>
          
          <div className="related-products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="Client Onboarding Automation" />
              </div>
              <div className="product-content">
                <h3>Client Onboarding Automation</h3>
                <p>Streamline your client onboarding process with these ready-to-use templates and automation workflows.</p>
                <div className="product-price">£47</div>
                <div className="product-actions">
                  <button className="button button-secondary">Learn More</button>
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
                  <button className="button button-secondary">Learn More</button>
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
                  <button className="button button-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
