import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <section className="page-header bg-primary">
        <div className="container">
          <h1>Blog</h1>
          <p>Automation tips, strategies, and insights to help your business grow</p>
        </div>
      </section>

      <section className="blog-content section">
        <div className="container">
          <div className="blog-grid">
            {/* Featured Post */}
            <div className="blog-post featured-post">
              <div className="post-image">
                <img src="/images/IMG_6393.png" alt="5 AI Tools That Will Transform Your Business" />
              </div>
              <div className="post-content">
                <div className="post-category">Automation</div>
                <h2 className="post-title">5 AI Tools That Will Transform Your Business</h2>
                <p className="post-excerpt">Discover how these powerful AI tools can automate your workflows, enhance customer experiences, and drive growth without requiring technical expertise.</p>
                <div className="post-meta">
                  <span className="post-date">May 25, 2025</span>
                  <span className="post-read-time">8 min read</span>
                </div>
                <Link to="/blog/ai-tools-transform-business" className="button button-secondary">Read More</Link>
              </div>
            </div>
            
            {/* Regular Posts */}
            <div className="blog-post">
              <div className="post-image">
                <img src="/images/0E458A29-F846-44EE-B55E-FC9E1CE8F04F.png" alt="How to Create Your First Automation in 30 Minutes" />
              </div>
              <div className="post-content">
                <div className="post-category">Tutorials</div>
                <h3 className="post-title">How to Create Your First Automation in 30 Minutes</h3>
                <p className="post-excerpt">A step-by-step guide to setting up your first business automation, even if you have zero technical experience.</p>
                <div className="post-meta">
                  <span className="post-date">May 18, 2025</span>
                  <span className="post-read-time">5 min read</span>
                </div>
                <Link to="/blog/first-automation-30-minutes" className="read-more">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-post">
              <div className="post-image">
                <img src="/images/C52DC437-8702-4EA7-BBC1-8DBCC1132165.png" alt="The ROI of Automation: Calculate Your Time Savings" />
              </div>
              <div className="post-content">
                <div className="post-category">Strategy</div>
                <h3 className="post-title">The ROI of Automation: Calculate Your Time Savings</h3>
                <p className="post-excerpt">Learn how to measure the return on investment for your automation efforts and prioritize which processes to automate first.</p>
                <div className="post-meta">
                  <span className="post-date">May 12, 2025</span>
                  <span className="post-read-time">6 min read</span>
                </div>
                <Link to="/blog/roi-automation-time-savings" className="read-more">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-post">
              <div className="post-image">
                <img src="/images/1ACBE98E-E393-4164-827E-19C62021F03F.png" alt="7 Signs Your Business Needs Automation Now" />
              </div>
              <div className="post-content">
                <div className="post-category">Business Growth</div>
                <h3 className="post-title">7 Signs Your Business Needs Automation Now</h3>
                <p className="post-excerpt">Recognize the warning signs that manual processes are holding your business back from scaling effectively.</p>
                <div className="post-meta">
                  <span className="post-date">May 5, 2025</span>
                  <span className="post-read-time">7 min read</span>
                </div>
                <Link to="/blog/signs-business-needs-automation" className="read-more">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-post">
              <div className="post-image">
                <img src="/images/09D37FC5-A2BD-4C82-BB5C-131C87C6C582.png" alt="Zapier vs. Make: Which Automation Platform Is Right for You?" />
              </div>
              <div className="post-content">
                <div className="post-category">Tool Comparison</div>
                <h3 className="post-title">Zapier vs. Make: Which Automation Platform Is Right for You?</h3>
                <p className="post-excerpt">A detailed comparison of two leading automation platforms to help you choose the best option for your specific needs.</p>
                <div className="post-meta">
                  <span className="post-date">April 28, 2025</span>
                  <span className="post-read-time">9 min read</span>
                </div>
                <Link to="/blog/zapier-vs-make-comparison" className="read-more">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-post">
              <div className="post-image">
                <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="Automation Ethics: Balancing Efficiency and the Human Touch" />
              </div>
              <div className="post-content">
                <div className="post-category">Insights</div>
                <h3 className="post-title">Automation Ethics: Balancing Efficiency and the Human Touch</h3>
                <p className="post-excerpt">Exploring when to automate and when to keep the human element in your business processes for optimal customer experience.</p>
                <div className="post-meta">
                  <span className="post-date">April 21, 2025</span>
                  <span className="post-read-time">8 min read</span>
                </div>
                <Link to="/blog/automation-ethics-human-touch" className="read-more">Read More →</Link>
              </div>
            </div>
          </div>
          
          <div className="blog-pagination">
            <span className="current-page">1</span>
            <Link to="/blog/page/2" className="page-number">2</Link>
            <Link to="/blog/page/3" className="page-number">3</Link>
            <Link to="/blog/page/2" className="next-page">Next →</Link>
          </div>
        </div>
      </section>

      <section className="blog-categories section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Categories</h2>
            <p>Browse articles by topic</p>
          </div>
          
          <div className="categories-grid">
            <Link to="/blog/category/automation" className="category-card">
              <div className="category-icon">🤖</div>
              <h3>Automation</h3>
              <p>12 articles</p>
            </Link>
            
            <Link to="/blog/category/ai-tools" className="category-card">
              <div className="category-icon">🧠</div>
              <h3>AI Tools</h3>
              <p>8 articles</p>
            </Link>
            
            <Link to="/blog/category/tutorials" className="category-card">
              <div className="category-icon">📚</div>
              <h3>Tutorials</h3>
              <p>15 articles</p>
            </Link>
            
            <Link to="/blog/category/business-growth" className="category-card">
              <div className="category-icon">📈</div>
              <h3>Business Growth</h3>
              <p>10 articles</p>
            </Link>
            
            <Link to="/blog/category/tool-reviews" className="category-card">
              <div className="category-icon">⚙️</div>
              <h3>Tool Reviews</h3>
              <p>9 articles</p>
            </Link>
            
            <Link to="/blog/category/strategy" className="category-card">
              <div className="category-icon">🎯</div>
              <h3>Strategy</h3>
              <p>7 articles</p>
            </Link>
          </div>
        </div>
      </section>

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

export default BlogPage;
