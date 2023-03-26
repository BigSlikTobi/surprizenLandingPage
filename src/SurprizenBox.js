import React from 'react';
import './SurprizenBox.css';
import Logo from './assets/logo.png';

const SurprizenBox = () => {
  return (
    <div className="surprizen-box">
      <h2 className="surprizen-box-title">Start Your Surprizen Journey</h2>
      <div className="surprizen-box-container">
        <div className="surprizen-box-image-container">
          <img src={Logo} alt="Surprizen Box" className="surprizen-box-image" />
        </div>
        <div className="surprizen-box-text-container">
          <p className="surprizen-box-text">
            Our Surprizen Box is the perfect way to kick off your Surprizen journey. It contains a letter explaining the concept of Surprizen, along with information about the present you've chosen for your recipient. The Surprizen Box will be shipped directly to the recipient, and they'll be delighted to receive it!
          </p>
          <button className="surprizen-box-button">Order Your Surprizen Box Now</button>
        </div>
      </div>
    </div>
  );
};

export default SurprizenBox;
