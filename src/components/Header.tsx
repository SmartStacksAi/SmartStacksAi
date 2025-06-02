import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="/images/67F4BEA6-4906-4B3C-976D-90AED2CD74B7.png" alt="SmartStacks AI Logo" />
            </Link>
          </div>
          
          <button className="mobile-menu-button" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
          
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
              <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/tools" onClick={() => setIsMenuOpen(false)}>Tools</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
