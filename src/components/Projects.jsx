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
    <section className="flex flex-col justify-between h-auto lg:h-[765px] mt-20 max-w-[1170px] mx-auto px-4">
      <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-light leading-[1.2] text-[#BDBDBD]">
        Our Projects
      </h1>

      <div className="parent flex flex-col lg:flex-row flex-wrap gap-4 mt-6">
        {/* Div 1 - Sample Project */}
        <div
          style={{
            background: `url(${Rectangle12})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="div1 w-full lg:w-[570px] h-[200px] sm:h-[255px] text-[#FFFFFF] relative"
        >
          <div className="bg-black/70 absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center px-4 text-center">
            <h1 className="w-full sm:w-[233px] font-[700] text-[32px] sm:text-[48px] lg:text-[64px] leading-tight mb-4">
              Sample Project
            </h1>
            <MyBtn classname="py-2 px-4 sm:py-3 sm:px-5">
              VIEW MORE <ArrowRIght classname="inline" />
            </MyBtn>
          </div>
        </div>

        {/* Images */}
        <img
          src={Rectangle15}
          className="div2 w-full lg:w-[570px] h-[200px] sm:h-[255px] object-cover"
        />
        <img
          src={Rectangle16}
          className="div3 w-full lg:w-[270px] h-[200px] sm:h-[255px] object-cover"
        />
        <img
          src={Rectangle17}
          className="div4 w-full lg:w-[470px] h-[200px] sm:h-[255px] object-cover"
        />
        <img
          src={Rectangle18}
          className="div5 w-full lg:w-[370px] h-[200px] sm:h-[255px] object-cover"
        />
      </div>

      <MyBtn classname="flex justify-center items-center px-5 py-3 bg-[#2C2C2C] text-white w-fit self-center lg:self-end mt-10">
        ALL PROJECTS <ArrowRIght classname="inline text-2xl" />
      </MyBtn>
    </section>
  );
};

export default Projects;
