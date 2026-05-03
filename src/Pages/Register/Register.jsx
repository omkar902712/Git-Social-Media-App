import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './Register.css';

import Footer from '../../Components/Footer/Footer';

import leftSideHomeImg from '../../assets/Images/Register/Register_Left_Side_Image.png';

const Register = () => {

  const navigate = useNavigate();

  // File Input Ref
  const fileInputRef = useRef(null);

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

    // Image Upload Validation
    if (e.target.name === 'image') {

      const file = e.target.files[0];

      if (!file) return;

      // Allowed Image Types
      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp'
      ];

      // Check File Type
      if (!allowedTypes.includes(file.type)) {

        alert('Only JPG, JPEG, PNG and WEBP images are allowed!');

        // Clear File Input
        e.target.value = '';

        return;
      }

      setImageLoading(true);

      const reader = new FileReader();

      reader.onloadend = () => {

        setData((prev) => ({
          ...prev,
          image: reader.result
        }));

        setImageLoading(false);
      };

      reader.readAsDataURL(file);

    } else {

      setData({
        ...data,
        [e.target.name]: e.target.value
      });
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    // Image Loading Validation
    if (imageLoading) {
      alert('Image is loading... Please wait!');
      return;
    }

    // Empty Fields Validation
    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      alert('Please fill all fields!');
      return;
    }

    // Image Required Validation
    if (!data.image) {
      alert('Please upload image!');
      return;
    }

    // Password Match Validation
    if (data.password !== data.confirmPassword) {
      alert('Password does not match!');
      return;
    }

    // Save User Data
    localStorage.setItem('user', JSON.stringify(data));

    // Success Message
    alert('Registration Successful!');

    // Reset State
    setData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      image: ''
    });

    // Reset File Input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    // Navigate
    navigate('/');
  };

  return (

    <div className="container-fluid">

      <div className="container-fluid">

        <div className="row">
          {/* Left Side Image */}
          <div className="col-sm-6">
            <img src={leftSideHomeImg} alt="Register"
              className="register-left-side-image" />
          </div>

          {/* Register Form */}
          <div className="col-sm-6">
            <form
              className="form-group text-center"
              onSubmit={handleSubmit}
            >

              <h4 className="alert alert-success">
                Register
              </h4>

              {/* Name */}
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                value={data.name}
                onChange={handleChange}
                required
              />

              <br />

              {/* Email */}
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                value={data.email}
                onChange={handleChange}
                required
              />

              <br />

              {/* Password */}
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                value={data.password}
                onChange={handleChange}
                required
              />

              <br />

              {/* Confirm Password */}
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChange={handleChange}
                required
              />

              <br />

              {/* Image Upload */}
              <input
                type="file"
                name="image"
                accept=".jpg, .jpeg, .png, .webp"
                className="form-control"
                onChange={handleChange}
                ref={fileInputRef}
                required
              />

              <br />

              {/* Image Preview */}
              {
                data.image && (
                  <img
                    src={data.image}
                    alt="Preview"
                    width="100"
                    height="100"
                  />
                )
              }

              {/* Register Button */}
              <button
                type="submit"
                className="btn btn-success"
              >
                Register
              </button>

            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="row mt-3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Register;