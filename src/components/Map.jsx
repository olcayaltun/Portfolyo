import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [position, setPosition] = useState(null); // Başlangıçta null

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const a = position.coords.latitude;
      const b = position.coords.longitude;
      setPosition([a, b]);
    });
  }, []);

  // Eğer position null ise haritayı render etme
  if (!position) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "823px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>
          {position[0] === 48.1351 && position[1] === 11.582
            ? "Bu varsayılan konum: Münih"
            : "Burası senin gerçek konumun!"}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
