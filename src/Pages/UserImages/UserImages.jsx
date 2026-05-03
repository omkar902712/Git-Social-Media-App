import React, { useEffect, useState } from 'react';
import './UserImages.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';

const UserImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // This runs automatically when the component loads
    const data = JSON.parse(localStorage.getItem('image')) || [];
    console.log('Fetched images from localStorage:', data); // Debugging log
    setImages(data);
  }, []); // Empty dependency array means it runs once

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-2'>
          <Sidebar />
        </div>

        <div className='col-sm-10 images-container'>
          <h2> All images </h2>

          {images.length === 0 ? (
            <p> No Images Found In Local Storage.</p>
          ) : (
            <div className='grid'>
              {images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`User upload ${index}`} 
                  style={{ width: '200px', margin: '10px' }} // Added basic styling
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='row'>
        <Footer />
      </div>
    </div>
  );
};

export default UserImages;