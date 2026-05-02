import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './Navbar.css';
import Register from '../../Pages/Register/Register';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === loginData.email && storedUser.password === loginData.password) {
      alert('Login Successful');
      login(storedUser);
      navigate('/home');
    } else {
      alert('Invalid Email & Password');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (  
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <h3 className="navbar-brand brand-logo" >SocialMedia</h3>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-center">
              {user ? (
                <>                  
                  <li className="nav-item mx-3 user-badge">
                    {user.image && <img src={user.image} alt="profile" className="nav-profile-img" />}
                    <span className="nav-username">{user.name}</span>
                  </li>
                  <li className="nav-item"><button onClick={handleLogout} className="btn-logout">Logout</button></li>
                </>
              ) : (
                <form className="d-flex align-items-start mt-3" onSubmit={handleLogin}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control me-2 login-input-group" // Added class here
                    onChange={handleChange}
                    required
                  />

                  {/* Added class here to the container */}
                  <div className="d-flex flex-column me-2 login-input-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                    <Link to="/forgotpassword" className="forgotPasswordLink">
                      Forgot Password?
                    </Link>
                  </div>

                  <button type="submit" className="btn btn-success">Login</button>
                </form>
              )}
            </ul>
          </div>
        </div>
      </nav>      
   
  );
};

export default Navbar;