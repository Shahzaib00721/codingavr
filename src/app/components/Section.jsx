"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white -mt-10 text-center items-center">
      {/* Background gradient only for desktop */}
      <div className="hidden lg:block absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-600/70 to-black/80" />
      </div>

      {/* Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
        
        {/* Mobile view: content over image */}
        <div className="relative w-full lg:hidden">
          <Image
            src="/img15.png"
            alt="VR Guy"
            width={500}
            height={300}
            className="object-contain w-full"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 bg-black/40">
            <p className="text-xl text-blue-300">Let's Get Started</p>
            <h1 className="text-4xl font-extrabold">
              Ready to <span className="text-white">Enjoy?</span>
            </h1>
            <p className="text-gray-300 text-sm max-w-xs mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition">
              Explore VR Packages
            </button>
          </div>
        </div>

        {/* Desktop view: normal side-by-side */}
        <div className="hidden lg:flex w-full lg:w-1/2 flex-col space-y-4 text-left">
          <p className="text-3xl font-bold text-blue-300">Let's Get Started</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold">
            Ready to <span className="text-white">Enjoy?</span>
          </h1>
          <p className="text-gray-300 text-base max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="mt-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 py-3 text-sm font-medium rounded-full w-fit">
              Explore VR Packages →
            </button>
        </div>

        <div className="hidden lg:flex w-full lg:w-1/2 justify-center overflow-visible">
          <Image
            src="/img15.png"
            alt="VR Guy"
            width={572}
            height={300}
            className="object-contain lg:-mt-20"
            priority
          />
        </div>
      </div>
    </section>
  );
}
