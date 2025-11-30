// src/components/FooterBrajKishori.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaCogs,
  FaTruck,
  FaCar,
  FaClipboardList,
  FaImage,
  FaBoxes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import footerBg from "../assets/services/bbg.jpg"; // ✅ Add your footer image here

const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  white: "#FFFFFF",
  gray: "#D9D9D9",
};

const serviceItems = [
  {
    name: "Loading & Unloading Service",
    path: "/services/loading-unloading",
    icon: FaBoxes,
  },
  {
    name: "Car & Bike Transport Service",
    path: "/services/car-bike-transport",
    icon: FaCar,
  },
  {
    name: "WareHouse Service",
    path: "/services/warehouse-service",
    icon: FaHome,
  },
  {
    name: "Office Relocation Service",
    path: "/services/office-relocation",
    icon: FaCogs,
  },
  {
    name: "Home Relocation Service",
    path: "/services/home-relocation",
    icon: FaLayerGroup,
  },
  {
    name: "Packers & Movers Service",
    path: "/services/packers-and-movers",
    icon: FaTruck,
  },
];

export default function FooterBrajKishori() {
  return (
    <footer
      className="relative pt-6 pb-4 px-6 md:px-16 text-white overflow-hidden"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <h2
           style={{
                fontFamily: "Italiana, serif",
                
              }}
         className="text-3xl md:text-4xl font-extrabold mb-3 text-[#C62828]">
            Braj Kishori Packers & Movers
          </h2>
          <p className="leading-relaxed text-base mb-6 text-gray-800">
            Your trusted relocation partner in India — providing safe, efficient,
            and reliable moving services for homes, offices, and vehicles. We
            ensure every move is handled with care, professionalism, and a
            personal touch.
          </p>

          {/* Email Button */}
        
         
        </div>

        {/* Quick Links */}
        <div>
          <h4
           style={{
                fontFamily: "Italiana, serif",
             
              }}
          className="text-2xl font-extrabold mb-4 text-[#C62828]">Quick Links</h4>
          <ul className="space-y-3 text-gray-700">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaLayerGroup />],
              ["Gallery", "/gallery", <FaImage />],
              ["Privacy Policy", "/privacy-policy", <FaClipboardList />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#C62828] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

            <a
            href="mailto:brajkishoripackers@gmail.com"
            className=" mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-light bg-[#C62828] text-white hover:bg-[#a11f1f] transition-all duration-300 shadow-lg"
          >
            <FaEnvelope className="text-white text-lg" />
            Email Us
          </a>

        </div>

        {/* Services */}
        <div>
          <h4
           style={{
                fontFamily: "Italiana, serif",
                
              }}
          className="text-2xl font-extrabold mb-4 text-[#C62828]">Our Services</h4>
          <ul className="space-y-3 text-gray-700">
            {serviceItems.map(({ name, path, icon: Icon }, i) => (
              <li key={i} className="flex items-center gap-2">
                <Icon className="text-gray-600" />
                <Link
                  to={path}
                  className="hover:text-[#C62828] transition duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
           style={{
                fontFamily: "Italiana, serif",
               
              }}
           className="text-2xl font-extrabold mb-3 text-[#C62828]">
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-700">
            Shop No -2, Gopal Dham Phase-2, <br />
            Satoha Link Road, Sonkh Road, <br />
            Pali Khera - 281004
          </address>

          <p className="flex items-center gap-2 mb-2 text-gray-700">
            <FaPhoneAlt className="text-[#C62828]" />
            <a
              href="tel:+919258769761"
              className="hover:text-[#C62828] transition duration-300"
            >
              +91 9258769761
            </a>
          </p>

          <a
            href="mailto:brajkishoripackers@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-[#C62828] transition duration-300"
          >
            <FaEnvelope className="text-[#C62828]" />
            brajkishoripackers@gmail.com
          </a>
           {/* Social Links */}
          <div className="mt-6 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send/?phone=919258769761&text=Hello%20Braj%20Kishori%20Packers%20and%20Movers",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 border border-red-800 hover:bg-[#C62828] hover:text-white transition duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="mt-4">
            <Translator />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-2 text-center text-sm border-t border-black pt-3 text-gray-800 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Braj Kishori Packers & Movers. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#C62828] hover:text-[#ff4d4d] transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
