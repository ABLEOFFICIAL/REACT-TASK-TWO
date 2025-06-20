import React from "react";
import LogoImg from "../assets/Group 11.png";

const Logo = ({ classname }) => {
  return (
    <div className="w-[25%] flex justify-start">
      <img src={LogoImg} className={classname} />
    </div>
  );
};

export default Logo;
