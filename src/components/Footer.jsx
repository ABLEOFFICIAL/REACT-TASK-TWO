import React from "react";
import Logo from "./Logo";
import MyBtn from "./MyBtn";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";
import whiteImgLogo from "../assets/Group 11 1.png";

export const WhiteLogo = ({ classname }) => {
  return <img src={whiteImgLogo} className={classname} alt="White Logo" />;
};

export const MyLocation = ({ classname }) => (
  <IoLocationOutline className={`${classname} inline`} />
);
export const MyPhone = ({ classname }) => (
  <LuPhone className={`${classname} inline`} />
);
export const MyEmail = ({ classname }) => (
  <MdOutlineEmail className={`${classname} inline`} />
);

const Footer = () => {
  return (
    <section className="bg-[#2C2C2C] text-white mt-48">
      <div className="max-w-[1170px] mx-auto px-4 md:px-0 py-10 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-shrink-0">
            <WhiteLogo classname="w-[145px] h-[94px]" />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10 md:w-[605px]">
            <div className="flex flex-col gap-3">
              <h6 className="text-[16px] font-[700] leading-[100%]">
                Information
              </h6>
              <MyBtn to="/" classname="text-[14px] font-medium">
                Main
              </MyBtn>
              <MyBtn to="/gallery" classname="text-[14px] font-medium">
                Gallery
              </MyBtn>
              <MyBtn to="/projects" classname="text-[14px] font-medium">
                Projects
              </MyBtn>
              <MyBtn to="/certification" classname="text-[14px] font-medium">
                Certifications
              </MyBtn>
              <MyBtn to="/contact-us" classname="text-[14px] font-medium">
                Contacts
              </MyBtn>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <h6 className="text-[16px] font-[700] leading-[100%]">
                Contacts
              </h6>
              <MyBtn classname="text-[14px] font-medium w-full md:w-2/3">
                <MyLocation /> 1234 Sample Street Austin Texas 78704
              </MyBtn>
              <MyBtn classname="text-[14px] font-medium">
                <MyPhone /> 512.333.2222
              </MyBtn>
              <MyBtn classname="text-[14px] font-medium">
                <MyEmail /> sampleemail@gmail.com
              </MyBtn>
            </div>
          </div>

          <div className="md:w-[193px]">
            <h6 className="text-[16px] font-[700] leading-[100%]">
              Social Media
            </h6>
            <div className="flex gap-5 mt-5">
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

        <hr className="bg-neutral-600 my-6" />

        <div className="text-center">
          <span className="text-[12px] font-[400] leading-[22px] text-[#C8C8C8]">
            © 2021 All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
