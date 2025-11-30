import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// 🎨 Brand Colors
const colors = {
  red: "#C62828",
  black: "#1C1C1C",
  gray: "#D9D9D9",
  white: "#FFFFFF",
};

// 💬 Testimonials for Braj Kishori Packers & Movers
const testimonials = [
  {
    name: "Ramesh Kumar",
    title: "Businessman, Delhi",
    text: "Braj Kishori Packers handled my office relocation with absolute professionalism. Everything arrived safely on time!",
  },
  {
    name: "Neha Sharma",
    title: "Homeowner, Gurgaon",
    text: "I was worried about my fragile items, but their packing quality was exceptional. Highly recommended!",
  },
  {
    name: "Amit Patel",
    title: "Software Engineer, Noida",
    text: "Their team was punctual, polite, and very careful with every item. Excellent moving service!",
  },
  {
    name: "Pooja Singh",
    title: "Teacher, Agra",
    text: "They made my local move hassle-free. The best packers and movers experience I’ve had.",
  },
  {
    name: "Rajesh Verma",
    title: "Doctor, Lucknow",
    text: "Everything was well organized — from packing to transportation. Very reliable and trustworthy company.",
  },
  {
    name: "Simran Kaur",
    title: "Designer, Delhi NCR",
    text: "The team packed my furniture so securely that not a single scratch appeared after the move!",
  },
  {
    name: "Sanjay Gupta",
    title: "Hotel Owner, Jaipur",
    text: "Handled a full hotel equipment move. Efficient, quick, and stress-free service.",
  },
  {
    name: "Aarti Desai",
    title: "Architect, Mumbai",
    text: "Their packing materials were premium quality — ensured complete safety of my valuable items.",
  },
  {
    name: "Vivek Yadav",
    title: "Civil Engineer, Kanpur",
    text: "Timely delivery and excellent customer support made my relocation smooth.",
  },
  {
    name: "Kavita Joshi",
    title: "Entrepreneur, Faridabad",
    text: "They handled my delicate glass decor pieces with utmost care. Truly professionals!",
  },
  {
    name: "Ankit Tiwari",
    title: "Student, Ghaziabad",
    text: "Budget-friendly and professional moving services. Would definitely choose them again.",
  },
  {
    name: "Preeti Nanda",
    title: "HR Manager, Delhi",
    text: "The staff was friendly and cooperative. All items were delivered on time without any issues.",
  },
  {
    name: "Vikas Sharma",
    title: "Shop Owner, Mathura",
    text: "Their local shifting service was quick and well-coordinated. Totally stress-free experience!",
  },
  {
    name: "Sneha Agarwal",
    title: "Lawyer, Meerut",
    text: "They packed everything neatly and handled my furniture like their own. Excellent service quality.",
  },
  {
    name: "Deepak Mishra",
    title: "Army Officer, Dehradun",
    text: "I appreciate their discipline and care during long-distance shifting. Highly professional movers.",
  },
];

export default function TestimonialSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-12 overflow-hidden font-[Poppins]">
      {/* ✨ Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-10 right-10 w-72 h-72 blur-3xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.red}25` }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 blur-2xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.black}20` }}
        ></div>
      </div>

      {/* 🌟 Header */}
      <div className="relative max-w-6xl mx-auto text-center mb-14 z-10">
        <h2
          className="text-4xl md:text-5xl font-bold tracking-wide"
           style={{
                fontFamily: "Italiana, serif",
                color: colors.black,
              }}
        >
          What Our <span style={{ color: colors.red }}>Clients Say</span>
        </h2>
        <p className="italic mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          “Trusted for safe, on-time, and affordable relocation across India — Braj Kishori Packers & Movers delivers care with every move.”
        </p>
      </div>

      {/* 🔘 Manual Navigation Buttons */}
      <div className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-20 flex gap-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 hover:scale-105 transition-transform"
        >
          <FaChevronLeft className="text-xl text-[#C62828]" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 hover:scale-105 transition-transform"
        >
          <FaChevronRight className="text-xl text-[#C62828]" />
        </button>
      </div>

      {/* 🧭 Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative rounded-2xl p-8 bg-white border border-gray-200 text-[#1C1C1C] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out"
            >
              <FaQuoteLeft className="text-3xl mb-4 text-[#C62828]" />
              <p className="mb-6 italic leading-relaxed text-gray-700">
                "{item.text}"
              </p>
              <div>
                <p className="font-semibold text-lg text-[#C62828]">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
              <span
                className="absolute -top-2 z-99 left-4 text-xs font-bold px-3 py-1 rounded-full shadow-md"
                style={{
                  backgroundColor: colors.black,
                  color: colors.white,
                }}
              >
                ★ Verified Client
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
