import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container">
        {/* Brand with a modern gradient feel */}
        <Link className="navbar-brand brand-logo" to="/">
          <span className="logo-dot"></span> SocialMedia
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link nav-effect" to="/home">Home</Link>
            </li>         

            {user ? (
              <>
                <li className="nav-item">
                  <Link to='/profile' className='nav-link nav-effect'>Profile</Link>
                </li>

                <li className="nav-item d-flex align-items-center mx-lg-3 user-badge">
                  {user.image && (
                    <img src={user.image} alt="profile" className='nav-profile-img' />
                  )}
                  <span className="nav-username">{user.name}</span>
                </li>

                <li className="nav-item">
                  <button onClick={handleLogout} className="btn-logout">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to='/' className='btn-login'> Login </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;