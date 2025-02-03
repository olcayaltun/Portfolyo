// CircularWheel.js
import React from "react";

const images = [
  "/1.jpg", // Doğrudan `public` klasöründen yüklenir
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
];
const colors = [
  "#ed0b0b",
  "#06f365",
  "#ffe834",
  "#cf2490",
  "#1a77f2",
  "#e537e8",
];

const CircularWheel = () => {
  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center  max-md:h-[300] max-md:w-[300]">
      {/* Dönen Çark */}
      <div className="w-[500px] h-[500px] relative group">
        {images.map((src, index) => {
          const angle = (index / images.length) * 360; // Her öğe için açı
          const radius = 220; // Yarıçap (px cinsinden)
          const x = radius * Math.cos((angle * Math.PI) / 180); // X koordinatı
          const y = radius * Math.sin((angle * Math.PI) / 180); // Y koordinatı

          return (
            <div
              key={index}
              className="absolute w-[220px] h-[220px] animate-spin-reverse group-hover:pause-spin max-md:h-[100] max-md:w-[100]"
              style={{
                top: `calc(50% + ${y}px - 100px)`, // Y koordinatı
                left: `calc(50% + ${x}px - 100px)`, // X koordinatı
              }}
            >
              <img
                src={src}
                alt={`wheel-item-${index}`}
                className="w-full h-full rounded-full border-2 shadow-lg transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderColor: colors[index], // Dinamik renk
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularWheel;
