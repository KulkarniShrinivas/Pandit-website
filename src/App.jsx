import "./App.css";
import PopularServices from "./components/popular-services/popular-services";
import AboutUs from "./components/AboutUs/AboutUs";
import Cards from "./components/card-list/index";

function App() {
  return (
    <div className="app">
      {/* <PopularServices /> */}
      <Cards />
      {/* <AboutUs /> */}
    </div>
  );
}

export default App;
