// src/components/VisionMission.jsx
import React from "react";
import { motion } from "framer-motion";

const colors = {
  red: "#C62828",
  black: "#000000",
  gray: "#D9D9D9",
  white: "#FFFFFF",
  offWhite: "#FAFAFA",
};

export default function VisionMission() {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 bg-gradient-to-b from-[#FFFFFF] via-[#FAFAFA] to-[#F5F5F5] overflow-hidden font-[Poppins]">
      {/* 🌀 Floating Hollow Circle Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke={colors.gray} strokeWidth="0.8">
          <circle
            cx="20%"
            cy="30%"
            r="80"
            className="animate-bounce-slow"
            strokeOpacity="0.3"
          />
          <circle
            cx="80%"
            cy="40%"
            r="60"
            className="animate-bounce-delay"
            strokeOpacity="0.2"
          />
          <circle
            cx="50%"
            cy="80%"
            r="100"
            className="animate-bounce-slow"
            strokeOpacity="0.15"
          />
        </g>
      </svg>

      {/* ✨ Section Header */}
      <div className="relative text-center mb-16 z-10">
        <h2
          className="text-3xl md:text-5xl font-bold tracking-wide"
          style={{
            color: colors.black,
            fontFamily: "Italiana, serif",
          }}
        >
          Our <span style={{ color: colors.red }}>Vision & Mission</span>
        </h2>
        <p
          className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          style={{
            color: "#444",
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          At <span style={{ color: colors.red }}>Braj Kishori Packers and Movers</span>,
          we’re redefining relocation with trust, care, and precision —
          ensuring a seamless, safe, and stress-free moving experience for every client.
        </p>
      </div>

      {/* 🌟 Vision & Mission Cards */}
      <div className="relative grid md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10">
        {/* Vision Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div
            className="absolute -top-5 left-6 px-5 py-2 rounded-full text-sm font-bold shadow-md"
            style={{
              backgroundColor: colors.red,
              color: colors.white,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            🔭 Vision
          </div>
          <h3
            className="text-2xl font-semibold mb-6"
            style={{
              fontFamily: "Italiana, serif",
              color: colors.black,
            }}
          >
            Delivering Excellence with Every Move
          </h3>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: "#555",
            }}
          >
            Our vision is to become India’s most trusted relocation brand,
            where every journey reflects <span style={{ color: colors.red }}>safety</span>,
            <span style={{ color: colors.black }}> efficiency</span>, and{" "}
            <span style={{ color: colors.gray }}>complete client satisfaction</span>.
            We aim to move not just belongings — but emotions, trust, and peace of mind.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div
            className="absolute -top-5 left-6 px-5 py-2 rounded-full text-sm font-bold shadow-md"
            style={{
              backgroundColor: colors.black,
              color: colors.white,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            🚚 Mission
          </div>
          <h3
            className="text-2xl font-semibold mb-6"
            style={{
              fontFamily: "Italiana, serif",
              color: colors.black,
            }}
          >
            Moving with Integrity and Innovation
          </h3>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: "#555",
            }}
          >
            Our mission is to simplify relocation through{" "}
            <span style={{ color: colors.red }}>advanced logistics</span>,{" "}
            <span style={{ color: colors.black }}>reliable handling</span>, and{" "}
            <span style={{ color: colors.gray }}>personalized service</span>.
            Every move we make represents commitment, professionalism, and the
            highest standards of safety.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* Add in your CSS file or Tailwind config for smooth bounce animation */
<style>
{`
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
@keyframes bounce-delay {
  0%, 100% { transform: translateY(10px); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
.animate-bounce-delay { animation: bounce-delay 8s ease-in-out infinite; }
`}
</style>
