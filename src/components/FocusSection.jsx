import React from "react";

const FocusSection = () => {
  return (
    <section className="mt-20 h-[268px] flex flex-col justify-between max-w-[1170px] mx-auto">
      <h1 className="font-light md:text-[64px] leading-[64px] text-[#BDBDBD] text-3xl">
        Main Focus/Mission Statement
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-between items-center gap-2  w-[570px] h-[144px]">
          <span className="font-black text-[#F2F2F2] md:text-[200px] text-[100px] leading-[100%]">
            1
          </span>
          <span className="font-[400] md:text-[22px] text-[16px] leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </span>
        </div>
        <div className="flex justify-between items-center gap-2 w-[570px] h-[144px]">
          <span className="font-black text-[#F2F2F2] md:text-[200px] text-[100px] leading-[100%]">
            2
          </span>
          <span className="font-[400] md:text-[22px] text-[16px]leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </span>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
