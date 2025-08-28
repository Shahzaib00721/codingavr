"use client";
import Image from "next/image";
import { FaGamepad } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";

export default function Newbar() {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h4 className="text-blue-500 text-2xl font-medium mb-2">Experiences</h4>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Our Games Experiences <br /> Experience&apos;s by categories
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-300 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s.
            </p>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-medium">
              Book Now →
            </button>
          </div>
        </div>

        {/* Main 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            <div className="bg-blue-500 rounded-xl  flex flex-col justify-center items-center p-6 text-center h-40 ">
              <MdOutlineViewInAr size={60} />
            </div>
            <div className="bg-pink-500 rounded-xl  flex flex-col justify-center items-center p-6 text-center h-40 ">
              <h3 className="text-5xl font-bold">96k</h3>
              <p className="text-3xl">HAPPY CLIENT</p>
            </div>
            <div className="bg-blue-500 rounded-xl flex flex-col justify-center items-center p-6 text-center h-40 md:h-48">
              <FaGamepad size={55} />
              <h3 className="text-4xl font-bold mt-2">150k</h3>
              <p className="text-2xl">PRODUCT SOLD</p>
            </div>
          </div>

          {/* CENTER COLUMN - Single Large Image */}
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/img13.png"
              alt="VR Gaming Center"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 rounded-xl flex flex-col justify-center items-center p-6 text-center h-40 md:h-48">
              <h3 className="text-5xl font-bold">56+</h3>
              <p className="text-2xl">POPULAR FEATURES</p>
            </div>
            <div className="bg-blue-500 rounded-xl flex flex-col justify-center items-center p-6 text-center h-40 md:h-48">
              <h3 className="text-5xl font-bold">45K</h3>
              <p className="text-2xl">COUNTRY CLIENT</p>
            </div>
           
            <div className="relative rounded-xl overflow-hidden h-40 md:h-100">
              <Image
                src="/img11.png"
                alt="VR Racing"
                fill
                className="object-cover"
              />
             </div>
              <div className="bg-pink-500 rounded-xl  flex flex-col justify-center  items-center p-6 text-center h-40 md:h-100 ">
                   <MdOutlineViewInAr size={80} />
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
