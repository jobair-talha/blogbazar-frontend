import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
