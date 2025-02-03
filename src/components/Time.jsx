import React, { useState, useEffect } from "react";
// CSS dosyasını import ediyoruz

const Time = () => {
  const [isSunrise, setIsSunrise] = useState(false); // Güneş doğdu mu?

  // 3 saniye sonra güneş doğsun
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSunrise(true); // Güneş doğsun
    }, 3000); // 3 saniye (3000 milisaniye)

    return () => clearTimeout(timer); // Temizleme fonksiyonu
  }, []); // Sadece component mount edildiğinde çalışsın

  return (
    <div
      className={`night-sky max-md:h-[300px] max-md:w-[300px] ${
        isSunrise ? "daylight" : ""
      } h-[100px] w-[100px] `}
    >
      {/* Yıldızlar */}
      <div className="stars"></div>

      {/* Ay */}
      <div className="moon"></div>

      {/* Güneş */}
      <div className={`sun ${isSunrise ? "sunrise" : ""}`}></div>
    </div>
  );
};

export default Time;
