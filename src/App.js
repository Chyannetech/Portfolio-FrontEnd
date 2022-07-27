// Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  // URL should have heroku URL from backend.
  const URL = "https://chyannerobbins.herokuapp.com/";

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
