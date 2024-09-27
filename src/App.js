import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skiils";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <LandingPage />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
