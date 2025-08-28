"use client";
import Image from "next/image";

export default function NewTag() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[400px] flex items-center justify-center text-center overflow-hidden  bg-gradient-to-r from-blue-900/80 via-purple-600/70 to-black/80 ">
     
      {/* Dark Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl text-white">
        <p className="text-2xl md:text-4xl font-bold mb-2 ">Let's Get Started</p>
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Ready to Enjoy?</h1>
        <p className="text-xs md:text-sm mb-6 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm md:text-base transition">
          Explore VR Packages
        </button>
      </div>
    </section>
  );
}
