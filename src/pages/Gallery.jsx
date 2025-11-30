// src/components/Gallery.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// IMAGES
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/h1.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/services/s1.jpg";
import img11 from "../assets/services/s2.jpg";
import img12 from "../assets/services/s3.jpg";
import img13 from "../assets/gallery/gal.jpg"
import img14 from "../assets/gallery/gal2.jpg"
import Galleryhero from "../Components/Galleryhero"


// 🎨 Brand Colors
const colors = {
  primary: "#C62828", // Red
  accent: "#3CB371", // Green
  gold: "#D4AF37", // Gold
  dark: "#1C1C1C",
  light: "#FDFBF7",
  gray: "#D9D9D9",
};

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      <Galleryhero/>
        <section
        id="gallery"
        className="relative bg-[#FDFBF7] px-6 md:px-12 lg:px-20 py-5 overflow-hidden"
      >
        {/* Decorative Background Glows */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-[#C62828]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-[#3CB371]/10 rounded-full blur-3xl" />
        </div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h2
            className="text-4xl md:text-5xl font-semibold mt-3 tracking-wide"
            style={{ color: colors.dark }}
          >
            Moments of{" "}
            <span style={{ color: colors.primary }}>Perfection</span> in Every
            Move
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4 rounded-full"
            style={{ background: colors.accent }}
          ></div>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Welcome to the visual journey of{" "}
            <span className="text-[#C62828] font-semibold">
              Braj Kishori Packers & Movers
            </span>
            , where every frame captures our passion for precision, care, and
            commitment. From residential shifts to corporate relocations, we
            handle your move with trust, safety, and perfection.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden cursor-pointer rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.15)] group"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="absolute bottom-3 left-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-wide">
                Project #{i + 1}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-5xl mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Gallery"
                  className="w-full max-h-[85vh] object-contain rounded-2xl bg-white/10 backdrop-blur-md border border-[#3CB371]/30 shadow-[0_0_40px_rgba(198,40,40,0.3)]"
                />

                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white bg-[#C62828]/80 p-3 rounded-full hover:bg-[#3CB371] transition-all"
                  onClick={closeModal}
                >
                  <FaTimes size={18} />
                </button>

                {/* Navigation */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-[#C62828]/70 p-3 rounded-full hover:bg-[#3CB371] transition-all"
                  onClick={prevImage}
                >
                  <FaArrowLeft size={18} />
                </button>

                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-[#C62828]/70 p-3 rounded-full hover:bg-[#3CB371] transition-all"
                  onClick={nextImage}
                >
                  <FaArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Gallery;
