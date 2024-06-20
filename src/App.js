import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "rooms":
        return <Rooms />;
      case "restaurant":
        return <Restaurant />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
