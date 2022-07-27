// Import components
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./components/Home"

function App() {
  // URL should have heroku URL from backend.
  const URL = "https://chyannerobbins.herokuapp.com/";

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
