// src/components/QuoteForm.jsx
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTruck,
} from "react-icons/fa";

export default function QuoteForm() {
  return (
    <section className="relative bg-[#fcf7f7] text-white py-6 px-6 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-[#FFFFFF] rounded-2xl shadow-2xl p-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3CB371] uppercase mb-2">
            Get Your Free Moving Quote
          </h2>
          <p className="text-[#555] italic text-lg">
            “Fast, Reliable & Secure — Super Fast Packer Mover is here to make your move effortless.”
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/superfastgroupofindia@gmail.com"
          method="POST"
          className="space-y-8"
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="New Quote Request - Super Fast Packer Mover"
          />
          <input type="hidden" name="_next" value="https://superfastpackermover.in" />

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Name */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
              <FaUser className="text-[#3CB371] mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
              <FaEnvelope className="text-[#3CB371] mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
              <FaPhone className="text-[#3CB371] mr-2" />
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                required
                className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
              <FaMapMarkerAlt className="text-[#3CB371] mr-2" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Service */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
              <FaTruck className="text-[#3CB371] mr-2" />
              <select
                name="service"
                required
                className="w-full p-3 bg-transparent text-gray-800 focus:outline-none"
              >
                <option value="">Select Service</option>
                <option value="Relocation Services">Relocation Services</option>
                <option value="Packing Services">Packing Services</option>
                <option value="Moving Services">Moving Services</option>
                <option value="Transport Services">Transport Services</option>
                <option value="Cargo Services">Cargo Services</option>
                <option value="Commercial Moving">Commercial Moving</option>
              </select>
            </div>

            {/* Moving From */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
              <FaMapMarkerAlt className="text-[#3CB371] mr-2" />
              <input
                type="text"
                name="movingFrom"
                placeholder="Moving From"
                required
                className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Moving To */}
            <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
              <FaMapMarkerAlt className="text-[#3CB371] mr-2" />
              <input
                type="text"
                name="movingTo"
                placeholder="Moving To"
                required
                className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#3CB371] text-white font-bold rounded-xl shadow-lg hover:bg-[#2E8B57] hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
