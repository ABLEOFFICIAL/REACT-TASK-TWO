import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroImg from "../assets/Rectangle 6.png";

export const ArrowLeft = ({ classname }) => {
  return <IoIosArrowRoundBack size={20} className={classname} />;
};
export const ArrowRIght = ({ classname }) => {
  return <IoIosArrowRoundForward className={classname} />;
};
export const Direction = ({ classname }) => {
  return (
    <div className={`flex gap-5 ${classname}`}>
      <ArrowLeft classname="w-[52.95px] h-[53px] bg-[#BDBDBD] rounded-sm shadow-md" />
      <ArrowRIght classname="w-[52.95px] h-[53px] bg-[#BDBDBD] rounded-sm shadow-md" />
    </div>
  );
};

export const PageTitle = ({ text1, text2 }) => {
  return (
    <h1 className="md:text-[64px] text-3xl leading-[64px] font-light text-[#BDBDBD] w-[277.76px] py-[61px]">
      {text1} <span className="text-[#333333] font-[700]">{text2}</span>
    </h1>
  );
};

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center max-w-[1170px] mx-auto flex-col md:flex-row">
      <div className="flex flex-col gap-4 order-2 md:order-1">
        <PageTitle text1="Project" text2="Lorum" />
        <Direction />
      </div>
      <div className="relative order-1 md:order-2">
        <img
          src={HeroImg}
          className="w-[770px] md:h-[829px] min-w=[80%] h-[80vh] object-center object-cover"
        />
        <span className="absolute w-[221.81px] h-[71px] bottom-0 left-0 bg-white px-5 flex items-center">
          VIEW PROJECT{" "}
          <ArrowRIght classname="w-[52.95px] h-[53px] rounded-sm inline " />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
