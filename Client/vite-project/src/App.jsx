import React from 'react'
import Form from './FamilyAlbum/Form'
import FamilAlbum from './FamilyAlbum/FamilAlbum'
import Cards from './FamilyAlbum/Cards'
import piro from "./../Assests/FamilyAlbumCards/catsssss.jpg";
// import rabit from "./Assets/rabitt.jpg";
// import dog from "./Assets/image.png";
// import Rabit from "./Assets/pinkrabit.jpg";
// import Bcat from "./Assets/browncat.jpg";
// import wcat from "./Assets/whitecat.jpg";
// import Ycat from "./Assets/yellowcat.jpg";
// import birds from "./Assets/birdi.jpg";
// import Bdog from "./Assets/breaddog.jpg";
// import cdog from "./Assets/chotudog.jpg";
// import bdog from "./Assets/bluedog.jpg";
// import snow from "./Assets/showdog.jpg";

function App()
 {
  return (
    <>
      <FamilAlbum/>
      <Cards/>
      <Form/>

      <div className="h-[350vh] w-screen bg-[#f5e4b3] flex justify-center">
      {/* Card container */}
      <div className="flex gap-10 p-10 flex-wrap justify-center">
        
        <Cards
          img={piro}
          name="Piro"
          date="Adopted on: 12 Jan 2024"
          story="Piro has brought endless joy to our lives. He is a lovely cat. very playful and affectionate."
        />
{/* 
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
        <AlbumCard
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
        <AlbumCard
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
        
         */}

      </div>
      </div>
    </>
  )
}

export default App




    
