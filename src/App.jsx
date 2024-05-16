import React from "react";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/App.css";
import "./styles/Resume.css";
import "./styles/Homepage.css";



import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";


export default function App() {
  return (
    <div className="app">
      {/* <h1>App Page</h1> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}
