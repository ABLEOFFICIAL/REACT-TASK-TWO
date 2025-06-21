import React from "react";

const FocusSection = () => {
  return (
    <section className="mt-20 px-5 md:px-0 max-w-[1170px] mx-auto">
      <h1 className="font-light text-3xl md:text-[64px] leading-[1.2] text-[#BDBDBD] mb-10">
        Main Focus/Mission Statement
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex items-center gap-4 flex-1">
          <span className="font-black text-[#F2F2F2] text-[100px] md:text-[200px] leading-none">
            1
          </span>
          <p className="font-normal text-[16px] md:text-[22px] leading-[28px] md:leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-1">
          <span className="font-black text-[#F2F2F2] text-[100px] md:text-[200px] leading-none">
            2
          </span>
          <p className="font-normal text-[16px] md:text-[22px] leading-[28px] md:leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
