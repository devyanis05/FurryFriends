
import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar.jsx'
// import Signup from './Components/Signup.jsx'
// import Login from './Components/Login.jsx'
import Adopt from './Components/Adopt.jsx'
import Adoptform from './Components/Adoptform.jsx'
import Navbar from './Components/Navbar.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Manual from './Components/Manual.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
   
   <BrowserRouter>
    <Adopt/>
    
   <Routes>
        <Route path="/" element={<Adopt />} />
        {/* <Route path="/Adoptform" element={<Adoptform />} /> */}
        
      </Routes>
    </BrowserRouter>
      {/* <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Manual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adoptform" element={<Adoptform />} />
      </Routes>
    </BrowserRouter> */}
      <Footer/>
    </BrowserRouter>


    </>
  )
}

export default App;
