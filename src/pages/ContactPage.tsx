import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header bg-primary">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with the SmartStacks AI team. We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-content">
            <div className="contact-info-text">
              <h2>Let's Connect</h2>
              <p>Whether you have questions about our products, need help with automation, or want to explore working together, we're here to help.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h3>Email Us</h3>
                    <p>For general inquiries: <a href="mailto:hello@smartstacksai.com">hello@smartstacksai.com</a></p>
                    <p>For support: <a href="mailto:support@smartstacksai.com">support@smartstacksai.com</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                      <a href="https://pinterest.com/smartstacksai" target="_blank" rel="noopener noreferrer" className="social-link">
                        <span className="social-icon">📌</span>
                        <span className="social-name">Pinterest</span>
                      </a>
                      <a href="https://instagram.com/smartstacksai" target="_blank" rel="noopener noreferrer" className="social-link">
                        <span className="social-icon">📷</span>
                        <span className="social-name">Instagram</span>
                      </a>
                      <a href="https://twitter.com/smartstacksai" target="_blank" rel="noopener noreferrer" className="social-link">
                        <span className="social-icon">🐦</span>
                        <span className="social-name">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">⏱️</div>
                  <div className="contact-details">
                    <h3>Response Time</h3>
                    <p>We typically respond to all inquiries within 24-48 hours during business days.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-info-image">
              <img src="/images/IMG_6393.png" alt="Contact Us" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} placeholder="How can we help you?" required></textarea>
              </div>
              
              <div className="form-group form-checkbox">
                <input type="checkbox" id="newsletter" name="newsletter" />
                <label htmlFor="newsletter">Subscribe to our newsletter for automation tips and updates</label>
              </div>
              
              <button type="submit" className="button button-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section className="booking-section section">
        <div className="container">
          <div className="section-header">
            <h2>Book a Call</h2>
            <p>Schedule a free 15-minute consultation to discuss your automation needs.</p>
          </div>
          
          <div className="booking-content">
            <div className="booking-text">
              <h3>What to Expect</h3>
              <ul className="booking-list">
                <li>A focused 15-minute conversation about your business</li>
                <li>Discussion of your current challenges and goals</li>
                <li>Personalized automation recommendations</li>
                <li>No pressure, no sales tactics</li>
              </ul>
              <p>After our call, you'll receive a follow-up email with a summary of our discussion and recommended next steps.</p>
              <div className="booking-cta">
                <a href="#calendar" className="button">View Available Times</a>
              </div>
            </div>
            
            <div className="booking-calendar" id="calendar">
              <div className="calendar-placeholder">
                <h3>Booking Calendar</h3>
                <p>Select a date and time that works for you:</p>
                <div className="calendar-frame">
                  {/* This would be replaced with an actual embedded calendar */}
                  <div className="calendar-mock">
                    <div className="calendar-header">
                      <span>May 2025</span>
                    </div>
                    <div className="calendar-days">
                      <div className="calendar-day">Mon</div>
                      <div className="calendar-day">Tue</div>
                      <div className="calendar-day">Wed</div>
                      <div className="calendar-day">Thu</div>
                      <div className="calendar-day">Fri</div>
                      <div className="calendar-day">Sat</div>
                      <div className="calendar-day">Sun</div>
                    </div>
                    <div className="calendar-dates">
                      {/* Calendar dates would go here */}
                      <div className="calendar-date disabled">29</div>
                      <div className="calendar-date disabled">30</div>
                      <div className="calendar-date">1</div>
                      <div className="calendar-date">2</div>
                      <div className="calendar-date">3</div>
                      <div className="calendar-date">4</div>
                      <div className="calendar-date">5</div>
                      {/* More dates... */}
                    </div>
                    <div className="calendar-times">
                      <div className="calendar-time">10:00 AM</div>
                      <div className="calendar-time">11:30 AM</div>
                      <div className="calendar-time">1:00 PM</div>
                      <div className="calendar-time">2:30 PM</div>
                      <div className="calendar-time">4:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about working with us</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <span>How quickly can I expect results from automation?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Most clients start seeing significant time savings within 2-4 weeks of implementing their first few automations. The exact timeline depends on the complexity of your business and which processes you choose to automate first.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>Do I need technical skills to work with your products?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Our products are designed for non-technical business owners. While some basic tech comfort is helpful, our step-by-step guides and templates make implementation accessible to anyone. For more complex needs, our consultancy services provide hands-on support.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>What if I'm not sure which product is right for me?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>We recommend booking a free consultation call where we can discuss your specific needs and recommend the best solution. Alternatively, you can email us with details about your business, and we'll provide personalized recommendations.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>Do you offer refunds if I'm not satisfied?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Yes, we offer a 30-day satisfaction guarantee on all our digital products. If you're not completely satisfied, simply email us within 30 days of purchase for a full refund. For consultancy services, we discuss terms and satisfaction guarantees before beginning any work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section section bg-primary">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Get weekly automation tips, tool recommendations, and exclusive content delivered straight to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <form>
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="button button-secondary">Subscribe</button>
              </form>
              <p className="form-disclaimer">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
