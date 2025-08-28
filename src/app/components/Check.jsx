"use client";
import { CheckCircle } from "lucide-react";

export default function Check() {
  return (
    <section className="bg-black text-white py-16 px-6 mb-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl font-bold leading-tight mb-4">
            Choose <br /> Pricing Plan
          </h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipis eiusmod tempor incididunt ut labore magna.
          </p>
          <img 
            src="/img14.png" 
            alt="VR girl" 
            className="rounded-xl object-cover w-full h-[350px]" 
          />
        </div>

        {/* Pricing Card 1 */}
        <div className="bg-[#0c0c0c] border border-gray-700 rounded-2xl p-6 flex flex-col">
          <div className="bg-gradient-to-r from-blue-900 to-black-900 rounded-xl p-4 text-center mb-6">
            <h3 className="text-2xl font-semibold">Basic Plan</h3>
            <p className="text-4xl font-bold mt-2">$149.25<span className="text-base font-normal">/month</span></p>
          </div>
          <p className="text-gray-400 mb-4">
            For individuals or small businesses with minimal storage needs
          </p>
          <hr className="border-gray-700 mb-4" />
          <ul className="flex flex-col gap-3 flex-grow">
            {[
              "Cross-platform Synchronization",
              "Marketing, Regulatory & Public",
              "Compatibility with AI VR Device",
              "Assistance with Technical Issues",
              "Community Forums and Discussion",
              "Support Team with VR Experts"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle size={20} className="text-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className=" mt-6 bg-gradient-to-r from-blue-600 to-purple-500 w-35 pl-6  text-center text-white px-4 py-3 rounded-full flex items-center gap-2 hover:from-blue-500 hover:to-blue-700 transition">
            Book Now →
          </button> 
        </div>

        {/* Pricing Card 2 (Duplicate same style) */}
        <div className="bg-[#0c0c0c] border border-gray-700 rounded-2xl p-6 flex flex-col">
          <div className="bg-gradient-to-r from-blue-900 to-black-900 rounded-xl p-4 text-center mb-6">
            <h3 className="text-2xl font-semibold">Basic Plan</h3>
            <p className="text-4xl font-bold mt-2">$149.25<span className="text-base font-normal">/month</span></p>
          </div>
          <p className="text-gray-400 mb-4">
            For individuals or small businesses with minimal storage needs
          </p>
          <hr className="border-gray-700 mb-4" />
          <ul className="flex flex-col gap-3 flex-grow">
            {[
              "Cross-platform Synchronization",
              "Marketing, Regulatory & Public",
              "Compatibility with AI VR Device",
              "Assistance with Technical Issues",
              "Community Forums and Discussion",
              "Support Team with VR Experts"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle size={20} className="text-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className=" mt-6 bg-gradient-to-r from-blue-600 to-purple-500 w-35 pl-6  text-center text-white px-4 py-3 rounded-full flex items-center gap-2 hover:from-blue-500 hover:to-blue-700 transition">
            Book Now →
          </button>
        </div>

      </div>
    </section>
  );
}
