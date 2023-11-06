import React from "react";
import "./Header.css";
import SideNavitem from "./SideNavitem";
function Header() {
  return (
    <>
      <div className="header_container">
        <h2>MotorMart</h2>
        <div className="right_navbar">
          <ul >
            <li>
              <SideNavitem
                icon={"fa-solid fa-envelope fa-xl"}
                heading={"24/7 Support"}
                content={"CarInCart@email.com"}
              />
            </li>
            <li>
              <SideNavitem
                icon={"fa-solid fa-phone fa-xl"}
                heading={"Contact Us"}
                content={"0-123-456-789"}
              />
            </li>
            <li>
              <SideNavitem
                icon={"fa-solid fa-cart-shopping fa-xl"}
                heading={"Add Cars"}
                content={"Review Cart"}
              />
            </li>
            <li>
              <SideNavitem
                icon={"fa-solid fa-user fa-xl"}
                heading={"Sign In"}
                content={"Login Now"}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
