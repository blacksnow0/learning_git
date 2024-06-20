import React from "react";

const Navbar = ({ setActiveSection }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setActiveSection("home")}>Home</li>
        <li onClick={() => setActiveSection("rooms")}>Rooms</li>
        <li onClick={() => setActiveSection("restaurant")}>Restaurant</li>
        <li onClick={() => setActiveSection("about")}>About</li>
        <li onClick={() => setActiveSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
