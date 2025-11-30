import React from "react";

const colors = {
  black: "#1C1C1C",
  green: "#3CB371",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  red: "#C62828",
};

const states = [
  "Uttar Pradesh",
  "Delhi",
  "Haryana",
  "Punjab",
  "Rajasthan",
  "Madhya Pradesh",
  "Bihar",
  "Jharkhand",
  "Gujarat",
  "Maharashtra",
  "Chhattisgarh",
  "Uttarakhand",
  "Himachal Pradesh",
];

export default function DeliveryMarquee() {
  return (
    <div
      className="relative w-full overflow-hidden py-1 border-y border-[#3CB37133] font-[Poppins]"
      style={{
        background: `linear-gradient(90deg, ${colors.black}, #0F0F0F, ${colors.black})`,
      }}
    >
      {/* Glow Gradient Overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-transparent to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-transparent to-transparent z-10" />

      {/* Marquee Content */}
      <div className="flex items-center gap-6 px-8 text-[#D9D9D9] text-sm sm:text-base font-medium">
        <span className="whitespace-nowrap text-[#3CB371] font-semibold tracking-wide flex items-center gap-2">
          🚚 <span className="uppercase">AID</span>
        </span>

        {/* Animated Line */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee gap-10 whitespace-nowrap">
            {states.map((state, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-white/90 hover:text-[#3CB371] transition-all duration-300"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-[#3CB371] to-[#C62828] rounded-full shadow-[0_0_8px_rgba(60,179,113,0.8)]" />
                {state}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: inline-flex;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 25s;
            }
          }
        `}
      </style>
    </div>
  );
}
