import React, { useEffect } from "react";
import ImgSleider from "../components/ImgSleider";
import SvgMain from "../components/SvgMain";
import { GiFilmProjector } from "react-icons/gi";
import { Link } from "react-router-dom";
const Project = () => {
  useEffect(() => {
    console.log("Project Page Rendered");
  }, []);

  return (
    <Link to="https://github.com/olcayaltun" className="relative ">
      {/* Kamera İkonu */}
      <div className="absolute text-[290px] left-20 top-[300px] text-[#EFE0D0] animate-pulse drop-shadow-[0_0_50px_rgba(255,255,255,0.8)] z-10  max-md:text-[150px]    max-md:left-[-10px] max-md:top-[408px]">
        <GiFilmProjector />
      </div>

      {/* Işık Efekti */}
      <div className="absolute left-[300px] top-[350px] w-[600px] h-[400px] bg-gradient-to-r from-white to-transparent opacity-50 blur-3xl rotate-[15deg]"></div>

      {/* SVG */}
      <div className="w-[1450px] ml-[90px]  max-md:hidden">
        <SvgMain />
      </div>

      {/* Resimler */}
      <div className="absolute top-40 left-[480px]  max-md:left-[200px]  max-md:text-[-10px]">
        <ImgSleider />
      </div>
    </Link>
  );
};

export default Project;
