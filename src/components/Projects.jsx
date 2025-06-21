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
    <section className="flex flex-col justify-between mt-20 max-w-[1170px] mx-auto px-4 md:px-0">
      <h1 className="text-[40px] md:text-[64px] font-light leading-[48px] md:leading-[64px] text-[#BDBDBD] mb-10">
        Our Projects
      </h1>

      <div className="grid md:grid-cols-8 grid-cols-1 grid-rows-2 gap-[20px]">
        <div
          style={{
            background: `url(${Rectangle12})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-2 w-full h-[255px] text-[#FFFFFF] relative"
        >
          <div className="bg-black/70 absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center">
            <h1 className="w-[233px] font-[700] text-[32px] md:text-[64px] leading-[40px] md:leading-[64px] text-center">
              Sample Project
            </h1>
            <MyBtn classname="py-3 px-5 mt-3">
              VIEW MORE <ArrowRIght classname="inline" />
            </MyBtn>
          </div>
        </div>

        <div className="md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-2 w-full">
          <img
            src={Rectangle15}
            className="w-full h-[255px] object-cover"
            alt="Project"
          />
        </div>

        <div className="md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 w-full">
          <img
            src={Rectangle16}
            className="w-full h-[255px] object-cover"
            alt="Project"
          />
        </div>
        <div className="md:col-start-7 md:col-end-9 md:row-start-2 md:row-end-3 w-full">
          <img
            src={Rectangle17}
            className="w-full h-[255px] object-cover"
            alt="Project"
          />
        </div>

        <div className="md:col-start-3 md:col-end-7 md:row-start-2 md:row-end-3 w-full">
          <img
            src={Rectangle18}
            className="w-full h-[255px] object-cover"
            alt="Project"
          />
        </div>
      </div>

      <MyBtn classname="flex justify-center items-center px-5 py-3 bg-[#2C2C2C] text-white w-full md:w-[221.81px] self-center md:self-end mt-8">
        ALL PROJECTS <ArrowRIght classname="inline text-2xl" />
      </MyBtn>
    </section>
  );
};

export default Projects;
