import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import Sidebar from '../../Components/Sidebar/Sidebar'; // Import Sidebar
import Footer from '../../Components/Footer/Footer';

import './Profile.css';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p className="text-center mt-5"> No User Found. Please login first. </p>;

  return (
    <div className='container-fluid '>

      <div className='row'>
        <div className='col-sm-2'>
          <Sidebar />
        </div>

        <div className='col-sm-10 profile_column'>
          <div className='row justify-content-center'>
            <div className='col-md-6 border mt-4'>
              <h3 className='alert alert-info border text-center'> Profile </h3>

              <div className='card shadow-sm mb-4'>
                {user.image && (
                  <img src={user.image} className='card-img-top profile-image' alt="Profile" />
                )}

                <div className='card-body'>
                  <h4 className='card-title'> Name: {user.name} </h4>
                  <div className='card-text'>
                    <strong>Email:</strong> {user.email} <br />
                    <strong>Password:</strong> {user.password}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer spans the full width */}
      <div className='row'>
        <div className="col-12 p-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;