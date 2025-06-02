import { Link } from 'react-router-dom';
import './ToolsPage.css';

const ToolsPage = () => {
  return (
    <div className="tools-page">
      <section className="page-header bg-primary">
        <div className="container">
          <h1>Tools We Love</h1>
          <p>Our curated collection of the best automation tools for your business</p>
        </div>
      </section>

      <section className="tools-intro section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Why These Tools?</h2>
              <p>At SmartStacks AI, we're passionate about helping businesses find the right tools to automate their processes and scale efficiently. We've personally tested hundreds of tools and selected only the best for our recommendations.</p>
              <p>Each tool in our collection has been vetted for ease of use, reliability, value for money, and integration capabilities. We only recommend tools we use ourselves or have implemented successfully for our clients.</p>
            </div>
            <div className="intro-image">
              <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="SmartStacks AI Tools" />
            </div>
          </div>
        </div>
      </section>

      <section className="tools-category section bg-light" id="ai-tools">
        <div className="container">
          <div className="category-header">
            <div className="category-icon">
              <img src="/images/09D37FC5-A2BD-4C82-BB5C-131C87C6C582.png" alt="AI and Content Creation Tools" />
            </div>
            <div className="category-title">
              <h2>AI and Content Creation Tools</h2>
              <p>Leverage artificial intelligence to streamline content creation and enhance productivity</p>
            </div>
          </div>
          
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="ChatGPT" />
              </div>
              <div className="tool-content">
                <h3>ChatGPT Plus</h3>
                <p className="tool-description">Advanced AI assistant for content creation, research, and problem-solving. Perfect for drafting emails, blog posts, and more.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Content creation, brainstorming, research</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">$20/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes (limited)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/0E458A29-F846-44EE-B55E-FC9E1CE8F04F.png" alt="ElevenLabs" />
              </div>
              <div className="tool-content">
                <h3>ElevenLabs</h3>
                <p className="tool-description">Premium AI voice generation platform for creating natural-sounding voiceovers, podcasts, and audio content.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Voiceovers, podcasts, audio content</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $5/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes (limited)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/C52DC437-8702-4EA7-BBC1-8DBCC1132165.png" alt="Midjourney" />
              </div>
              <div className="tool-content">
                <h3>Midjourney</h3>
                <p className="tool-description">AI image generation tool for creating stunning visuals, illustrations, and graphics for your marketing and content.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Image generation, visual content</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $10/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">No</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-category section" id="business-infrastructure">
        <div className="container">
          <div className="category-header">
            <div className="category-icon">
              <img src="/images/1ACBE98E-E393-4164-827E-19C62021F03F.png" alt="Business Infrastructure" />
            </div>
            <div className="category-title">
              <h2>Business Infrastructure</h2>
              <p>Essential platforms to build and scale your business operations</p>
            </div>
          </div>
          
          <div className="tools-grid">
            <div className="tool-card featured-tool">
              <div className="tool-badge">Recommended</div>
              <div className="tool-logo">
                <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="Systeme.io" />
              </div>
              <div className="tool-content">
                <h3>Systeme.io</h3>
                <p className="tool-description">All-in-one platform for building funnels, managing email campaigns, and delivering digital products. Perfect for course creators and digital entrepreneurs.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Funnels, email marketing, digital products</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $0/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://systeme.io/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="Notion" />
              </div>
              <div className="tool-content">
                <h3>Notion</h3>
                <p className="tool-description">Versatile workspace for notes, documents, wikis, and project management. Excellent for organizing your business knowledge and workflows.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Documentation, project management</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $0/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="Google Workspace" />
              </div>
              <div className="tool-content">
                <h3>Google Workspace</h3>
                <p className="tool-description">Comprehensive suite of productivity tools including Gmail, Drive, Docs, Sheets, and more. Essential for team collaboration.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Email, document collaboration, storage</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $6/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Limited (Gmail)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://workspace.google.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-category section bg-light" id="automation-integration">
        <div className="container">
          <div className="category-header">
            <div className="category-icon">
              <img src="/images/09D37FC5-A2BD-4C82-BB5C-131C87C6C582.png" alt="Automation and Integration" />
            </div>
            <div className="category-title">
              <h2>Automation and Integration</h2>
              <p>Connect your tools and automate workflows across your business</p>
            </div>
          </div>
          
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/0E458A29-F846-44EE-B55E-FC9E1CE8F04F.png" alt="Zapier" />
              </div>
              <div className="tool-content">
                <h3>Zapier</h3>
                <p className="tool-description">Connect apps and automate workflows with easy-to-use interface. Perfect for beginners and businesses with straightforward automation needs.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Simple automations, wide app support</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $0/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes (limited)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card featured-tool">
              <div className="tool-badge">Our Favorite</div>
              <div className="tool-logo">
                <img src="/images/C52DC437-8702-4EA7-BBC1-8DBCC1132165.png" alt="Make (formerly Integromat)" />
              </div>
              <div className="tool-content">
                <h3>Make (formerly Integromat)</h3>
                <p className="tool-description">Powerful visual automation platform with advanced features. Ideal for complex workflows and businesses that need more flexibility.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Complex automations, visual workflow design</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $0/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes (limited)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-category section" id="design-visual">
        <div className="container">
          <div className="category-header">
            <div className="category-icon">
              <img src="/images/1ACBE98E-E393-4164-827E-19C62021F03F.png" alt="Design and Visual Elements" />
            </div>
            <div className="category-title">
              <h2>Design and Visual Elements</h2>
              <p>Create professional visuals and designs without graphic design skills</p>
            </div>
          </div>
          
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="Canva Pro" />
              </div>
              <div className="tool-content">
                <h3>Canva Pro</h3>
                <p className="tool-description">User-friendly design platform with templates for social media, presentations, marketing materials, and more. Essential for creating professional visuals.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Social media graphics, presentations, marketing materials</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $12.99/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes (limited)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://www.canva.com/pro/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-category section bg-light" id="marketing-distribution">
        <div className="container">
          <div className="category-header">
            <div className="category-icon">
              <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="Marketing and Distribution" />
            </div>
            <div className="category-title">
              <h2>Marketing and Distribution</h2>
              <p>Promote your content and products across multiple channels</p>
            </div>
          </div>
          
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="Tailwind" />
              </div>
              <div className="tool-content">
                <h3>Tailwind</h3>
                <p className="tool-description">Social media scheduling and analytics platform specialized for Pinterest and Instagram. Perfect for visual content marketing.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Pinterest marketing, Instagram scheduling</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $9.99/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Limited trial</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://www.tailwindapp.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/0E458A29-F846-44EE-B55E-FC9E1CE8F04F.png" alt="ConvertKit" />
              </div>
              <div className="tool-content">
                <h3>ConvertKit</h3>
                <p className="tool-description">Email marketing platform designed for creators and digital entrepreneurs. Excellent for building and nurturing your email list.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Email marketing, audience segmentation</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $0/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes (up to 1,000 subscribers)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://convertkit.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-category section" id="additional-tools">
        <div className="container">
          <div className="category-header">
            <div className="category-icon">
              <img src="/images/C52DC437-8702-4EA7-BBC1-8DBCC1132165.png" alt="Additional Recommended Tools" />
            </div>
            <div className="category-title">
              <h2>Additional Recommended Tools</h2>
              <p>More specialized tools to enhance your business automation</p>
            </div>
          </div>
          
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/1ACBE98E-E393-4164-827E-19C62021F03F.png" alt="Teachable" />
              </div>
              <div className="tool-content">
                <h3>Teachable</h3>
                <p className="tool-description">Platform for creating and selling online courses. Perfect for knowledge entrepreneurs and coaches.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Online courses, digital products</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $29/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">No</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://teachable.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="Airtable" />
              </div>
              <div className="tool-content">
                <h3>Airtable</h3>
                <p className="tool-description">Flexible database tool that combines the power of a database with the simplicity of a spreadsheet. Great for organizing information and processes.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Project management, content calendars, CRM</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $0/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://airtable.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="Loom" />
              </div>
              <div className="tool-content">
                <h3>Loom</h3>
                <p className="tool-description">Video messaging tool for creating quick screen recordings and tutorials. Excellent for team communication and client instructions.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Screen recordings, tutorials, team communication</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $0/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes (limited)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://www.loom.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-logo">
                <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="Calendly" />
              </div>
              <div className="tool-content">
                <h3>Calendly</h3>
                <p className="tool-description">Scheduling automation platform that eliminates the back-and-forth emails when setting up meetings. Essential for service-based businesses.</p>
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-label">Best For:</span>
                    <span className="feature-value">Appointment scheduling, meeting management</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Price:</span>
                    <span className="feature-value">From $0/month</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Free Plan:</span>
                    <span className="feature-value">Yes (limited)</span>
                  </div>
                </div>
                <div className="tool-cta">
                  <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="button button-secondary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="toolkit-cta section bg-light">
        <div className="container">
          <div className="toolkit-content">
            <div className="toolkit-image">
              <img src="/images/B4FCA06F-75EC-470C-899D-7A7511DC1A81.png" alt="SmartStacks AI Toolkit" />
            </div>
            <div className="toolkit-text">
              <h2>Get Our Free SmartStacks AI Toolkit</h2>
              <p>Want more detailed information about these tools and how to use them together? Download our free SmartStacks AI Toolkit for:</p>
              <ul className="toolkit-features">
                <li>Detailed reviews of each tool</li>
                <li>Integration guides and automation recipes</li>
                <li>Cost comparison and ROI calculators</li>
                <li>Exclusive discount codes</li>
                <li>Implementation checklists</li>
              </ul>
              <form className="toolkit-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="button button-primary">Get Free Access</button>
              </form>
              <p className="form-disclaimer">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="implementation-section section">
        <div className="container">
          <div className="section-header">
            <h2>Need Help Implementing These Tools?</h2>
            <p>We offer consultancy services to help you select, set up, and integrate the right tools for your business</p>
          </div>
          
          <div className="implementation-content">
            <div className="implementation-services">
              <div className="service">
                <div className="service-icon">🔍</div>
                <div className="service-details">
                  <h3>Tool Selection Consultation</h3>
                  <p>Get personalized recommendations based on your specific business needs and budget.</p>
                </div>
              </div>
              
              <div className="service">
                <div className="service-icon">⚙️</div>
                <div className="service-details">
                  <h3>Setup and Configuration</h3>
                  <p>We'll help you set up and configure your tools for optimal performance.</p>
                </div>
              </div>
              
              <div className="service">
                <div className="service-icon">🔄</div>
                <div className="service-details">
                  <h3>Integration and Automation</h3>
                  <p>Connect your tools and create automated workflows that save you time and reduce errors.</p>
                </div>
              </div>
              
              <div className="service">
                <div className="service-icon">👩‍🏫</div>
                <div className="service-details">
                  <h3>Training and Support</h3>
                  <p>Learn how to use your tools effectively with personalized training sessions.</p>
                </div>
              </div>
            </div>
            
            <div className="implementation-cta">
              <Link to="/contact" className="button button-primary">Book a Consultation</Link>
              <Link to="/products#consultancy" className="button button-outline">View Consultancy Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our tool recommendations</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <span>Do you receive commissions for these recommendations?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Yes, we are affiliates for many of the tools we recommend and may receive a commission if you purchase through our links. However, this doesn't influence our recommendations—we only suggest tools we genuinely believe in and use ourselves.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>How do you select which tools to recommend?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>We have a rigorous selection process that evaluates tools based on ease of use, reliability, value for money, integration capabilities, customer support, and long-term viability. We personally test each tool and often implement them for our clients before recommending them.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>What if a tool doesn't work for my business?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Most of the tools we recommend offer free trials or money-back guarantees, allowing you to test them risk-free. If you're unsure which tool is right for your specific needs, we offer consultancy services to help you make the best choice.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <span>Do I need all these tools?</span>
                <span>+</span>
              </div>
              <div className="faq-answer">
                <p>Definitely not! We recommend starting with just 1-3 tools that address your most pressing needs. Our free SmartStacks AI Toolkit includes guidance on which tools to prioritize based on your business type and stage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to automate your business?</h2>
            <p>Get started with our recommended tools or book a consultation for personalized guidance.</p>
            <div className="cta-buttons">
              <a href="#toolkit-cta" className="button button-secondary">Get Free Toolkit</a>
              <Link to="/contact" className="button button-outline">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;
