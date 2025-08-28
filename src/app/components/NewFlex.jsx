"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Esther Howard",
      role: "Client Feedback",
      image: "/img31.jpg", // replace with your images in /public
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..."
    },
    {
      name: "Courtney Henry",
      role: "Client Feedback",
      image: "/img32.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..."
    },
    {
      name: "Jane Cooper",
      role: "Client Feedback",
      image: "/img30.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..."
    }
  ];

  return (
    <section className="bg-black text-white py-16">


        
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <p className="text-blue-400 text-3xl font-medium">Testimonial</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          What Our Awesome <br /> Customer Say
        </h2>
        <p className="mt-4 max-w-2xl text-gray-400 text-1x md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>
    <div className="flex items-center mt-6 gap-2 pl-7 md:pl-20">
              <Image
                src="/img30.jpg"
                alt="review user"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex text-yellow-400 ">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="ml-2 text-gray-300">15k+ (reviews)</p>
              </div>
      {/* Slider */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 } // show 2 cards on md+ screens
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>

              <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-6 flex flex-col relative">
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-green-400">
                    <Image src={t.image} alt={t.name} width={64} height={64} />
                  </div>
                  <div>
                    <div className="flex text-yellow-400 text-sm mb-1">
                      {"★★★★★"}
                    </div>
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <p className="text-sm text-gray-200">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-100">{t.review}</p>
                <div className="absolute top-4 right-4 text-white text-3xl opacity-50">
                  &rdquo;
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
