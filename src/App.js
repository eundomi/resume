import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ResumePage />} path="/resume" />
          <Route element={<PortfolioPage />} path="/portfolio" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
