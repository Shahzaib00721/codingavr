"use client";
import Image from "next/image";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // ← 
export default function NewNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-transpirnt-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left Menu (Desktop only) */}
        <ul className="hidden md:flex  font-bold space-x-6 text-white ">
          <li className="hover:text-blue-300 cursor-pointer ">Home</li>
          <li className="hover:text-blue-300 cursor-pointer">Experiences</li>
          <li className="hover:text-blue-300 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-300 cursor-pointer">Deals & Membership</li>
          <li className="hover:text-blue-300 cursor-pointer font-open">Contact Us</li>
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/avr.png"  
            alt="VRA Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Right Menu (Desktop only) */}
        <div className="hidden md:flex items-center space-x-8">
          <span className="text-white cursor-pointer">Login</span>
          <span className="text-white cursor-pointer">Sign Up</span>
          <button className=" bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-3 rounded-full flex items-center gap-2 hover:from-blue-500 hover:to-blue-700 transition">
            Book Now →
          </button>
        </div>

        {/* Hamburger (Mobile) */} 
        <div className=" md:hidden   ">
             <button 
             onClick={() => setOpen(true)} 
                  className="text-white  md:hidden z-50"
                    > 
                <Menu size={30} />
              </button>

        </div>
      </div>

      {/* Mobile Menu Sliding Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black-200/95 backdrop-blur-sm transform transition-transform duration-900 ease-in-out z-40 
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col h-175  items-center py-16 space-y-6  text-white bg-black  font-sans font-medium">
          <li className="hover:text-blue-300 cursor-pointer" onClick={() => setOpen(false)}>Home</li>
          <li className="hover:text-blue-300 cursor-pointer" onClick={() => setOpen(false)}>Experiences</li>
          <li className="hover:text-blue-300 cursor-pointer" onClick={() => setOpen(false)}>Pricing</li>
          <li className="hover:text-blue-300 cursor-pointer" onClick={() => setOpen(false)}>Deals & Membership</li>
          <li className="hover:text-blue-300 cursor-pointer" onClick={() => setOpen(false)}>Contact Us</li>
          <div className="flex items-center gap-5">
          <li className="hover:text-blue-300 cursor-pointer" onClick={() => setOpen(false)}>Login</li>
          <li className="hover:text-blue-300 cursor-pointer" onClick={() => setOpen(false)}>Sign Up</li>
          
          </div>
        </ul>
         {open && (
        <div 
          onClick={() => setOpen(false)} 
          className="fixed inset-0  bg-opacity-50 z-30  text-white right-6 top-6 flex justify-end "

        >
          <X size={30} /> 
        </div>

      )}
      </div>

      {/* Dark overlay when open */}
      {open && (
        <div 

          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}



