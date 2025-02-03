import React from "react";

const Animat = () => {
  const steps = 8; // Merdivenin basamağı

  const renderStairs = () => {
    const colors = [
      "#b7b0a8",
      "#ede3e9",
      "#b7b0a8",
      "#ede3e9",
      "#b7b0a8",
      "#ede3e9",
      "#b7b0a8",
      "#ede3e9",
      "#b7b0a8",
      "#ede3e9",
    ]; // Renkler
    let stairs = [];
    for (let i = 1; i <= steps; i++) {
      stairs.push(
        <div
          key={i}
          style={{
            width: `${50 + i * 20}px`, // Basamağın genişliği
            height: "30px", // Yükseklik
            backgroundColor: colors[i - 1], // Renk seçimi
            marginBottom: "0px", // Basamaklar arasındaki boşluk
            borderRadius: "5px", // Köşeleri yuvarlatma
            position: "relative", // Konumlandırma
            right: `${i * 20}px`, // Her basamağın sola kaymasını sağlıyor
          }}
        />
      );
    }
    return stairs;
  };

  return <div className=" border-amber-200">{renderStairs()}</div>;
};

export default Animat;
