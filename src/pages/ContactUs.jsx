import React from "react";
import { PageTitle } from "../components/HeroSection";
import MyBtn from "../components/MyBtn";

const ContactUs = () => {
  return (
    <div className=" max-w-[1170px] mx-auto flex justify-between">
      <div className="h-[470px] flex flex-col justify-between">
        <PageTitle text1="Contact" text2="Information" />
        <div>
          <h6>Company Name</h6>
          <p>Company Name 1234 Sample Street Austin Texas 76401</p>
        </div>
        <span>512.333.2222</span>
        <span>sampleemail@gmail.com</span>
        <MyBtn classname="h-[71px] w-[221.81px] bg-[#2C2C2C] text-white flex items-center justify-center">
          CONTACT US
        </MyBtn>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31717.60854679023!2d3.4632437!3d6.4324324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1750446809230!5m2!1sen!2sng"
        width="700"
        height="501"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
