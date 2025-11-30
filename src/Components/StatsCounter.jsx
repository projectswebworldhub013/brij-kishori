import React, { useEffect, useState } from "react";
import {
  FaTruckMoving,
  FaSmile,
  FaRegBuilding,
  FaUsers,
} from "react-icons/fa";

// 🎨 Braj Kishori Color Palette
const colors = {
  brightRed: "#C62828",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
  grayNeutral: "#D9D9D9",
  darkGray: "#444444",
};

// 🔹 Animated Counter Card
const StatCard = ({ icon: Icon, label, target, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanTarget = target.trim().toUpperCase();
    let multiplier = 1;
    if (cleanTarget.includes("K")) multiplier = 1000;
    if (cleanTarget.includes("M")) multiplier = 1000000;

    const numericPart = parseFloat(cleanTarget.replace(/[^\d.]/g, ""));
    const finalTarget = Math.floor(numericPart * multiplier);
    const duration = 2000;
    const increment = finalTarget / (duration / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalTarget) {
        current = finalTarget;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatCount = () => {
    const plus = target.includes("+") ? "+" : "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M${plus}`;
    if (count >= 1000) return `${Math.floor(count / 1000)}K${plus}`;
    return `${count}${plus}`;
  };

  return (
    <div className="flex flex-col items-center py-5 px-6 hover:shadow-xl transition-all duration-300">
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
        style={{ backgroundColor: color + "22" }}
      >
        <Icon className="text-3xl" style={{ color }} />
      </div>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "Zen Dots, sans-serif", color: colors.blackPure }}
      >
        {formatCount()}
      </div>
      <p
        className="text-sm mt-2 text-center"
        style={{ fontFamily: "Orbitron, sans-serif", color: colors.darkGray }}
      >
        {label}
      </p>
    </div>
  );
};

// 🔹 Main Section
const StatsSection = () => {
  return (
    <section className="relative py-8 px-6 md:px-20 bg-white/10">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-5">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          
        >
          Braj Kishori Packers & Movers
        </h2>
        <h3
          className="text-4xl md:text-5xl font-bold leading-snug mb-5"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.blackPure,
          }}
        >
          Moving with <span style={{ color: colors.brightRed }}>Care</span> and{" "}
          <span style={{ color: colors.darkGray }}>Precision</span>
        </h3>
        <p
          className="text-base md:text-lg italic"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.darkGray,
          }}
        >
          Trusted relocation partners ensuring your belongings reach their new
          destination safely, securely, and on time.
        </p>
      </div>

      {/* Brand Experience */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-10 max-w-6xl mx-auto">
        <div className="text-left">
          <h2
            className="text-6xl mb-4"
            style={{
              fontFamily: "Zen Dots, sans-serif",
              color: colors.brightRed,
            }}
          >
            15+
          </h2>
          <p
            className="leading-relaxed text-lg"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: colors.darkGray,
            }}
          >
            With over{" "}
            <span className="font-semibold" style={{ color: colors.blackPure }}>
              15 years of experience
            </span>
            , <b style={{ color: colors.brightRed }}>Braj Kishori Packers and Movers</b>{" "}
            has been simplifying the moving process with{" "}
            <span style={{ color: colors.blackPure }}>reliability</span> and{" "}
            <span style={{ color: colors.darkGray }}>trust.</span>
          </p>
        </div>

        <div className="flex items-center justify-end gap-4">
          <div
            className="w-24 h-24 rounded-full shadow-xl border-2 flex items-center justify-center"
            style={{ borderColor: colors.brightRed, backgroundColor: "#fff" }}
          >
            <FaTruckMoving
              className="text-4xl"
              style={{ color: colors.brightRed }}
            />
          </div>
          <div>
            <p
              className="font-semibold text-xl"
              style={{ fontFamily: "Italiana, serif", color: colors.blackPure }}
            >
              Braj Kishori
            </p>
            <p
              className="text-sm"
              style={{
                fontFamily: "Orbitron, sans-serif",
                color: colors.darkGray,
              }}
            >
              Packers & Movers
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <StatCard
          icon={FaTruckMoving}
          label="Successful Moves"
          target="3000+"
          color={colors.brightRed}
        />
        <StatCard
          icon={FaSmile}
          label="Happy Clients"
          target="2500+"
          color={colors.darkGray}
        />
        <StatCard
          icon={FaRegBuilding}
          label="Corporate Projects"
          target="150+"
          color={colors.blackPure}
        />
        <StatCard
          icon={FaUsers}
          label="Trained Professionals"
          target="80+"
          color={colors.brightRed}
        />
      </div>
    </section>
  );
};

export default StatsSection;
