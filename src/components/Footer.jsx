import React from "react";
import Logo from "./Logo";
import MyBtn from "./MyBtn";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import whiteImgLogo from "../assets/Group 11 1.png";

export const WhiteLogo = ({ classname }) => {
  return <img src={whiteImgLogo} className={classname} />;
};

export const MyLocation = ({ classname }) => {
  return <IoLocationOutline className={`${classname} inline`} />;
};
export const MyPhone = ({ classname }) => {
  return <LuPhone className={`${classname} inline`} />;
};
export const MyEmail = ({ classname }) => {
  return <MdOutlineEmail className={`${classname} inline`} />;
};

const Footer = () => {
  return (
    <section className="h-[417px] mt-48 bg-[#2C2C2C] text-white">
      <div className="max-w-[1170px] mx-auto flex flex-col">
        <div className="flex justify-between py-10">
          <WhiteLogo classname="w-[145px] h-[94px]" />
          <div className="w-[605px] h-[229px] flex justify-between">
            <div className="flex flex-col justify-between">
              <h6
                className="text-[16px] leading-[100%
] font-[700]"
              >
                Information
              </h6>
              <MyBtn to={"/"} classname="text-[14px] font-medium">
                Main
              </MyBtn>
              <MyBtn to={"/gallery"} classname="text-[14px] font-medium">
                Gallery
              </MyBtn>
              <MyBtn to={"/projects"} classname="text-[14px] font-medium">
                Projects
              </MyBtn>
              <MyBtn to={"/certification"} classname="text-[14px] font-medium">
                Certifications
              </MyBtn>
              <MyBtn to={"/contact-us"} classname="text-[14px] font-medium">
                Contacts
              </MyBtn>
            </div>
            <div className="flex flex-col justify-between">
              <h6
                className="text-[16px] leading-[100%
] font-[700]"
              >
                Contacts
              </h6>
              <MyBtn classname="text-[14px] font-medium w-2/3">
                <MyLocation /> 1234 Sample Street Austin Texas 78704
              </MyBtn>
              <MyBtn classname="text-[14px] font-medium">
                <MyPhone /> 512.333.2222
              </MyBtn>
              <MyBtn classname="text-[14px] font-medium">
                <MyEmail />
                sampleemail@gmail.com
              </MyBtn>
            </div>
          </div>
          <div className="w-[193px] h-[64px] ">
            <h6
              className="text-[16px] leading-[100%
] font-[700]"
            >
              Social Media
            </h6>
            <div className="flex gap-5 justify-start mt-5">
              <MyBtn>
                <FaFacebookF />
              </MyBtn>
              <MyBtn>
                <FaTwitter />
              </MyBtn>
              <MyBtn>
                <FaLinkedin />
              </MyBtn>
              <MyBtn>
                <FaPinterestP />
              </MyBtn>
            </div>
          </div>
        </div>
        <hr className="bg-neutral-600" />
        <div className="text-center py-5">
          <span className="text-[12px] font-[400] leading-[22px] text-[#C8C8C8]">
            © 2021 All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
