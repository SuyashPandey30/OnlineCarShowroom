import React from "react";
import "./SideNavitem.css";
function SideNavitem({ icon, heading, content }) {
  return (
    <>
      <div className="sidenavcontain">
        <i className={icon}></i>
        <div className="sidenavtext">
          <h6>{heading}</h6>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}

export default SideNavitem;
