// src/components/FeaturedSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaTruckMoving } from "react-icons/fa";
import leftImg from "../assets/services/s3.jpg"; // Replace with moving-related image
import rightImg from "../assets/services/s2.jpg"; // Replace with moving-related image

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
};

export default function FeaturedSection() {
  return (
    <section className="relative w-full py-10 px-6 md:px-16 bg-white text-black">
      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="truck-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <rect width="60" height="60" fill={colors.black} />
              <path
                d="M10 0v60M30 0v60M50 0v60"
                stroke={colors.red}
                strokeWidth="1"
                opacity="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#truck-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Image Block */}
        <div className="relative w-full max-w-md group">
          <img
            src={leftImg}
            alt="Professional Packing and Loading"
            className="rounded-2xl h-[480px] md:h-[420px] shadow-2xl object-cover w-full transition-transform duration-700 group-hover:scale-105"
          />
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold text-gray-800">
            <FaShieldAlt className="text-[#C62828]" />
            <span>Safe & Secure</span>
          </div>
        </div>

        {/* Center Text Block */}
        <div className="text-center lg:text-left max-w-xl text-black">
          <div className="mb-6">
            <h3
              className="text-lg italic tracking-wide"
              style={{
                fontFamily: "Italiana, serif",
                color: colors.black,
              }}
            >
              “Delivering Trust, One Move at a Time.”
            </h3>
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-snug text-black"
            style={{
              fontFamily: "Italiana, serif",
              color: colors.black,
            }}
          >
            Reliable{" "}
            <span style={{ color: colors.red }}>Relocation Services</span>{" "}
            Across India
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed tracking-wide mb-4 text-gray-700"
            style={{
              fontFamily: "Poppins, sans-serif",
              
            }}
          >
            At{" "}
            <b style={{ color: colors.red }}>Braj Kishori Packers & Movers</b>,
            we redefine hassle-free moving with our professional packing,
            loading, transportation, and unloading services. Our trained team
            ensures every item reaches its destination safely —{" "}
            <span className="text-[#C62828] font-semibold">
              securely, swiftly, and with care.
            </span>{" "}
            Whether it’s household, corporate, or vehicle shifting, we handle it
            all with unmatched precision and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <Link to="/services">
              <button
                className="px-7 cursor-pointer py-3 border-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  borderColor: colors.red,
                  color: colors.red,
                  fontFamily: "Zen Dots, sans-serif",
                }}
              >
                Explore Our Services
              </button>
            </Link>

            <Link to="/contact">
              <button
                className="px-7 py-3 cursor-pointer rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: colors.red,
                  color: colors.white,
                  fontFamily: "Zen Dots, sans-serif",
                }}
              >
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-sm group">
          <img
            src={rightImg}
            alt="Loading and Transportation"
            className="rounded-2xl h-[340px] shadow-xl object-cover w-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-4 right-4 bg-[#C62828] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold">
            <FaTruckMoving />
            <span>Fast Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
