import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarArt from "./Components/NavBarArt";
import WatercolourGrid from "./Components/WatercolourGrid";

import PaintingGallery from "./Components/PaintingGallery";
// import WatercolourGallery from "./Components/WatercoloursDiv";
import LandingPage from "./Pages/LandingPage";
import HomeDev from "./Pages/HomeDev";
import Navbardev from "./Components/Dev/Navbardev";
import HomeArt from "./Pages/HomeArt";

function App() {
  const contactPage = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const eveImage =
    "https://res.cloudinary.com/dc2qd4mzh/image/upload/f_auto,q_auto/v1/EvePortfolio/Site%20Elements/aapazsdwtefo0xaovfqa";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage {...{ eveImage }} />
            </>
          }
        />

        <Route
          path="/art/*"
          element={
            <>
              <NavBarArt {...{ scrollToSection, contactPage }} />
              <Routes>
                <Route path="/" element={<HomeArt {...{ contactPage }} />} />
                {/* <Route path="/prints" element={<WatercolourGallery />} /> */}
                <Route path="/prints" element={<WatercolourGrid />} />
                <Route path="/paintings" element={<PaintingGallery />} />
              </Routes>
            </>
          }
        />

        <Route
          path="/dev/*"
          element={
            <>
              <Navbardev />
              <Routes>
                <Route path="/" element={<HomeDev {...{ eveImage }} />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
