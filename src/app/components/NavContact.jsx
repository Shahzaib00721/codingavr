"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-950 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
          <h4 className="text-sky-400 text-2xl font-semibold mb-2">About Us</h4>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Transforming Reality Through
            Immersive Innovation
          </h2>

          <hr className="my-4 border-gray-700" />

          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          {/* Story */}
          <div className="mt-6">
            <h3 className="flex items-center text-3xl font-semibold text-white">
              <span className="mr-2 text-sky-400 text-x1">🪶</span> Our Story
            </h3>
            <p className="text-gray-300 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          {/* Mission */}
          <div className="mt-6">
            <h3 className="flex items-center text-3xl font-semibold text-white">
              <span className="mr-2 text-sky-400">🪶</span> Our Mission
            </h3>
            <p className="text-gray-300 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition inline-flex items-center justify-center"
            >
              Book Now →
            </a>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">⭐ 4.8 Ratings</span> 
              <p className="text-gray-400 text-sm">
                Trusted by over 11,000 Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/img1.png" // apni image ka path yahan lagao
            alt="VR Experience"
            width={758}
            height={671}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

