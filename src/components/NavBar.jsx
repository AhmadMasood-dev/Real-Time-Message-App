import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="logo"
        />
        <span>Zain</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default NavBar;
