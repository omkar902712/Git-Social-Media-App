import React, { useState } from 'react';
import "./FotgotPassword.css";

import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const ForgotPassword = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState({ text: '', type: '' });

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage({ text: 'Please enter your email address.', type: 'error' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({
        text: 'Passwords do not match!',
        type: 'error'
      });
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email) {
      user.password = newPassword;
      localStorage.setItem('user', JSON.stringify(user));

      setMessage({ text: 'Password updated! Redirecting to login.', type: 'success' });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setMessage({ text: 'User not found with this email.', type: 'error' });
    }
  };

  return (
    <div className='container-fluid form_bg'>
      <div className='row'>
        <Navbar />
      </div>

      <div className='row mt-5'>
        <div className='col-sm-4'> </div>

        <div className='col-sm-4 text-center'>
          <div className='form form-container border'>
            <form onSubmit={handleReset}>
              <h4 className='alert alert-success'>
                Forgot Password
              </h4>

              <input type="email" placeholder='Enter Your Email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />

              <br />

              <input type="password" placeholder='New Password'
                className='form-control'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required />

              <br />

              <input type="password"
                placeholder='Confirm New Password'
                className='form-control'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required />

              <br />

              <button type="submit" className='btn btn-success'>
                Update Password
              </button>

              <br /> <br />

              {/* Message */}
              <div>
                {message.text && (
                  <p className={`message ${message.type === 'error' ? 'message-error' : 'message-success'}`}>
                    {message.text}
                  </p>
                )}
              </div>

            </form>
          </div>
        </div>

        <div className='col-sm-4'> </div>
      </div>

      <div className='row mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default ForgotPassword;