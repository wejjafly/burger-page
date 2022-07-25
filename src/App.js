import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Logos from "./components/Logos/Logos";
import Ads from "./components/Ads/Ads";
function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Slider />
        <Logos />
        <Ads />
      </div>
    </>
  );
}

export default App;
