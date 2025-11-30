// src/pages/ServiceDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Servicedata from "../data/Servicedata"; // adjust path if needed
import { FaPhoneAlt, FaEnvelope, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ServiceDetail() {
  const { slug } = useParams(); // expects route like /services/:slug
  const service = Servicedata.find((s) => s.slug === slug);

  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#C62828]">Service not found</h2>
          <p className="mt-4 text-gray-600">
            The service you're looking for doesn't exist. Go back to{" "}
            <Link to="/services" className="text-[#C62828] underline">
              Services
            </Link>
            .
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-10">
      {/* Decorative SVG hollow circles (background) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* large hollow circle top-left */}
          <circle cx="12%" cy="18%" r="140" fill="none" stroke="#F0F0F0" strokeWidth="6" className="animate-scaleSlow" />
          {/* medium hollow circle top-right */}
          <circle cx="88%" cy="12%" r="100" fill="none" stroke="#F7F7F7" strokeWidth="4" className="animate-scale" />
          {/* small hollow circle bottom-left */}
          <circle cx="18%" cy="82%" r="80" fill="none" stroke="#F2F2F2" strokeWidth="3" className="animate-scaleFast" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 pt-10">
        {/* Top Center: Name / Quote / Heading */}
        <div className="text-center mb-10">
          <p className="text-lg md:text-xl text-[#C62828] font-semibold tracking-wide">{service.name}</p>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight">
            {service.heading}
          </h1>
          {service.quote && (
            <p className="mt-4 text-base md:text-lg italic text-gray-600 max-w-3xl mx-auto">{service.quote}</p>
          )}
        </div>

        {/* Image & CenterHeading + Description */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-5">
          {/* Left - Image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - centerHeading + description */}
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">{service.centerHeading}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>

            {/* Quick summary badges */}
            <div className="flex flex-wrap gap-3">
              {service.keyFeatures?.slice(0, 3).map((f, i) => (
                <span
                  key={i}
                  className="inline-block px-4 py-2 rounded-full bg-[#FDF2F2] text-[#C62828] border border-[#FDE0E0] text-sm font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Why Choose Us */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Key Features */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-[#111827] mb-4">Key Features</h3>
            <ul className="space-y-3">
              {service.keyFeatures?.map((feat, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#FFF1F1] text-[#C62828] font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700">{feat}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-[#111827] mb-4">Why Choose Us</h3>
            <p className="text-gray-700 mb-4">{service.whyChooseUs?.[0] ? "We stand apart because:" : ""}</p>
            <ul className="list-inside list-disc text-gray-700 space-y-2">
              {service.whyChooseUs?.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-[#111827] mb-4">Frequently Asked Questions</h3>

            <div className="divide-y divide-gray-100">
              {service.faqs?.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between text-left gap-4"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                      <span className="ml-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F8F8F8] text-[#C62828]">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Full width Contact Badge */}
        <section className="w-full mt-6">
          <div className="rounded-2xl bg-gradient-to-r from-[#fff5f5] via-white to-[#fffaf0] border border-[#fde8e8] shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#C62828] text-white rounded-full shadow">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-600">Need help or a free quote?</p>
                <p className="text-lg font-semibold text-[#111827]">Call us: <a href="tel:+919258769761" className="text-[#C62828]">+91 9258769761</a></p>
                <p className="text-sm text-gray-600">Email: <a href="mailto:brajkishoripackers@gmail.com" className="text-[#C62828]">brajkishoripackers@gmail.com</a></p>
              </div>
            </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
  <Link
    to="/contact"
    className="inline-flex items-center justify-center 
               px-4 py-2 text-sm 
               sm:px-6 sm:py-3 sm:text-base
               rounded-full bg-[#C62828] text-white font-semibold 
               shadow hover:brightness-95 transition w-full sm:w-auto"
  >
    Get a Free Quote
  </Link>

  <a
    href={`mailto:brajkishoripackers@gmail.com?subject=Quote%20for%20${encodeURIComponent(
      service.name
    )}`}
    className="inline-flex items-center justify-center 
               px-4 py-2 text-sm 
               sm:px-5 sm:py-3 sm:text-base
               rounded-full border border-[#C62828] text-[#C62828] font-semibold 
               hover:bg-[#fff2f2] transition w-full sm:w-auto"
  >
    Email Us
  </a>
</div>

          </div>
        </section>
      </div>

      {/* Inline style for the SVG animation classes (Tailwind plugin not required) */}
      <style jsx>{`
        @keyframes scalePulse {
          0% { transform: scale(0.95); opacity: 0.95; }
          50% { transform: scale(1.06); opacity: 0.7; }
          100% { transform: scale(0.95); opacity: 0.95; }
        }
        .animate-scaleSlow { animation: scalePulse 10s ease-in-out infinite; transform-origin: center; }
        .animate-scale { animation: scalePulse 7s ease-in-out infinite; transform-origin: center; }
        .animate-scaleFast { animation: scalePulse 5s ease-in-out infinite; transform-origin: center; }
      `}</style>
    </main>
  );
}
