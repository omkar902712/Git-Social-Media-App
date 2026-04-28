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
        {/* Social Media App And Logo */}
        <div className='row'>
          <div className='col-sm-4'>
            <div className="footer-column">
              <h3> Social Media App </h3>
              <p>Building modern web experiences with clean code and beautiful design.</p>
            </div>
          </div>

          <div className='col-sm-5'> </div>

          <div className='col-sm-3'>
            <Link>
              <img src={footer_fb} alt="Facebook Logo" className='footer_logo' />
            </Link>

            <Link>
              <img src={footer_insta} alt="Insta Logo" className='footer_logo' />
            </Link>

            <Link>
              <img src={footer_twitter} alt="Twitter Logo" className='footer_logo' />
            </Link>
          </div>
        </div>        

        {/* Resources, Pricing, Comapny, Social */}
        <div className='row'>

          <div className='col-sm-3'>
            <div className="footer-column links">
              <h4> Resources </h4>
              <ul>
                <li>
                  <Link to="" className="nav-link">
                    Application
                  </Link>

                  <Link to="" className="nav-link">
                    Documentation
                  </Link>

                  <Link to="" className="nav-link"> Sytem </Link>

                  <Link to="" className="nav-link"> FAQ </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-3'>
            <div className="footer-column links">
              <h4> Pricing </h4>
              <ul>
                <li>
                  <Link to="" className="nav-link">
                    Overwiew
                  </Link>
                  <Link to="" className="nav-link">
                    Premium Plans
                  </Link>
                  <Link to="" className="nav-link">
                    Affilate Program
                  </Link>
                  <Link to="" className="nav-link">
                    Promotions  
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-3'>
            <div className="footer-column links">
              <h4>Comapny</h4>
              <ul>
                <li>
                  <Link to="" className="nav-link">
                    About Us
                  </Link>
                  <Link to="" className="nav-link">
                    Blog
                  </Link>
                  <Link to="" className="nav-link">
                    Partnrship
                  </Link>                  
                  <Link to="" className="nav-link">
                    Careers
                  </Link>
                  <Link to="" className="nav-link">
                    Press
                  </Link>                
                                  
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-3'>
            <div className="footer-column links">
              <h4>Social</h4>
              <ul>
                <li>
                  <Link to="" className="nav-link">
                    Facebook
                  </Link>
                  <Link to="" className="nav-link">
                    Instragram
                  </Link>
                  <Link to="" className="nav-link">
                    Twitter
                  </Link>                  
                </li>
              </ul>
            </div>
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