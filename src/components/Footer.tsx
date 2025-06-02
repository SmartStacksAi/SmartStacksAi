import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/ED49A47A-ADB6-4AA5-BAC4-157564DE5309.png" alt="SmartStacks AI Logo" />
            <p>Tech tools to work less and grow more</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Products</h3>
              <ul>
                <li><Link to="/products">All Products</Link></li>
                <li><Link to="/products/automation-blueprint">Automation Blueprint</Link></li>
                <li><Link to="/tools">Tools We Love</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="https://pinterest.com/smartstacksai" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                <li><a href="https://instagram.com/smartstacksai" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Legal</h3>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SmartStacks AI. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://pinterest.com/smartstacksai" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <span className="social-icon">📌</span>
            </a>
            <a href="https://instagram.com/smartstacksai" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="social-icon">📷</span>
            </a>
            <a href="mailto:hello@smartstacksai.com" aria-label="Email">
              <span className="social-icon">✉️</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
