import React from "react";

// Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  // URL should have heroku URL from backend.
  const URL = "https://chyannerobbins.herokuapp.com/";

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
