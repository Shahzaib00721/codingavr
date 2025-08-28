"use client";
import { useState } from "react";

export default function NewDiv() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full bg-black text-white px-6 py-12 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column */}
        <div>
          <h3 className="text-blue-400 text-2xl font-medium mb-2">Contact Us</h3>
          <h1 className="text-5xl font-extrabold mb-8">Get In Touch</h1>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-1">Phone Number</h2>
            <p className="text-gray-300">+12013893990</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-1">Email Address</h2>
            <p className="text-gray-300">Mohamadghazoul@gmail.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-1">Location</h2>
            <p className="text-gray-300">
              187 Franklin Turnpike, Ho-Ho-Kus, NJ 07423, United States
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h1 className="text-5xl font-extrabold mb-3">
            We’d Love To Hear <br/> From You
          </h1>
          <p className="text-gray-300 mb-8">
            Fill out the form below, and we’ll get back to you at the earliest possible.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 py-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 py-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 py-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={form.phone}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 py-2"
              />
            </div>

            <textarea
              name="message"
              rows="3"
              placeholder="Write a Message*"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 py-2"
            ></textarea>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition"
              >
                Send Message
                <span className="text-xl">➔</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
