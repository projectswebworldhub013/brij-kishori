import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgImg from "../assets/gallery/gal2.jpg";

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  gray: "#B0B0B0",
  white: "#FFFFFF",
};

const GalleryHero = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-end justify-between overflow-hidden px-6 md:px-16 pb-10 md:pb-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0" />

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[180px] h-[180px] bg-[#C62828]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[220px] h-[220px] bg-white/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 text-left max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          
          text-4xl md:text-5xl font-semibold uppercase tracking-wide text-white drop-shadow-lg"
        >
          Our <span

          
          
           style={{
                fontFamily: "Italiana, serif",
                color: colors.red,
              }}>Gallery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
        >
          Take a look at our proud moments — every image tells the story of a
          smooth, safe, and reliable move with{" "}
          <span className="font-semibold text-white">
            Braj Kishori Packers & Movers
          </span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#gallery">
            <button
              className="px-6 py-3 rounded-full font-semibold tracking-wide shadow-md transition-all duration-300"
              style={{
                backgroundColor: colors.red,
                color: colors.white,
              }}
            >
              View Our Work
            </button>
          </a>

          <Link to="/contact">
            <button
              className="px-6 py-3 rounded-full font-semibold tracking-wide border transition-all duration-300"
              style={{
                borderColor: colors.white,
                color: colors.white,
              }}
            >
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>

      {/* RIGHT SOCIAL ICONS */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-5 md:gap-6"
      >
        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-[#C62828] hover:text-[#C62828] text-gray-300 transition-all duration-300"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-[#C62828] hover:text-[#C62828] text-gray-300 transition-all duration-300"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-[#C62828] hover:text-[#C62828] text-gray-300 transition-all duration-300"
        >
          <FaLinkedinIn size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default GalleryHero;
