import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column about">
          <h3> Social Media App </h3>
          <p>Building modern web experiences with clean code and beautiful design.</p>
        </div>

        <div className="footer-column links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/home" className="nav-link">
                Home
              </Link>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <Link to="" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h4>Stay Updated</h4>
          <form className="row">
            <div className="col-12">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Social Media App. All rights reserved.</p>
      </div>
    </footer>

  );
};

export default Footer;