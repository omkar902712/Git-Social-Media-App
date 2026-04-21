import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { AuthContext } from '../../Context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  // ===== old =====
  //const navigate = useNavigate();  
  
  //const { user, setUser, login, logout } = useContex(AuthContext);  

  // const handleLogout = () => {
  //   setUser(null);
  //   navigate('/');
  // };

  // ===== new =====
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout=()=>{
    localStorage.removeItem('currentUser');
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          Social Media App
        </Link>

        {/* Toggle button */}
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>         

            {user ?(
              <>
                <li className="nav-item">
                  <Link to='/profile' className='nav-link'>
                    Profile
                  </Link>
                </li>

                {/* Image */}
                <li>
                  {user.image && (
                    <img src={user.image} className='img' />
                  )}
                </li>

                <li className="nav-item">
                  <span className="nav-link"> {user.name} </span>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-danger btn-sm"> Logout </button>
                </li>
              </>
            ):(
              <li className="nav-item">
                <Link to='/' className='nav-link'> Login </Link>
              </li>
            )}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;