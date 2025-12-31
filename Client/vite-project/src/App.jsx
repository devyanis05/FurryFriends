import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adopt from "./../Components/Adopt.jsx";
import Adoptform from "./../Components/Adoptform.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Adopt />} />
        <Route path="/Adoptform" element={<Adoptform />} />
      </Routes>
    </BrowserRouter>
  );
import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'

function App() {
  return (
    <>
      <Navbar/>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App;
