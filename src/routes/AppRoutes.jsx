import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home/index.jsx";
import "../assets/styles/App.scss";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
