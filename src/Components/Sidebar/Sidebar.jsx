import React from "react";
import { Link } from "react-router-dom"; // Assumes you are using react-router-dom
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Profile', path: '/profile' },
    { name: 'Photos', path: '/UserImages' }
  ];

  return (
    <div className="sidebar-container">      
      <nav>
        <ul className="sidebar-list">
          {navItems.map((item, index) => (
            <li key={index} className="sidebar-item">
              <Link to={item.path} className="sidebar-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;