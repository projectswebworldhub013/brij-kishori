// src/components/PartnersMarquee.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ Import logos
import axis from "../assets/logos/axis.png";
import bajaj from "../assets/logos/bajaj.png";
import bhel from "../assets/logos/bhel.png";
import godrej from "../assets/logos/godrej.png";
import icici from "../assets/logos/icici.png";
import lob from "../assets/logos/iob.png";
import whirlpool from "../assets/logos/whirpool.png";
import sbi from "../assets/logos/sbi.jpg";
import federalbank from "../assets/logos/federalbank.jpg";
import hpcl from "../assets/logos/hpcl.jpg";
import iocl from "../assets/logos/iocl.jpg";
import pnb from "../assets/logos/pnb2.jpg";
import wipro from "../assets/logos/wipro.jpg";
import bpcl from "../assets/logos/bpcl.jpg";
import bob from "../assets/logos/bob.jpg";
import ubi from "../assets/logos/ubi.jpg";

// 🌀 Shuffled logos for variation
const logos = [
  godrej,
  sbi,
  icici,
  bajaj,
  hpcl,
  bhel,
  axis,
  iocl,
  wipro,
  bob,
  pnb,
  lob,
  bpcl,
  federalbank,
  whirlpool,
  ubi,
];

const colors = {
  red: "#C62828",
  black: "#000000",
  gray: "#D9D9D9",
  white: "#FFFFFF",
};

export default function PartnersMarquee() {
  const [duration, setDuration] = useState(40);

  // ✅ Adjust marquee speed based on screen size
  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 768 ? 25 : 40);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-7 bg-[#FAFAFA] overflow-hidden relative">
      {/* ✨ Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-6">
        <h2
          className="text-2xl md:text-3xl font-extrabold tracking-wide"
          style={{ color: colors.black, fontFamily: "Italiana, serif" }}
        >
          Trusted by{" "}
          <span style={{ color: colors.red }}>Leading Brands Nationwide</span>
        </h2>
        <p
          className="mt-3 text-base md:text-lg leading-relaxed"
          style={{
            color: "#555",
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          Braj Kishori Packers & Movers takes pride in serving  
        <span style={{ color: colors.red, fontWeight: "600" }}> 
              India’s top organizations
          </span>
          , delivering secure, timely, and reliable logistics solutions with every move.
        </p>
      </div>

      {/* 🚚 Continuous Marquee Section */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-10 items-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: duration,
          }}
          style={{ width: "max-content" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-28 md:w-32 h-16 md:h-20 bg-white rounded-xl shadow-lg hover:shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="max-h-12 md:max-h-16 object-contain opacity-90 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ⚪ Soft Background Accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C62828]/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#000000]/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
    </section>
  );
}
