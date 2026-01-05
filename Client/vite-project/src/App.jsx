
import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import Form from './FamilyAlbum/Form'
// import FamilAlbum from './FamilyAlbum/FamilAlbum'
// import Cards from './FamilyAlbum/Cards'
// import LCont from './FamilyAlbum/LCont'

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



// import piro from "./../Assests/FamilyAlbumCards/catsssss.jpg";
// import rabit from "./../Assests/FamilyAlbumCards/rabitt.jpg";
// import dog from "./../Assests/FamilyAlbumCards/image.png";
// import Rabit from "./../Assests/FamilyAlbumCards/pinkrabit.jpg";
// import Bcat from "./../Assests/FamilyAlbumCards/browncat.jpg";
// import wcat from "./../Assests/FamilyAlbumCards/whitecat.jpg";
// import Ycat from "./../Assests/FamilyAlbumCards/yellowcat.jpg";
// import birds from "./../Assests/FamilyAlbumCards/birdi.jpg";
// import Bdog from "./../Assests/FamilyAlbumCards/breaddog.jpg";
// import cdog from "./../Assests/FamilyAlbumCards/chotudog.jpg";
// import bdog from "./../Assests/FamilyAlbumCards/bluedog.jpg";
// import snow from "./../Assests/FamilyAlbumCards/showdog.jpg";

function App()
 {
  return (
    <>
{/*       
     <FamilAlbum/>
     
    
      <div className=" w-screen h-436.45 bg-[#f5e4b3] flex flex-wrap gap-16 p-10 justify-center">
        
        <Cards
          img={piro}
          name="Piro"
          date="Adopted on: 12 Jan 2024"
          story="Piro has brought endless joy to our lives. He is a lovely cat. very playful and affectionate."
        />
 
        <Cards
        img={rabit}
          name="Bruno"
          date="Adopted on: 18 Feb 2024"
          story="Bruno is playful and full of love. He has become an inseparable part of our family."
        />

        <Cards
          img={dog}
          name="Rocky"
          date="Adopted on: 5 Mar 2024"
          story="Rocky makes every day brighter. His loyalty and affection are unmatched."
        />
        <Cards
          img={Rabit}
          name="Luna"
          date="Adopted on: 22 Apr 2024"
          story="Luna is a bundle of joy and energy. She has filled our home with happiness."
        />
        <Cards
          img={Bcat}
          name="Milo"
          date="Adopted on: 30 May 2024"
          story="Milo has a heart full of love. He is the perfect companion."
        />
        <Cards
          img={wcat}
          name="Bella"
          date="Adopted on: 15 Jun 2024"
          story="Bella is the sweetest companion. She has brought so much joy into our lives."
        />
        <Cards
          img={Ycat}
          name="Charlie"
          date="Adopted on: 1 Jul 2024"
          story="Charlie fills our home with happiness. His playful nature is infectious."
        />
        <Cards
          img={birds}
          name="Daisy"
          date="Adopted on: 10 Aug 2024"
          story="Daisy's playful spirit is contagious. She has brought so much joy to our family."
        />
        <Cards
        img={Bdog}
          name="Max"
          date="Adopted on: 25 Sep 2024"
          story="Max is our loyal and loving friend. He completes our family."
        />
        <Cards
          img={cdog}
          name="Sadie"
          date="Adopted on: 5 Oct 2024"
          story="Sadie brings warmth to our hearts. She is a wonderful addition to our family."
        />
        <Cards
        img={bdog}
          name="Oliver"
          date="Adopted on: 15 Nov 2024"
          story="Oliver's antics keep us entertained. He is a joy to have around."
        />
        <Cards
        img={snow}
          name="Molly"
          date="Adopted on: 28 Dec 2024"
          story="Molly is a true blessing in our lives. Her loving nature is heartwarming."
        />
      
      <LCont/>
      <Form/>
      </div>  */}
      
    
   
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
        {/* <Route path="/familyalbum" element={<FamilAlbum />} /> */}
        
        

      </Routes>      
      <Footer/>
    </BrowserRouter>  
     
    
   


    </>
  )
}   



export default App;




    
