import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { navbarData } from "../utils/navbar";

const Root = () => {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        {
          navbarData.map((nav) => (
            <Route key={nav.id} path={nav.path} element={<nav.element/>} />
          ))
        }
      </Routes>
      <Footer/>
    </React.Fragment>
  );
};

export default Root;