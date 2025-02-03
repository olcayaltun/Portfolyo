import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Eksik olan import
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import SvgMain from "../components/svgMain";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
const Tips = () => {
  return (
    <div>
      <div className=" max-md:w-[450px]   max-md:top-[100px]  max-md:absolute  max-md:ml-10">
        <SvgMain />
      </div>

      <div className=" absolute top-[200px]  left-[250px] max-md:">
        <div className=" text-5xl font-extrabold text-[#EFE0D0] ">
          <h1 className=" max-md:absolute left-[-40px]  max-md:top-[-30px]">
            Frontend and Backend{" "}
          </h1>
        </div>
        <div className=" flex mt-30  justify-between items-center gap-5 text-[85px]    max-md:text-[60px]  max-md:absolute  max-md:left-[-200px]  max-md:top-[200px]">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />

          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />

          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />

          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />

          <SiTypescript color="#3077C6" />

          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          <SiTailwindcss color="#3077C6" />

          <FaBootstrap color="#7A12F2" />
          <RiNodejsLine color="#55A445" />
          <SiMongodb color="#06F365" />
          <SiFirebase color="#EB5800" />
          <SiExpress color="#FFFFFF" />
        </div>
      </div>
    </div>
  );
};

export default Tips;
