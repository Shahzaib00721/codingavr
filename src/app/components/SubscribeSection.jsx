"use client";
import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="w-full bg-black px-6 py-12 md:px-10 flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl p-8 md:p-12 bg-gradient-to-r from-sky-400 via-blue-400 to-purple-500 text-center text-white">
        <h3 className="text-2xl font-medium mb-2">Stay Connected with VRA</h3>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          Join Us and Unlock the Future of VRA
        </h1>
        <hr className="border-white/40 mb-6" />
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to stay update on the latest in VRA technology, 
          exclusive offers, and new immersive experience.
        </p>

        {/* Form */}
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address here"
            required
            className="flex-1 w-full rounded-full px-6 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
          />
          <button 
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
