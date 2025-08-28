"use client";

export default function Offers() {
  return (
    <section className="w-full bg-black py-10 px-2 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 ">
        
        {/* Left Side - Two cards stacked */}
        <div className="flex flex-col gap-6 ">
          <div
            className="h-48 rounded-2xl border-1 border-gray-700 bg-cover bg-center flex flex-col justify-between p-5"
            style={{ backgroundImage: "url('card1.png')" }}
          >
            <div className="text-white">
              <h2 className="text-4xl font-bold">Visa Card Offer</h2>
              <p className="text-2xl">200 off on Order of $500</p>
            </div>
            <button className="mt-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 py-3 text-sm font-medium rounded-full w-fit">
              Book Now →
            </button>
          </div>

          <div
            className="h-48 rounded-2xl border-1 border-gray-700 bg-cover bg-center flex flex-col justify-between p-5"
            style={{ backgroundImage: "url('card2.png')" }}
          >
            <div className="text-white  justify-items-end-safe">
              <h2 className="text-4xl font-bold">Get Flat 30% off</h2>
              <p className="text-2xl">The best of the best.</p>
               
            </div>
            <div className="flex justify-end">
            <button className="mt-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 py-3 text-sm font-medium rounded-full w-fit">
              Book Now →
            </button>
           </div>
          </div>
        </div>

        {/* Right Side - Two cards side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            className="h-103 rounded-2xl border-1 border-gray-700 bg-cover bg-center flex flex-col justify-between p-5"
            style={{ backgroundImage: "url('/card4.jpg')" }}
          >
            <div className="text-white justify-end mt-50">
              <h2 className="text-4xl font-bold">
                $10 Off <span className="text-xs">Free Shipping</span>
              </h2>
              <p className="text-2xl">Order of $60 or More</p>
            </div>
            <button className=" bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 py-3 text-sm font-medium rounded-full w-fit">
              Book Now →
            </button>
          </div>

          <div
            className="h-103  rounded-2xl border-1  border-gray-700 bg-cover bg-center flex flex-col justify-between p-5"
            style={{ backgroundImage: "url('/card3.png')" }}
          >
            <div className="text-white">
              <h2 className="text-4xl font-bold">
                $10 Off <span className="text-xs">Free Shipping</span>
              </h2>
              <p className="text-2xl font-bold">Order of $60 or More</p>
            </div>
            <button className="mb-50 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 py-3 text-sm font-medium rounded-full w-fit">
              Book Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
