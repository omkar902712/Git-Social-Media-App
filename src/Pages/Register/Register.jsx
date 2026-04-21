import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: ''
  });

  const [imageLoading, setImageLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      if (file) {
        setImageLoading(true);
        const reader = new FileReader();

        reader.onloadend = () => {
          setData(prev => ({
            ...prev,
            image: reader.result
          }));
          setImageLoading(false);
        };

        reader.readAsDataURL(file);
      }
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value
      });
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageLoading) {
      alert("Image is loading, please wait.");
      return;
    }

    if (!data.name || !data.email ||
      !data.password || !data.confirmPassword) {
        alert("Fill All");
        return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Password Not Match...!");
      return;
    }

    // Save user data
    localStorage.setItem('user', JSON.stringify(data));

    alert("Registration Successful!");
    navigate('/');
  };

  return (
    <div className="container">
      <div className="form-container">

        {/* Form */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="alert alert-success">
            <h4> Registration </h4>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={data.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={handleChange}
            required
          />

          <input type="file" name="image" onChange={handleChange} />

          {data.image && <img src={data.image} wdith="50" />}

          <button type="submit">Register</button>

          <br /> <br />

          <p> Existing User ?
            <Link to='/'> Login </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;