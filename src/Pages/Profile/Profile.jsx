import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Navbar from '../../Components/Navbar/Navbar';
import './Profile.css'
import Footer from '../../Components/Footer/Footer';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p> No User Found. Please login first. </p>;
  
  return (
    <div className='container-fluid profile-bg-img'>
      <Navbar />

      <br/> <br/> <br/>

      <div className='row'>
        <div className='col-sm-4'></div>

        <div className='col-sm-4 mt-3'>
          <h3 className='alert alert-info border text-center'> Profile </h3>

          <div className='card'>
            {user.image &&
              (<img src={user.image} className='profile-image' />)
            }

            <div className='card-body'>
              <h4 className='card-title'> Name: {user.name} </h4>
              <p className='card-text'>
                Email: {user.email} <br />
                Password: {user.password}
              </p>
            </div>
          </div>

        </div>
        <div className='col-sm-4'></div>
      </div>

      <br/> <br/> <br/>

      <Footer />
    </div>
  );
};

export default Profile;


