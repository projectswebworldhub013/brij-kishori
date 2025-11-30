import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { motion } from "framer-motion";
import LocationMap from "../Components/LocationMap";

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  gray: "#D9D9D9",
  white: "#FFFFFF",
};

const services = [
  "Loading & Unloading Service",
  "Car & Bike Transport Service",
  "Household Shifting Service",
  "Office Relocation Service",
  "Home Relocation Service",
  "Packers & Movers Service",
];

export default function ContactPage() {
  return (
    <>
    <section className="w-full bg-[#f9f9f9] text-gray-800 font-sans overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-gradient-to-r from-[#C62828] to-[#1C1C1C] text-white text-center py-14 md:py-20 overflow-hidden">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-2 tracking-wide"
        >
          Get in Touch With Us
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-white/90 px-4"
        >
          We’re here to help you move safely and smoothly — whether it’s local
          shifting, relocation, or vehicle transport. Let’s make it easy!
        </motion.p>

        {/* Glow Effects */}
        <div className="absolute w-56 h-56 bg-white/10 blur-3xl rounded-full top-0 right-0"></div>
        <div className="absolute w-64 h-64 bg-red-500/10 blur-3xl rounded-full bottom-0 left-0"></div>
      </div>

      {/* ===== CONTACT SECTION ===== */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl mt-[-40px] z-10 relative grid md:grid-cols-2 overflow-hidden">
        {/* ===== LEFT SIDE (INFO) ===== */}
        <div
          className="p-8 md:p-10 text-white flex flex-col justify-center relative"
          style={{
            background: `linear-gradient(135deg, ${colors.black}, ${colors.red})`,
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 border-b border-white/30 inline-block pb-1">
            Contact Information
          </h2>
          <p className="text-white/80 text-sm mb-6">
            Reach our expert team for professional packing and moving support.
          </p>

          {/* Phone */}
          <div className="flex items-start gap-3 mb-4">
            <HiOutlinePhone className="text-xl mt-1 text-red-300" />
            <p className="font-medium text-white">+91 9258769761</p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 mb-4">
            <AiOutlineMail className="text-xl mt-1 text-red-300" />
            <p className="text-white/90">brajkishoripackers@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 mb-4">
            <BiMap className="text-xl mt-1 text-red-300" />
            <p className="text-white/90 text-sm leading-relaxed">
              Shop No - 2, Gopal Dham Phase - 2,  
              Satoha Link Road, Sonkh Road,  
              Pali Khera - 281004, India
            </p>
          </div>

          <div className="absolute w-60 h-60 bg-white/10 rounded-full bottom-[-80px] right-[-80px]"></div>
        </div>

        {/* ===== RIGHT SIDE (FORM) ===== */}
        <div className="p-8 md:p-10 bg-[#fdfdfd]">
          <form
            className="space-y-6"
            action="https://formsubmit.co/brajkishoripackers@gmail.com"
            method="POST"
          >
            {/* Hidden Settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://brajkishoripackersandmovers.co.in/thank-you"
            />

            {/* Row 1 — Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1 font-semibold text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm bg-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1 font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm bg-transparent"
                />
              </div>
            </div>

            {/* Row 2 — Mobile & Address */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1 font-semibold text-sm">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm bg-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1 font-semibold text-sm">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Your address"
                  className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm bg-transparent"
                />
              </div>
            </div>

            {/* Row 3 — Move From & Move To */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1 font-semibold text-sm">
                  Move From
                </label>
                <input
                  type="text"
                  name="move_from"
                  required
                  placeholder="From City"
                  className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm bg-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1 font-semibold text-sm">
                  Move To
                </label>
                <input
                  type="text"
                  name="move_to"
                  required
                  placeholder="To City"
                  className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm bg-transparent"
                />
              </div>
            </div>

            {/* Row 4 — Services & Requirement */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1 font-semibold text-sm">
                  Service
                </label>
                <select
                  name="service"
                  required
                  className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm bg-transparent"
                >
                  <option value="" disabled selected>
                    -- Select a Service --
                  </option>
                  {services.map((service, i) => (
                    <option key={i} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1 font-semibold text-sm">
                  Requirement Type
                </label>
                <select
                  name="requirement"
                  required
                  className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm bg-transparent"
                >
                  <option value="" disabled selected>
                    -- Select Requirement --
                  </option>
                  <option value="Urgent">Urgent</option>
                  <option value="Normal">Normal</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-1 font-semibold text-sm">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                placeholder="Write your message here..."
                className="w-full border-b border-gray-300 focus:border-[#C62828] outline-none py-2 text-sm resize-none bg-transparent"
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#C62828] text-white px-8 py-2.5 rounded-md text-sm font-semibold hover:bg-[#a32020] transition duration-300 shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
    
    <LocationMap/>
    </>
  );
}
