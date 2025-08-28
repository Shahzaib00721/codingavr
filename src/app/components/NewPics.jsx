import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GallerySection() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-8 lg:px-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div className="max-w-lg">
          <p className="text-blue-500 font-semibold">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Discover Our Best VRA Gallery
          </h2>
        </div>
        <div className="mt-6 md:mt-0 max-w-lg">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
          <button className="mt-5 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm md:text-base font-semibold flex items-center gap-2 hover:opacity-90 transition">
            View All <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Left side */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Image src="/img20.png" alt="Img1" width={300} height={150} className="rounded-xl w-full h-69 object-cover" />
            <Image src="/img21.png" alt="Img2" width={300} height={150} className="rounded-xl w-full h-70 object-cover" />
          </div>
          <Image src="/img22.png" alt="Img3" width={600} height={200} className="rounded-xl w-full h-auto object-cover" />
        </div>

        {/* Center big image */}
        <div>
          <Image src="/img23.png" alt="Big Img" width={800} height={500} className="rounded-xl w-full h-140 object-cover" />
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Image src="/img24.png" alt="Img4" width={300} height={150} className="rounded-xl w-full h-70 object-cover" />
            <Image src="/img25.png" alt="Img5" width={300} height={150} className="rounded-xl w-full h-70 object-cover" />
          </div>
          <Image src="/img26.png" alt="Img6" width={900} height={200} className="rounded-xl w-110 h-65 object-cover" />
        </div>
      </div>
    </section>
  );
}
