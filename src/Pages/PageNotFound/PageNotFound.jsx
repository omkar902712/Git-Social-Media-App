import React from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css';

const PageNotFound=()=>{

  return(
    <div className="msg">
      <h1>404 - Page Not Found </h1>
      <h2>The page you are looking for does not exist.</h2>

      <p>Please check the URL and try again.</p>
      
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default PageNotFound;