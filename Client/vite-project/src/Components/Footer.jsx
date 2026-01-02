import React from 'react'

function Footer() {
  return (
    <div>
     <footer className="bg-[#fff7ea] text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Our FurryFriends 🐾
          </h2>
          <p className="text-sm leading-relaxed">
            We help loving animals find caring homes.
            Adopt, donate, and spread kindness.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Adopt</li>
            <li className="hover:text-orange-500 cursor-pointer">Donate</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm"> India</p>
          <p className="text-sm"> ourfurryfriends@gmail.com</p>
          <p className="text-sm"> +91 9111222450</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center border-t py-4 text-sm">
         2026 Our Furry Friends | Made with love for animals
      </div>
    </footer>
   
    </div>
  )
}

export default Footer
