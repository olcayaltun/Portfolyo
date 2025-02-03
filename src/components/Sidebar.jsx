import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { LiaEyeSolid } from "react-icons/lia";
import { MdOutlineMessage } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import SvgName from "./SvgName";

const Slieder = () => {
  const location = useLocation(); // 🔥 Sayfanın URL'sini takip et

  return (
    <div className="bg-[#634e37] w-[100px] h-screen absolute shd grid place-content-center gap-[20px] font-extrabold text-3xl cursor-pointer text-zinc-400 z-20 max-md:w-full max-md:h-[100px] max-md:flex justify-center items-center">
      <div className="absolute top-[20px] left-[-5px] max-md:top-[-40px] max-md:left-[-30px]">
        <SvgName />
      </div>
      <div className="absolute top-[106px] font-light text-[17px] left-2 text-[#efe0d0] shadow-gray-100 max-md:hidden">
        Olcay Altun
      </div>

      {/* 🔥 Aktif buton için 'active' class ekle */}
      <Link
        to="/"
        className={`home main ${
          location.pathname === "/" ? "active text-white" : ""
        }`}
        data-content="Home"
      >
        <IoHomeOutline />
      </Link>
      <Link
        to="/profile"
        className={`home main ${
          location.pathname === "/profile" ? "active text-white" : ""
        }`}
        data-content="Profile"
      >
        <CgProfile />
      </Link>
      <Link
        to="/tips"
        className={`home main ${
          location.pathname === "/tips" ? "active text-white" : ""
        }`}
        data-content="Tips"
      >
        <MdOutlineTipsAndUpdates />
      </Link>
      <Link
        to="/project"
        className={`home main ${
          location.pathname === "/project" ? "active text-white" : ""
        }`}
        data-content="Project"
      >
        <LiaEyeSolid />
      </Link>
      <Link
        to="/message"
        className={`home main ${
          location.pathname === "/message" ? "active text-white" : ""
        }`}
        data-content="Message"
      >
        <MdOutlineMessage />
      </Link>
    </div>
  );
};

export default Slieder;
