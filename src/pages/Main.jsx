import React from "react";
import SvgMain from "../components/SvgMain";

import Header from "../components/Header";
import SvgName from "../components/SvgName";
import Tred from "../components/Tred";
// CSS dosyasını içe aktarıyoruz

const Main = () => {
  return (
    <div className="grid place-content-center h-screen ml-[100px] overflow-hidden  max-md:flex-col max-md:flex max-md:ml-2">
      <div className="relative">
        <div className="grid absolute place-content-center h-screen text-[80px] font-extrabold text-[#efe0d0] left-[100px] max-md:text-[30px] max-md:absolute  max-md:top-[-500px]">
          <h1 className="fade-in">
            <span className="hover-text">H</span>
            <span className="hover-text">i</span>,
          </h1>
          <h1 className="fade-in  ">
            <span className="hover-text htl"> I`m</span>{" "}
            <span className="hover-text absolute top-[-25px] left-[175px] max-md:top-[-10px] max-md:left-[80px] max-md:w-[70px]">
              <SvgName />
            </span>
            <span className="hover-text ml-[170px] max-md:ml-[70px]">l</span>
            <span className="hover-text">c</span>
            <span className="hover-text">a</span>
            <span className="hover-text">y</span>,
          </h1>
          <h1 className="fade-in">
            <span className="hover-text">w</span>
            <span className="hover-text">e</span>
            <span className="hover-text">b</span>{" "}
            <span className="hover-text">d</span>
            <span className="hover-text">e</span>
            <span className="hover-text">v</span>
            <span className="hover-text">e</span>
            <span className="hover-text">l</span>
            <span className="hover-text">o</span>
            <span className="hover-text">p</span>
            <span className="hover-text">e</span>
            <span className="hover-text and">r</span>.
          </h1>
        </div>
        <Header />
        <div className=" w-[1420px] max-md:w-[500px]  max-md:mt-[-250px] ">
          <SvgMain />
        </div>
      </div>
      <div className=" ">
        <Tred />
      </div>
    </div>
  );
};

export default Main;
