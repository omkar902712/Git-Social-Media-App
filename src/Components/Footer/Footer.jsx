import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// import images
import footer_fb from '../../assets/Images/Footer/footer_fb.jpg';
import footer_twitter from '../../assets/Images/Footer/footer_twitter.png';
import footer_insta from '../../assets/Images/Footer/footer_insta.jpg';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">        
        {/* Top Section: Branding and Social Icons */}
        <div className='footer-row top-row'>
          <div className='footer-brand'>
              <h3>Social Media App</h3>
              <p>Building modern web experiences with clean code and beautiful design.</p>
          </div>

          <div className='footer-social-icons'>
            <Link to=""><img src={footer_fb} alt="Facebook" className='footer_logo' /></Link>
            <Link to=""><img src={footer_insta} alt="Instagram" className='footer_logo' /></Link>
            <Link to=""><img src={footer_twitter} alt="Twitter" className='footer_logo' /></Link>
          </div>
        </div>        

        <hr className="footer-divider" />

        {/* Middle Section: Links Grid */}
        <div className='footer-row links-grid'>
          <div className='footer-column'>
            <h4>Resources</h4>
            <ul>
              <li><Link to="" className="nav-link">Application</Link></li>
              <li><Link to="" className="nav-link">Documentation</Link></li>
              <li><Link to="" className="nav-link">System</Link></li>
              <li><Link to="" className="nav-link">FAQ</Link></li>
            </ul>
          </div>

          <div className='footer-column'>
            <h4>Pricing</h4>
            <ul>
              <li><Link to="" className="nav-link">Overview</Link></li>
              <li><Link to="" className="nav-link">Premium Plans</Link></li>
              <li><Link to="" className="nav-link">Affiliate Program</Link></li>
              <li><Link to="" className="nav-link">Promotions</Link></li>
            </ul>
          </div>

          <div className='footer-column'>
            <h4>Company</h4>
            <ul>
              <li><Link to="" className="nav-link">About Us</Link></li>
              <li><Link to="" className="nav-link">Blog</Link></li>
              <li><Link to="" className="nav-link">Partnership</Link></li>
              <li><Link to="" className="nav-link">Careers</Link></li>
              <li><Link to="" className="nav-link">Press</Link></li>
            </ul>
          </div>

          <div className='footer-column'>
            <h4>Social</h4>
            <ul>
              <li><Link to="" className="nav-link">Facebook</Link></li>
              <li><Link to="" className="nav-link">Instagram</Link></li>
              <li><Link to="" className="nav-link">Twitter</Link></li>
            </ul>
          </div>
        </div>
      </div>        

      <div className="footer-bottom">
        <p>&copy; 2026 Social Media App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;