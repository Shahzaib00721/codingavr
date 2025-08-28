"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      question: "Lorem Ipsum is simply dummy ?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    { question: "Lorem Ipsum is simply dummy text ?", answer: "" },
    { question: "Lorem Ipsum is simply ?", answer: "" },
    { question: "Lorem Ipsum is simply dummy text of the printing?", answer: "" },
  ];

  const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? -1 : index);
};


  return (
    <section className="bg-[#111111] text-white py-20 md:px-15">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="text-blue-400 text-4xl font-semibold mb-2">Why Choose Us?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-snug">
            Why VRA is the perfect Choice  for you?
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-600 pb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </div>
                {openIndex === index && faq.answer && (
                  <p className="mt-2 text-gray-400 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              Book Now
              <span className="text-lg">➔</span>
            </button>
            <div>
              <p className="text-2xl">
                Start from <span className="text-blue-400 text-2xl font-bold">$29</span>
              </p>
              <p className="text-xs text-gray-400">
                30 Days Moneyback Guarantee!
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <Image
            src="/img27.png" // save your image as public/vr.png
            alt="VR"
            width={700}
            height={700}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
