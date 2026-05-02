import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
//import styles from './Login.module.scss';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(localStorage.getItem('user'));
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    if (user &&
      user.email == loginData.email &&
      user.password == loginData.password) {
      alert('Login Successful');
      login(user);
      navigate('/home');
    }
    else {
      alert("Invalid Email & Password");
    }
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-sm-4'></div>

        <div className='col-sm-4 mt-5'>
          {isLogin &&
            <form onSubmit={handleLogin} className='form-container'>
              <h4 className="alert alert-info"> User Login </h4>

              <input type="email" name="email"
              className='input_email'
                placeholder='Email'
                onChange={handleChange}
                required />

              <br /> <br />

              <input type="password" name="password"    
              className='input_password'
              placeholder='Password'              
              onChange={handleChange} required />

              <br /> <br />

              <Link to='/forgotpassword'>Forgot Password</Link>

              <br /> <br />

              <button type="submit" className="btn btn-success">Login</button>

              <br /> <br />

              <p>
                Not a member ?
                <Link to='/register'> Register </Link>
              </p>
            </form>
          }
        </div>

        <div className='col-sm-4'></div>
      </div>

      
    </div>
  );
};

export default Login;