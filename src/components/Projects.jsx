import React from "react";
import Rectangle12 from "../assets/Rectangle 12.png";
import Rectangle15 from "../assets/image 15.png";
import Rectangle16 from "../assets/image 16.png";
import Rectangle17 from "../assets/image 17.png";
import Rectangle18 from "../assets/image 18.png";
import MyBtn from "./MyBtn";
import { ArrowRIght } from "./HeroSection";

const Projects = () => {
  return (
    <section className="flex flex-col justify-between h-[765px] mt-20 max-w-[1170px] mx-auto">
      <h1 className="text-[64px] font-light leading-[64px] text-[#BDBDBD]">
        Our Projects
      </h1>
      <div className="parent">
        <div
          style={{ background: `url(${Rectangle12})` }}
          className="div1 w-[570px] h-[255px] text-[#FFFFFF] relative"
        >
          <div className="bg-black/70 absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center">
            <h1 className="w-[233px] font-[700] text-[64px] leading-[64px] ">
              Sample Project
            </h1>
            <MyBtn classname="py-3 px-5">
              VIEW MORE <ArrowRIght classname="inline" />
            </MyBtn>
          </div>
        </div>
        <img src={Rectangle15} className="div2  w-[570px] h-[255px]" />
        <img src={Rectangle16} className="div3 w-[270px] h-[255px]" />
        <img src={Rectangle17} className="div4 w-[470px] h-[255px]" />
        <img src={Rectangle18} className="div5 w-[370px] h-[255px]" />
      </div>
      <MyBtn classname="flex justify-center items-center px-5 py-3 bg-[#2C2C2C] text-white w-[221.81px] self-end">
        ALL PROJECTS <ArrowRIght classname="inline text-2xl" />
      </MyBtn>
    </section>
  );
};

export default Projects;
