// src/components/WhoWeAre.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTruck,
} from "react-icons/fa";

import img1 from "../assets/gallery/resident.jpg";
import img2 from "../assets/gallery/office.jpg";
import img3 from "../assets/services/s7.jpg";

const services = [
  {
    title: "Residential Relocation",
    description:
      "From apartments to villas, we handle your household shifting with utmost care — using premium packing materials and skilled professionals for a completely stress-free experience.",
    image: img1,
    link: "/services/home-relocation",
    layout: "image-top",
  },
  {
    title: "Office & Corporate Shifting",
    description:
      "Ensure minimal downtime with our expert corporate shifting service. We pack, move, and set up your office essentials securely and efficiently.",
    image: img2,
    link: "/services/office-relocation",
    layout: "text-top",
  },
  {
    title: "Vehicle Transportation",
    description:
      "Our specialized vehicle carriers provide safe car and bike transport with real-time tracking and assured timely delivery across India.",
    image: img3,
    link: "/services/car-bike-transport",
    layout: "image-top",
  },
];

const WhoWeAre = () => {
  return (
    <>
      {/* --- WHO WE ARE SECTION --- */}
      <section className="bg-[#FAFAFA] text-[#1C1C1C] py-8 px-6 md:px-16 font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div>
              <p className="uppercase tracking-widest text-sm font-semibold mb-2 text-[#C62828]">
                Who We Are
              </p>
              <h2
               style={{
                fontFamily: "Italiana, serif",
               
              }}
              className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] leading-snug">
                Trusted Packers & Movers in India
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl">
                At <span className="text-[#C62828] font-semibold">Braj Kishori Packers & Movers</span>, 
                we provide reliable, safe, and affordable relocation solutions — backed by years of experience and a commitment to excellence.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-6 md:mt-0 inline-flex items-center bg-[#C62828] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#a91f1f] transition-transform duration-300 hover:scale-105 shadow-md"
            >
              About us →
            </Link>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
              >
                {service.layout === "image-top" ? (
                  <>
                    <div className="overflow-hidden rounded-t-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-52 object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3
                       style={{
                fontFamily: "Italiana, serif",
               
              }}
                      className="text-xl font-bold mb-2 text-[#1C1C1C]">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="text-sm font-semibold text-[#C62828] underline hover:text-[#a91f1f]"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-[#1C1C1C]">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="text-sm font-semibold text-[#C62828] underline hover:text-[#a91f1f]"
                      >
                        Learn More →
                      </Link>
                    </div>
                    <div className="overflow-hidden rounded-b-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-52 object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUOTE FORM SECTION --- */}
      <section className="relative px-2 flex items-center justify-center">
        <div className="w-full max-w-8xl p-10">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2
             style={{
                fontFamily: "Italiana, serif",
           
              }}
            className="text-3xl sm:text-4xl font-extrabold text-[#C62828] uppercase mb-2">
              Get Your Free Moving Quote
            </h2>
            <p className="text-gray-600 italic text-lg">
              “Fast, Reliable & Secure — Braj Kishori Packers & Movers is here to make your move effortless.”
            </p>
          </div>

          {/* Row 1 */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {/* Name */}
  <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm col-span-2 sm:col-span-1">
    <FaUser className="text-[#C62828] mr-2" />
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
    <FaEnvelope className="text-[#C62828] mr-2" />
    <input
      type="email"
      name="email"
      placeholder="@Email"
      required
      className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
    />
  </div>

  {/* Phone */}
  <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
    <FaPhone className="text-[#C62828] mr-2" />
    <input
      type="text"
      name="number"
      placeholder="Number"
      required
      className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
    />
  </div>

  {/* Address */}
  <div className="flex items-center border border-gray-300 rounded-xl px-3  mb-2 bg-[#F9F9F9] shadow-sm">
    <FaMapMarkerAlt className="text-[#C62828] mr-2" />
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
<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
  {/* Service */}
  <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm col-span-2 sm:col-span-1">
    <FaTruck className="text-[#C62828] mr-2" />
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
    <FaMapMarkerAlt className="text-[#C62828] mr-2" />
    <input
      type="text"
      name="movingFrom"
      placeholder="From"
      required
      className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
    />
  </div>

  {/* Moving To */}
  <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-[#F9F9F9] shadow-sm">
    <FaMapMarkerAlt className="text-[#C62828] mr-2" />
    <input
      type="text"
      name="movingTo"
      placeholder="To"
      required
      className="w-full p-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
    />
  </div>

  {/* Submit Button */}
  <div className="flex items-center justify-center">
    <button
      type="submit"
      className="w-full px-8 py-3 bg-[#C62828] text-white font-bold rounded-xl shadow-lg hover:bg-[#a91f1f] hover:scale-105 transition-all duration-300"
    >
      Submit
    </button>
  </div>
</div>

        </div>
      </section>
      <hr />
    </>
  );
};

export default WhoWeAre;
