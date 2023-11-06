import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Contact Info</h2>
        <h4>Email: example@email.com</h4>
        <h4>Phone: 123-456-7890</h4>
      </div>
      <div className="footer-section">
        <h2>Useful Links</h2>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CAR LISTINGS</li>
          <li>CART</li>
          <li>REVIEW</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Login Now</h2>
        <h5>If you have an account, you can log in here.</h5>
        <button className='btn btn-outline btn-dark'>SignIn</button>
      </div>
    </footer>
  );
};

export default Footer;
