import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="menu-icon">&#9776;</div>
      <ul className="nav-links">
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("rooms")}>Rooms</li>
        <li onClick={() => handleScroll("restaurant")}>Restaurant</li>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
