import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import PhotoGallery from "./pages/photo-gallery/index";
import ContactUs from "./pages/contact-us/index";
import Astrologer from "./pages/astrologer/index";
import AllPujas from "./pages/all-pujas";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allpujas" element={<AllPujas />} />
          <Route path="/photos" element={<PhotoGallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/astro" element={<Astrologer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
