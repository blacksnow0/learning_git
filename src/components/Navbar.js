import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleMenuClick}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li
          onClick={() => {
            setActiveSection("home");
            setIsOpen(false);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            setActiveSection("rooms");
            setIsOpen(false);
          }}
        >
          Rooms
        </li>
        <li
          onClick={() => {
            setActiveSection("restaurant");
            setIsOpen(false);
          }}
        >
          Restaurant
        </li>
        <li
          onClick={() => {
            setActiveSection("about");
            setIsOpen(false);
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            setActiveSection("contact");
            setIsOpen(false);
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
