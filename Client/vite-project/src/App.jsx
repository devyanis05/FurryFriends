
import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Adopt from './Components/Adopt.jsx'
import Adoptform from './Components/Adoptform.jsx'
import Navbar from './Components/Navbar.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Manual from './Components/Manual.jsx'
import Footer from './Components/Footer.jsx'
import Homemain from './Page/Homemain.jsx';
import Aboutsmain from './Page/Aboutsmain.jsx'
import Pet_donation from './Components/Pet_donation.jsx'



function App() {
  return (
    <>
    
   
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/"  element={<Homemain/>} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/AboutUs" element={<Aboutsmain />} />
        <Route path="/adoptform" element={<Adoptform />} />
        <Route path="/donate" element={<Pet_donation />} />

      </Routes>      
      <Footer/>
    </BrowserRouter>  
     
    
   


    </>
  )
}   

export default App;
