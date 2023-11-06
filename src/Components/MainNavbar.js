import React from "react";
import "./MainNavbar.css";
function MainNavbar() {
  return (
    <div className="main_navbar_caontainer">
      <ul>
        <li>HOME</li>
        <li>CAR LISTINGS</li>
        <li>CART</li>
        <li>ABOUT US</li>
        <li>REVIEWS</li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          name="searchcar"
          id="searchcar"
          placeholder="Search for Brands,Models.."
        />
        <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass "></i>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
