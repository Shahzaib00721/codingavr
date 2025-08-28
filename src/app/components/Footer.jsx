"use client";
import { FaTwitter, FaFacebookF, FaPinterestP, FaRedditAlien, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-12">
      {/* Top Border */}
      <div className="border-t border-gray-700"></div>

      <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/avr.png" alt="VRA Logo" width={120} height={50} />
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum.
          </p>
          <h3 className="text-white text-2xl font-semibold mb-3">Follow Us:</h3>
          <div className="flex gap-3 text-lg">
            <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
            <FaPinterestP className="cursor-pointer hover:text-red-500 transition" />
            <FaRedditAlien className="cursor-pointer hover:text-orange-500 transition" />
            <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Games</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">FAQ's</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-2xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">VRA Service</li>
            <li className="hover:text-white cursor-pointer">Pricing Plans</li>
            <li className="hover:text-white cursor-pointer">News & Articles</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone className="text-white" /> +1 (763) 478-6014 &nbsp; +1 (800) 328-1466
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-white" /> hello@virtualarena.com
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-white mt-1" /> 
              Loram Maintenance of Way 3900 Arrowhead Dr. <br />
              P.O. Box 188 | Hamel, MN 55340.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm py-4">
        Copyright © 2024 Virtual Arena All Rights Reserved.
      </div>
    </footer>
  );
}

