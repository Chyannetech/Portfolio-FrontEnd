// Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Work";

function App() {
  // URL should have heroku URL from backend.
  const URL = "https://chyannerobbins.herokuapp.com/";

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
