import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App h-screen bg-black">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
