import React, { useState } from 'react';
import "./FotgotPassword.css";

import { Link, useNavigate } from 'react-router-dom';

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
      setMessage({ text: 'Passwords do not match!',
      type: 'error' });
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email) {
      user.password = newPassword;
      localStorage.setItem('user', JSON.stringify(user));

      setMessage({text : 'Password updated! Redirecting to login.', type:'success'});

      setTimeout(()=>{
        navigate('/');
      },2000);
    } else {
      setMessage({text : 'User not found with this email.', type:'error'});
    }
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <form onSubmit={handleReset}>
          <div className='alert alert-success'>
            <h4 className='mt-2'> Forgot Password </h4>
          </div>

          <input type="email" placeholder='Enter Your Email' required
            value={email} onChange={(e) => setEmail(e.target.value)}
            
          />

          <br /> <br />

          <input type="password" placeholder='New Password' required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          
          />

          <br /> <br />

          <input type="password" required
            placeholder='Confirm New Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
           
          />

          <br /> <br />

          <button type="submit" className='btn btn-success'>
            Update Password
          </button>

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
  );
};

export default ForgotPassword;