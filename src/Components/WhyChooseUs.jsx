import React from "react";
import { motion } from "framer-motion";
import { FaTruckMoving, FaBoxOpen, FaHandshake } from "react-icons/fa";
import sideImg from "../assets/gallery/whu.jpg"; // Replace with Braj Kishori image

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  gray: "#D9D9D9",
  white: "#FFFFFF",
};

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-10 px-6 md:px-20 text-black overflow-hidden font-[Poppins]"
      id="why-choose-us"
    >
      {/* === SVG HOLLOW CIRCLES BACKGROUND === */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <circle cx="15%" cy="20%" r="120" stroke={colors.red} strokeWidth="1" fill="none" />
        <circle cx="85%" cy="70%" r="160" stroke={colors.gray} strokeWidth="1" fill="none" />
        <circle cx="50%" cy="50%" r="280" stroke={colors.red} strokeWidth="0.8" fill="none" />
      </svg>

      {/* === MAIN GRID === */}
      <div className="relative grid md:grid-cols-2 gap-16 items-center z-10">
        {/* === LEFT IMAGE === */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#2E2E2E]">
            <img
              src={sideImg}
              alt="Braj Kishori Packers and Movers"
              className="w-full h-[450px] object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* === EXPERIENCE BADGE === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute -bottom-6 left-8 bg-[#C62828] text-white rounded-2xl shadow-lg px-8 py-3 flex gap-2 items-center justify-center border border-[#E57373]/50"
            style={{ boxShadow: "0 0 25px rgba(198,40,40,0.4)" }}
          >
            
            <p className="text-sm tracking-wide font-medium uppercase">
              Fast & Reliable 
            </p>
          </motion.div>
        </motion.div>

        {/* === RIGHT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p
          
          className="text-[#C62828] uppercase tracking-[4px] font-semibold mb-3">
            Why Choose Us
          </p>
          <h2
           style={{
                fontFamily: "Italiana, serif",
                color: colors.black,
              }}
          className="text-3xl md:text-4xl font-extrabold mb-3 leading-snug text-black">
            Why <span className="text-[#C62828]">Braj Kishori Packers & Movers</span>{" "}
            is the Right Choice for You
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
            At <span className="text-[#C62828] font-semibold">Braj Kishori Packers & Movers</span>,
            we redefine relocation with trust, safety, and precision. From packing to
            delivery — we ensure your belongings reach their destination without a single
            worry.
          </p>

          {/* === FEATURES === */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-start gap-5 p-4 rounded-xl bg-[#1C1C1C] hover:bg-[#2A2A2A] transition-all duration-300 shadow-md"
            >
              <div className="bg-[#C62828] text-white p-4 rounded-xl shadow-lg">
                <FaTruckMoving className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Safe & On-Time Delivery
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We prioritize timely deliveries with advanced tracking to ensure
                  your goods reach their destination securely and on schedule.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-start gap-5 p-4 rounded-xl bg-[#1C1C1C] hover:bg-[#2A2A2A] transition-all duration-300 shadow-md"
            >
              <div className="bg-[#D32F2F] text-white p-4 rounded-xl shadow-lg">
                <FaBoxOpen className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Professional Packing Materials
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We use the highest quality packaging materials ensuring zero damage
                  during shifting — from fragile items to heavy furniture.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-start gap-5 p-4 rounded-xl bg-[#1C1C1C] hover:bg-[#2A2A2A] transition-all duration-300 shadow-md"
            >
              <div className="bg-[#B71C1C] text-white p-4 rounded-xl shadow-lg">
                <FaHandshake className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Trusted by Thousands
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  With over a decade of successful relocations, our clients trust us
                  for a seamless, stress-free moving experience every time.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
