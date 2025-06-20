import React from "react";
import AboutImg2 from "../assets/3cd9c99af3198d2940494a44b342281d246c9108.jpg";
import AboutImg1 from "../assets/44d3e9bea5b877e20a158303104219fd3a53f9c2.jpg";
import AboutImg3 from "../assets/10069f785bc9dfbe2bcfa1948bee8f5324f62b98.jpg";
import MyBtn from "./MyBtn";
import { ArrowRIght } from "./HeroSection";

const AboutSection = () => {
  return (
    <section className="md:px-16 px-4 md:h-[435px] h-auto w-[1170px] flex flex-col md:flex-row justify-between bg-[#FBFBFB] mt-20 max-w-[1170px] mx-auto ">
      <div className="w-[55%] relative h-full">
        <img
          src={AboutImg1}
          className="md:absolute w-[270px] h-[265px] top-3 left-0 relative"
        />
        <img
          src={AboutImg2}
          className="md:absolute w-[270px] h-[140px] left-0 bottom-0 relative"
        />
        <img
          src={AboutImg3}
          className="md:absolute w-[270px] h-[345px] top-6 right-0 relative"
        />
      </div>
      <div className="md:w-[45%] w-[30%] flex flex-col justify-between items-start p-5">
        <h1 className="md:text-[64px] text-3xl text-[#BDBDBD] leading-[64px] font-light">
          About
        </h1>
        <p className="font-light text-[16px] leading-[25px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <MyBtn classname="px-5 py-3 bg-white shadow-md text-[#333333]">
          {" "}
          View More <ArrowRIght classname={"inline"} />
        </MyBtn>
      </div>
    </section>
  );
};

export default AboutSection;
