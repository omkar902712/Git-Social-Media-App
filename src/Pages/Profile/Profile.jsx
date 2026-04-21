import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Navbar from '../../Components/Navbar/Navbar';
import './Profile.css'

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p> No User Found. Please login first. </p>;

  return (
    <div className='container-fluid'>
      <Navbar />

      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 border mt-3 bg-success'>
          <h1 className='alert alert-info'> Profile </h1>

          {/* Details */}
          <div className='details'>
            <h3> Name: {user.name} </h3>
            <h4> Email: {user.email} </h4>
            <h4> Password: {user.password} </h4>            

            {user.image && (
              <img src={user.image} className='profile-image' />
            )}
          </div>
        </div>
        <div className='col-sm-3'></div>
      </div>
    </div>
  );
};

export default Profile;


