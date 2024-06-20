import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <section id="home">
          <Home />
        </section>
        <section id="rooms">
          <Rooms />
        </section>
        <section id="restaurant">
          <Restaurant />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
