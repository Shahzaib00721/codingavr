// components/EventsSection.tsx

import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function Events() {
  const events = [
    {
      date: "18",
      month: "August",
      year: "2024",
      title: "Social media conference",
      location: "Apple Upper West Side, Brooklyn",
      time: "09:15 a.m. – 01:15 p.m.",
    },
    {
      date: "18",
      month: "August",
      year: "2024",
      title: "International AI summit",
      location: "Apple Upper West Side, Brooklyn",
      time: "09:15 a.m. – 01:15 p.m.",
    },
    {
      date: "18",
      month: "August",
      year: "2024",
      title: "Apple event: introducing new iOS",
      location: "Apple Upper West Side, Brooklyn",
      time: "09:15 a.m. – 01:15 p.m.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 sm:px-8 lg:px-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <p className="text-blue-500 text-2xl font-semibold">Calendar</p>
          <h2 className="text-4xl md:text-5xl font-bold">Our events</h2>
        </div>
        <div className="mt-6 md:mt-0">
          <p className="max-w-md text-gray-400 text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
          <button className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm md:text-base font-semibold hover:opacity-90 transition">
            All Events →
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-700 pt-6"
          >
            {/* Date */}
            <div className="flex items-start space-x-2 md:w-1/4">
              <span className="text-6xl md:text-6xl font-bold">
                {event.date}
              </span>
              <div>
                <p className="text-3xl text-gray-300">{event.month},</p>
                <p className="text-2xl text-gray-300">{event.year}</p>
              </div>
            </div>

            {/* Title + Details */}
            <div className="flex-1 mt-4 md:mt-0 md:pl-6">
              <h3 className="text-3xl md:text-4xl font-semibold">
                {event.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mt-2">
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {event.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {event.time}
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="mt-4 md:mt-0">
              <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm md:text-base font-semibold hover:opacity-90 transition">
                Buy Tickets →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
