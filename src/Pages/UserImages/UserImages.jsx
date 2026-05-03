import React, { useEffect, useState } from 'react';
import './UserImages.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const UserImages = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Get all data from local storage (stored as a JSON string)

    const saveImages = localStorage.getItem('userImages');

    if (saveImages) {
      //2. Parse it back into a JavScript array
      setImages(JSON.parse(saveImages));
    }
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-2'>
          <Sidebar />
        </div>

        <div className='col-sm-10 text-center images-container'>
          <h2> All images </h2>

          {images.length === 0 ?
            (<p> No Images Found In Local Storages.</p>) :
            (<div className='gird'>
              {images.map((item, index) => (
                <img key={index}
                  src={item}
                  alt={`Stored local ${index}`}

                />
              ))}
            </div>)}

        </div>
      </div>

      <div className='row'>
        <Footer />
        <div className='col-sm-12 p-0'>

        </div>
      </div>

    </div>
  );
};

export default UserImages;  
