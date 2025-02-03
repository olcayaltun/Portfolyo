import React from "react";

const SvgName = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="-7"
              dy="0"
              stdDeviation="1"
              floodColor="#efe0d0" // ✅ Hata düzeltildi
            />
          </filter>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle" // ✅ Hata düzeltildi
          dominantBaseline="middle" // ✅ Hata düzeltildi
          fontFamily="Arial, sans-serif" // ✅ Hata düzeltildi
          fontSize="120" // ✅ Hata düzeltildi
          fontWeight="bold" // ✅ Hata düzeltildi
          fill="#346352"
          filter="url(#shadow)"
        >
          O
        </text>
      </svg>
    </div>
  );
};

export default SvgName;
