
import React from 'react'
import Photo from './FamilyAlbum/Photo'
import FamilAlbum from './FamilyAlbum/FamilAlbum'
import Cards from './FamilyAlbum/Cards'
<<<<<<< HEAD
=======
import LCont from './FamilyAlbum/LCont'
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
import Feedback from './Components/Feedback.jsx'


>>>>>>> 7494a976f4725c0bc7fc12628b404bb0dd758ce7




function App()
 {
  return (
    <>
      <FamilAlbum/>
    <Photo/>
     
     
      
      
    
   
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
        <Route path="/feedback" element={<Feedback />} />

      </Routes>      
      <Footer/>
    </BrowserRouter>  
     
    
   


    </>
  )
}   



export default App;




    
