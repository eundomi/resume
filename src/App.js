import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ScrollToTop from "./Components/Common/ScrollToTop";
import LocationPage from "./pages/LocationPage";
import YorijoriPage from "./pages/YorijoriPage";
import President101Page from "./pages/President101Page";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ResumePage />} path="/resume" />
          <Route element={<LocationPage />} path="/location" />
          <Route element={<YorijoriPage />} path="/yorijori" />
          <Route element={<President101Page />} path="/president101" />
          <Route element={<PortfolioPage />} path="/portfolio" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
