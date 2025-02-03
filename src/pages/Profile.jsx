import React from "react";
import SvgMain from "../components/svgMain";
import Header from "../components/Header";
import Animat from "../components/Animat";
import Mensch from "../components/Mensch";
import Time from "../components/Time";

const About = () => {
  return (
    <div className="grid place-content-center h-screen ml-[92px] overflow-hidden max-md:ml-0">
      <div className="absolute border-amber-100">
        <Header />
      </div>
      <div className="z-10 w-[1420px]  max-md:w-[500px] max-md:absolute max-md:top-[100px]">
        <SvgMain />
      </div>

      <div className="absolute grid grid-cols-2 top-[300px] left-[200px] z-20   max-md:top-[120px]">
        <div className="text-[#F0E0D0]">
          <h1 className="htl1 text-5xl font-extrabold mb-8 text-[#F0E0D0] max-md:text-2xl">
            About me
          </h1>
          <p className="mt-18  max-md:text-[10px] max-md:mt-5 max-md:left-[-20px] max-md:text-nowrap max-md:mr-[200px]">
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT" className="max-md:text-[10px]">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p className="max-md:text-[10px] max-md:h-5">
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="right-[-30px] absolute top-[47px]  max-md:top-[360px] ">
          <Animat />
        </div>
        <div className="absolute left-[835px] top-[125px] max-md:left-[-210px] max-md:top-[500px]">
          <Mensch />
        </div>
      </div>
      <div className="z-1 absolute right-0 max-md:hidden ">
        <Time />
      </div>
    </div>
  );
};

export default About;
