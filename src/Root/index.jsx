import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../pages/Home";

const Root = () => {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
};

export default Root;