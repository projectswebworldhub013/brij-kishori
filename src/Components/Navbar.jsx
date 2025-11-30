// src/pages/Packer/Components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaBoxOpen,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaTruckMoving,
  FaChevronDown,
  FaChevronUp,
  FaPeopleCarry,
  FaExchangeAlt,
  FaDolly,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Gallery", path: "/gallery", icon: <FaBoxOpen /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const services = [
    { name: "Packers And Movers Service", path: "/services/packers-and-movers", icon: <FaPeopleCarry /> },
    { name: "Home Relocation Service", path: "/services/home-relocation", icon: <FaExchangeAlt /> },
    { name: "Office Relocation Service", path: "/services/office-relocation", icon: <FaBoxOpen /> },
    { name: "Car & Bike Transport Service", path: "/services/car-bike-transport", icon: <FaTruckMoving /> },
 { name: "WareHouse Service", path: "/services/warehouse-service", icon: <FaTruckMoving /> },
    { name: "Loading Unloading Service", path: "/services/loading-unloading", icon: <FaDolly /> },
  ];

  return (
    <header className="w-full">
      {/* 🔹 Top Header */}
      <div className="bg-[#1C1C1C] text-white text-sm md:text-base overflow-hidden">
        <div className="relative w-full overflow-hidden h-10 flex items-center">
          <div className="marquee-track flex whitespace-nowrap">
            <p className="flex items-center gap-6 px-10">
              <FaTruckMoving className="text-[#C62828]" />
              Welcome to{" "}
              <span className="text-[#C62828] font-semibold">
                Braj Kishori Packers & Movers
              </span>
              <span className="text-gray-300">|</span>
              <FaPhone className="text-[#C62828]" />
              Call Us: +91 9258769761
              <span className="text-gray-300">|</span>
              <FaBoxOpen className="text-[#C62828]" />
              Email: brajkishoripackers@gmail.com
              <span className="text-gray-300">|</span>
              Safe, Reliable, and Affordable Moving Services
            </p>

            <p className="flex items-center gap-6 px-10">
              <FaTruckMoving className="text-[#C62828]" />
              Trusted & Professional{" "}
              <span className="text-[#C62828] font-semibold">
                Packers & Movers Across India
              </span>
              <span className="text-gray-300">|</span>
              <FaPhone className="text-[#C62828]" />
              Call Us Anytime: +91 9258769761
              <span className="text-gray-300">|</span>
              <FaBoxOpen className="text-[#C62828]" />
              Email: brajkishoripackers@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar (now scrollable, not sticky) */}
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-8 py-2">
          {/* ✅ Logo */}
         <div className="flex justify-center items-center">
  <Link to="/" className="block">
    <img
      src={logo}
      alt="Company Logo"
      className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 hover:scale-105"
    />
  </Link>
</div>
          {/* Center Nav Links (Desktop) */}
          <ul className="hidden md:flex gap-8 font-medium text-[#1C1C1C]">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative text-md">
                {link.name === "Services" ? (
                  <div className="relative group">
                    <button className="flex items-center gap-1 transition-colors hover:text-[#C62828]">
                      {link.icon}
                      {link.name}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    <ul className="absolute left-0 mt-2 w-72 bg-white shadow-xl rounded-lg opacity-0 z-99 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {services.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={service.path}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-[#1C1C1C] hover:bg-[#C62828]/10 hover:text-[#C62828] transition"
                          >
                            {service.icon}
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 transition-colors hover:text-[#C62828]"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="hidden md:flex gap-5 text-[#1C1C1C] text-lg">
            <a href="#" className="hover:text-[#C62828] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#C62828] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#C62828] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#C62828] transition"><FaLinkedinIn /></a>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-[#1C1C1C]" size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 rounded-l-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-[#D9D9D9]">
          <h2 className="text-[#C62828] text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-[#1C1C1C]" size={22} />
          </button>
        </div>

        <div className="px-4 mt-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.name === "Services" ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full py-3 border-b border-[#D9D9D9] text-[#1C1C1C] hover:text-[#C62828] transition"
                  >
                    <span className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </span>
                    {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="pl-6">
                      {services.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={service.path}
                            className="flex items-center gap-3 py-3 text-sm text-[#1C1C1C] hover:text-[#C62828] transition"
                            onClick={() => setMenuOpen(false)}
                          >
                            {service.icon}
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="flex items-center gap-2 py-3 border-b border-[#D9D9D9] text-[#1C1C1C] hover:text-[#C62828] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="px-4 mt-6 flex gap-5 text-[#1C1C1C] text-xl">
          <a href="#" className="hover:text-[#C62828] transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#C62828] transition"><FaInstagram /></a>
          <a href="#" className="hover:text-[#C62828] transition"><FaTwitter /></a>
          <a href="#" className="hover:text-[#C62828] transition"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* 🔹 Smooth Marquee Animation */}
      <style>
        {`
          .marquee-track {
            display: flex;
            animation: marquee 25s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </header>
  );
}
