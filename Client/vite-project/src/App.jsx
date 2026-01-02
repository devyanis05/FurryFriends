
import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Manual from './Components/Manual.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Manual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>


    </>
  )
}

export default App;
