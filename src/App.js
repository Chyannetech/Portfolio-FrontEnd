// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have heroku URL from backend.
  const URL = "https://chyannerobbins.herokuapp.com/";

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
