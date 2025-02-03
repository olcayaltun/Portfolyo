import React from "react";

const svgMain = () => {
  return (
    <div>
      <svg width="1400" height="815" viewBox="0 0 1400 815">
        {/* SVG içerik */}
        <polygon
          points="700,0 1400,250 1400,565 700,815 0,565 0,250"
          fill="#634e37"
          stroke="" // Beyaz renk sınır
          strokeWidth="3" // Daha ince sınır
          strokeLinecap="round" // Kenarları yuvarlaklaştırma
          strokeDasharray="500" // Kesikli sınır uzunluğu
          strokeDashoffset="500" // Başlangıçta kesikli
          filter="url(#f1)" // Beyaz gölge filtresi
        />

        {/* Definitions for gradients and filters */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffcc00", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ff0000", stopOpacity: 1 }}
            />
          </linearGradient>

          <filter id="f1" x="0" y="0" width="150%" height="150%">
            {/* Beyaz gölge */}
            <feDropShadow
              dx="0" // Yatay gölge mesafesi sıfır
              dy="0" // Dikey gölge mesafesi sıfır
              stdDeviation="10" // Gölge bulanıklığı
              floodColor="#ffffff" // Beyaz gölge
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default svgMain;
