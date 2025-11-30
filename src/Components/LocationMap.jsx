// src/components/LocationMap.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  gray: "#D9D9D9",
  white: "#FFFFFF",
};

export default function LocationMap() {
  return (
    <section className="relative w-full bg-[#f9f9f9] py-8 px-6 md:px-12 overflow-hidden font-[Poppins]">
      {/* 🔴 Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-25"
          style={{ background: colors.red }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: colors.black }}
        ></div>
      </div>

      {/* 🌍 Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <FaMapMarkedAlt className="text-[#C62828] text-5xl animate-bounce" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C]">
          Find Us on the Map
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Visit our main branch and experience smooth, reliable relocation
          services — powered by trust and efficiency.
        </p>
      </motion.div>

      {/* 🗺️ Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.15)]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#00000070] via-transparent to-transparent z-10 pointer-events-none"></div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d535.8453055415786!2d77.64036921378231!3d27.480454585677727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI4JzQ5LjgiTiA3N8KwMzgnMjUuMSJF!5e1!3m2!1sen!2sin!4v1763040249168!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] md:h-[500px]"
        ></iframe>
      </motion.div>

      {/* 📍 Address Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-[#1C1C1C] font-semibold">
          📍 <span className="text-[#C62828]">Braj Kishor Packers & Movers</span>
        </p>
        <p className="text-gray-700">
          Shop No - 2, Gopal Dham Phase - 2, Satoha Link Road, Sonkh Road,  
          <br /> Pali Khera - 281004, India
        </p>
      </motion.div>
    </section>
  );
}
