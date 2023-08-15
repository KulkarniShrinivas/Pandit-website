import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import PhotoGallery from "./pages/photo-gallery/index";
import ContactUs from "./pages/contact-us/contactUs";
import Astrologer from "./pages/astrologer/index";
import AllPujaServices from "./pages/all-pujas/all-services";
import PujaPage from "./pages/puja-page/pujaPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";
import { useMediaQuery } from "@mui/material";
import FixedIcons from "./components/fixed-icons/fixedIcons";

function App() {
  const isDesktopScreen = useMediaQuery("(min-width: 800px)");

  return (
    <div className="app">
      <BrowserRouter>
        {!isDesktopScreen && <FixedIcons />}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allpujas/:id" element={<AllPujaServices />} />
          <Route path="/puja/:id" element={<PujaPage />} />
          <Route path="/photos" element={<PhotoGallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/astro" element={<Astrologer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
