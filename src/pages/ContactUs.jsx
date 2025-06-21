import React from "react";
import { PageTitle } from "../components/HeroSection";
import MyBtn from "../components/MyBtn";

const ContactUs = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start gap-10 mt-10">
      {/* Left Section */}
      <div className="flex flex-col justify-center h-auto md:h-[470px] w-full md:w-[450px] gap-4">
        <PageTitle text1="Contact" text2="Information" />
        <div>
          <h6 className="text-lg font-semibold mb-1">Company Name</h6>
          <p className="text-sm text-[#333] leading-[22px]">
            1234 Sample Street Austin Texas 76401
          </p>
        </div>
        <span className="text-sm font-medium">512.333.2222</span>
        <span className="text-sm font-medium">sampleemail@gmail.com</span>
        <MyBtn classname="w-full md:w-[221.81px] h-[60px] md:h-[100px] bg-[#2C2C2C] text-white flex items-center justify-center text-sm">
          CONTACT US
        </MyBtn>
      </div>

      {/* Right Section - Map */}
      <div className="w-full md:w-[700px] h-[300px] md:h-[501px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31717.60854679023!2d3.4632437!3d6.4324324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1750446809230!5m2!1sen!2sng"
          className="w-full h-full rounded-md"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
