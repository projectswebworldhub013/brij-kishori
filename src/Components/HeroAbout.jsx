// src/components/AboutHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/services/mnt.jpg"; // Background image

export default function AboutHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Braj Kishori Packers & Movers"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-start md:items-start justify-center bottom-0 top-0 text-left px-6 sm:px-10 md:px-20 space-y-6">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
            <span
             style={{
                fontFamily: "Italiana, serif",
              }}
            className="text-[#C62828] ">Braj Kishori</span> Packers & Movers
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-light">
            Your trusted relocation partner — ensuring{" "}
            <span className="text-[#C62828] font-semibold">safe, affordable</span>{" "}
            and{" "}
            <span className="font-semibold text-[#C62828]">
              timely moves
            </span>{" "}
            for homes, offices, and vehicles across India.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="/services"
              className="px-8 py-3 text-center rounded-full font-semibold text-white bg-[#C62828] hover:bg-[#a91f1f] transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 text-center rounded-full font-semibold border border-white/40 text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
