import React, { useState } from 'react';
import "./FotgotPassword.css";

import { useNavigate } from 'react-router-dom';

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
    <div className='container-fluid forgot-password-bg-img'>
      <div className='row'>
        <div className='col-sm-4'> </div>

        <div className='col-sm-4 text-center'>
          <div className='form form-container mt-5'>
            <form onSubmit={handleReset}>
              <h4 className='alert alert-success mt-2'>
                Forgot Password
              </h4>

              <input type="email" placeholder='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />

              <br /> <br />

              <input type="password" placeholder='New Password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required />

              <br /> <br />

              <input type="password"
                placeholder='Confirm New Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required />

              <br /> <br />

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
    </div>
  );
};

export default ForgotPassword;