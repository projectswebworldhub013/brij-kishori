// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Link, Links } from "react-router-dom";
import img1 from "../assets/gallery/gh1.jpg";
import img2 from "../assets/gallery/gh2.jpg";
import img3 from "../assets/gallery/gh3.jpg";

const images = [img1, img2, img3];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload next image for smoother transition
  useEffect(() => {
    const nextIndex = (currentImage + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [currentImage]);

  // Lazy load first image
  useEffect(() => {
    const img = new Image();
    img.src = images[0];
    img.onload = () => setLoaded(true);
  }, []);

  // Image slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[100vh] w-full overflow-hidden will-change-transform"
      style={{ perspective: "1000px" }}
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-linear`}
            style={{
              opacity: loaded && index === currentImage ? 1 : 0,
              backgroundImage: loaded ? `url(${image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "translateZ(0)",
              willChange: "opacity",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 text-white">
        <div className="max-w-2xl">
          <h1
           style={{
                fontFamily: "Italiana, serif",
                
              }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl">
            <span className="text-[#C62828] block">
              <Typewriter
                words={[
                  "Braj Kishori Packers & Movers",
                  "Your Trusted Moving Partner",
                  "Safe • Swift • Affordable Moves",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <span className="text-gray-200 tracking-wide text-xl sm:text-2xl font-semibold block mb-3">
            Delivering Trust, One Move at a Time
          </span>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            At{" "}
            <span className="text-[#C62828] font-semibold">
              Braj Kishori Packers & Movers
            </span>
            , we specialize in safe and professional relocations. From homes to
            offices, our expert team ensures every move is{" "}
            <span className="font-semibold text-[#C62828]">
              smooth, secure, and hassle-free.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/about">
              <button className="bg-[#C62828] hover:bg-[#a91f1f] text-white cursor-pointer px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105">
                Learn More <FaArrowRight />
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white/10 cursor-pointer border border-white/30 hover:bg-white/20 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-6 right-8 text-white text-sm tracking-widest opacity-80 select-none">
        🚛 Reliable • Professional • Nationwide
      </div>
    </section>
  );
}
