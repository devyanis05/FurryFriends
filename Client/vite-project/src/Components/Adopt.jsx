
import React from "react";
import { useNavigate } from "react-router-dom";

const pets = [
   { name: "Bella", weight: "3kg", img: "https://i.pinimg.com/736x/7d/fc/d9/7dfcd9ef538f746c3b89e7a9285455e3.jpg" },
  { name: "Brandy", weight: "5kg", img: "https://i.pinimg.com/1200x/d8/87/29/d88729223ad513c2355fb3d9e285280e.jpg" },
  { name: "Phybi", weight: "7kg", img: "https://placedog.net/300/300?id=3" },
  { name: "Smokey", weight: "9kg", img: "https://placedog.net/300/300?id=4" },
  { name: "Mello", weight: "6kg", img: "https://i.pinimg.com/1200x/04/5a/16/045a16871a4d8ffb1d3b6fd0a451620c.jpg" },
  { name: "Tucker", weight: "6kg", img: "https://placedog.net/300/300?id=6" },
  { name: "Mango", weight: "1kg", img: "https://i.pinimg.com/736x/a3/a2/ec/a3a2ec5e1ca117b78abc7b8c97dee871.jpg" },
  { name: "Coco", weight: "5kg", img: "https://placedog.net/300/300?id=8" },

  { name: "Bunboy", weight: "7kg", img: "https://i.pinimg.com/736x/16/f3/9e/16f39e58bede777ff5ad25e57521efb4.jpg" },
  { name: "Happy", weight: "4kg", img: "https://i.pinimg.com/736x/7b/89/86/7b8986b36c58c3b3f242cbc085fbf6c8.jpg" },
  { name: "Hopper", weight: "3kg", img: "https://i.pinimg.com/736x/a2/b8/a2/a2b8a2d427a2a3f179d4734c90682a7a.jpg" },
  { name: "Pepper", weight: "2kg", img: "https://i.pinimg.com/736x/65/7e/bc/657ebcfbaa9204a50288cc6d72252d19.jpg" },
  { name: "Tango", weight: "3kg", img: "https://i.pinimg.com/736x/0c/9d/83/0c9d83d781bd321a0ee8032803498a86.jpg" },
  { name: "Kiwi", weight: "2kg", img: "https://i.pinimg.com/1200x/4b/43/73/4b43731aeda4a3dddb2b4206adf891ab.jpg" },
  { name: "Kuhu", weight: "1.5kg", img: "https://i.pinimg.com/1200x/29/3f/78/293f782a5457a78a93782688c23d2e92.jpg" },
  { name: "Coco", weight: "5kg", img: "https://i.pinimg.com/736x/31/89/3c/31893c4da93e29dec566524a5c169384.jpg" },

  { name: "Bat", weight: "3kg", img: "https://i.pinimg.com/736x/bc/8e/4b/bc8e4bb0d4e38b9aada5f22dd1b4a807.jpg" },
  { name: "Oliver", weight: "4kg", img: "https://i.pinimg.com/1200x/f8/f2/68/f8f2683dda459de65af52a56b0572997.jpg" },
  { name: "Ginger", weight: "2kg", img: "https://i.pinimg.com/736x/19/f7/1a/19f71ac6605e9aabacb9bfed45d41493.jpg" },
  { name: "Snowy", weight: "3kg", img: "https://i.pinimg.com/1200x/ed/9a/ec/ed9aecd86d7f286c856d8f9e49265ae3.jpg" },
  { name: "Sheru", weight: "4kg", img: "https://i.pinimg.com/736x/dd/05/a5/dd05a593386696c874b5ad74a06e62f7.jpg" },
  { name: "Buddy", weight: "3kg", img: "https://i.pinimg.com/736x/49/9c/99/499c995b872755cf574eacb15c089289.jpg" },
  { name: "Charlie", weight: "4kg", img: "https://i.pinimg.com/736x/2f/dd/1f/2fdd1f0a370312efe1617835211dbe51.jpg" },
  { name: "Junnu", weight: "3.5kg", img: "https://i.pinimg.com/736x/44/94/fd/4494fd0258c467b9ec9777ef55fdebc8.jpg" },
];

export default function Adopt() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F5C977] min-h-screen font-sans">
      <h2 className="text-center text-2xl font-bold my-6">
        Meet Your New Best Friend!
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 pb-10">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-[#FCE6B4] rounded-xl shadow-md w-[260px] h-[380px] mx-auto flex flex-col justify-between p-4"
          >
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />

            <div className="text-center mt-3">
              <h3 className="font-bold text-lg">{pet.name}</h3>
              <p className="text-sm text-gray-700">{pet.weight}</p>
            </div>

            <button
              onClick={() => navigate("/adoptform")}
              className="mt-3 bg-[#B86B2E] text-white py-2 rounded hover:bg-[#9c5622] h-[50px]"
            >
              Adopt Me
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}