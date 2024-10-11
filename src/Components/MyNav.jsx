import React from 'react';
import Design from "../assets/Design.png"
import './MyNav.css';

const MyNav = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src={Design} alt="Fashion Fits Logo" />
      </div>
      <div className="nav-title">
        <h2 style={{fontSize:"45px"}}>Fashion Fits</h2>
      </div>
    </nav>
  );
};

export default MyNav;