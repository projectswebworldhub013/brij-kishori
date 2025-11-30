// src/components/MovingServices.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import icons
import {
  FaPeopleCarry,
  FaTruckMoving,
  FaExchangeAlt,
  FaBoxOpen,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
} from "react-icons/fa";

// Import images
import s1 from "../assets/services/s1.jpg";
import s2 from "../assets/services/s2.jpg";
import s3 from "../assets/services/s3.jpg";
import s4 from "../assets/services/s4.jpg";
import s7 from "../assets/services/s7.jpg";
import s9 from "../assets/gallery/1.jpg";
import bg from "../assets/services/bg.jpg";

// Services Data
const movingServices = [
  {
    id: 1,
    name: "Packers & Movers Service",
    path: "/services/packers-and-movers",
    icon: <FaPeopleCarry />,
    image: s1,
    description:
      "We provide trusted and efficient packing and moving services ensuring your household or office goods are relocated safely and on time across India.",
  },
  {
    id: 2,
    name: "Home Relocation Service",
    path: "/services/home-relocation",
    icon: <FaTruckMoving />,
    image: s2,
    description:
      "Experience stress-free home relocation with complete packing, loading, transportation, and unpacking handled by our expert team.",
  },
  {
    id: 3,
    name: "Office Relocation Service",
    path: "/services/office-relocation",
    icon: <FaExchangeAlt />,
    image: s3,
    description:
      "Seamless and professional office relocation ensuring minimal downtime and secure transfer of important office assets.",
  },
  {
    id: 4,
    name: "WareHouse  Service",
    path: "/services/warehouse-service",
    icon: <FaBoxOpen />,
    image: s4,
    description:
      "We handle all your valuable household goods with care — from packing to delivery, ensuring safety at every step.",
  },
 
  {
    id: 6,
    name: "Car & Bike Transport Service",
    path: "/services/car-bike-transport",
    icon: <FaCarSide />,
    image: s7,
    description:
      "Safe and secure car transportation with enclosed carriers and professional handling to prevent damage.",
  },
 
  {
    id: 9,
    name: "Loading & Unloading Service",
    path: "/services/loading-unloading",
    icon: <FaDolly />,
    image: s9,
    description:
      "Skilled manpower for safe loading and unloading of all types of goods to minimize risk and damage.",
  },
];

export default function MovingServices() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(movingServices.length);
  };

  return (
    <section
      className="relative py-8 text-center bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
      id="services"
    >
      <div className="absolute inset-0 bg-[#ffffffc0] z-0" />

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="uppercase tracking-wider text-sm font-semibold text-[#1C1C1C]">
          Trusted Nationwide
        </h2>
        <h3
         style={{
                fontFamily: "Italiana, serif"
              }}
        className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-3">
          Our <span className="text-[#C62828]">Professional Services</span>
        </h3>
        <p
        
        className="text-gray-700 max-w-3xl mx-auto mt-4 mb-10 text-sm sm:text-base">
          At{" "}
          <span className="font-semibold text-[#C62828]">
            Braj Kishori Packers & Movers
          </span>
          , we specialize in safe, affordable, and reliable moving solutions.
          Whether it’s your home, office, or vehicle, we ensure every move is
          handled with care, professionalism, and punctuality.
        </p>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {movingServices.slice(0, visibleCount).map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-xl w-80 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-5 text-left flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[#C62828] text-2xl mb-2">
                  {service.icon}
                  <h4 className="text-lg font-bold text-[#1C1C1C] uppercase">
                    {service.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mt-1 flex-1">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="mt-4 inline-block px-4 py-2 bg-[#C62828] text-white rounded-full font-semibold text-sm text-center hover:bg-[#1C1C1C] transition-all shadow-md"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < movingServices.length && (
          <div className="mt-10">
            <button
              onClick={handleLoadMore}
              className="cursor-pointer bg-[#1C1C1C] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#C62828] transition-all"
            >
              Load More Services
            </button>
          </div>
        )}

        {/* CTA */}
        <p className="mt-10 text-gray-800 text-sm sm:text-base">
          Planning to move soon?{" "}
          <Link
            to="/contact"
            className="text-[#C62828] font-semibold underline hover:text-[#1C1C1C] transition"
          >
            Get Your Free Quote
          </Link>
        </p>
      </div>
    </section>
  );
}
