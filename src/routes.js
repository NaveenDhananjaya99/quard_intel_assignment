import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Development from "./pages/development";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketing" element={<Development />} />
        <Route path="/development" element={<Development />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
