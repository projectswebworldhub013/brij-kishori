// src/components/FAQBrajKishore.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTruckMoving, FaBoxOpen, FaHandshake, FaPlus } from "react-icons/fa";

const colors = {
  red: "#C62828", // Brand Accent
  black: "#1C1C1C", // Text/Primary
  gray: "#D9D9D9", // Neutral
  white: "#FFFFFF", // White
  offWhite: "#F9F9F9", // Background
};

const faqCategories = {
  "Packing & Moving": {
    icon: <FaBoxOpen className="text-2xl" />,
    faqs: [
      {
        question: "How do you ensure safe packing of fragile items?",
        answer:
          "We use multi-layer protection like bubble wraps, stretch films, corrugated boxes, and cushioning materials to ensure your fragile items remain completely safe during the move.",
      },
      {
        question: "Do you handle interstate relocations?",
        answer:
          "Yes, we provide reliable relocation services across states with insurance coverage, expert supervision, and on-time delivery.",
      },
      {
        question: "Do you use eco-friendly packing materials?",
        answer:
          "Absolutely! We prefer recyclable and eco-safe materials that protect both your goods and the environment.",
      },
    ],
  },
  
  "Transportation & Delivery": {
    icon: <FaTruckMoving className="text-2xl" />,
    faqs: [
      {
        question: "Can I track my shipment?",
        answer:
          "Yes. We provide live updates and tracking options so you can monitor your goods until final delivery.",
      },
      {
        question: "Do you offer vehicle transportation?",
        answer:
          "Yes, we offer secure car and bike transportation in covered, shock-proof carriers.",
      },
      {
        question: "Are my goods insured?",
        answer:
          "Yes, we offer full insurance coverage options to safeguard your belongings throughout the move.",
      },
    ],
  },
  "Support & Payment": {
    icon: <FaHandshake className="text-2xl" />,
    faqs: [
      {
        question: "What are your payment options?",
        answer:
          "We accept payments via UPI, bank transfer, or cash. A small advance is required before moving, with balance upon completion.",
      },
      {
        question: "Do you provide free quotations?",
        answer:
          "Yes! We offer free site visits and phone-based estimates with complete transparency — no hidden costs.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach our team 24/7 via phone or WhatsApp for any assistance before or after your move.",
      },
    ],
  },
};

export default function FAQBrajKishore() {
  const [activeTab, setActiveTab] = useState("Packing & Moving");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  return (
    <section
      className="relative w-full py-10 px-6 md:px-16 font-[Poppins] overflow-hidden"
      style={{ backgroundColor: colors.offWhite }}
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#C6282810] blur-3xl rounded-full" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#00000010] blur-3xl rounded-full" />

      {/* Section Heading */}
      <div className="relative text-center mb-8 z-10">
        <h2
         style={{
                fontFamily: "Italiana, serif",
               
              }}
        className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] mb-4 uppercase">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about{" "}
          <span className="font-semibold text-[#C62828]">
            Braj Kishore Packers & Movers
          </span>{" "}
          — from packing to delivery.
        </p>
      </div>

      {/* FAQ Container */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
        {/* Sidebar Navigation */}
        <div className="md:w-1/3 bg-[#F3F3F3] border-r border-gray-200 p-6 flex flex-col gap-4">
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-5 py-3 rounded-xl flex items-center gap-3 text-base font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#C62828] text-white shadow-lg"
                  : "bg-white text-[#1C1C1C] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span
                className={`transition-all ${
                  activeTab === category ? "text-white" : "text-[#C62828]"
                }`}
              >
                {data.icon}
              </span>
              {category}
            </motion.button>
          ))}
        </div>

        {/* FAQ Content Section */}
        <div className="md:w-2/3 p-8 md:p-10 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 py-4 last:border-none"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left px-3 py-2 transition-all hover:bg-[#F9F9F9] rounded-md"
                  >
                    <span className="text-lg md:text-xl font-medium text-[#1C1C1C]">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-bold text-[#C62828]"
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-base mt-3 leading-relaxed text-gray-700 px-3"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
