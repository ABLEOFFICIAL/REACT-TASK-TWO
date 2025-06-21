import React, { useContext, useState } from "react";
import Img from "../assets/image 12.png";
import { ArrowRIght } from "./HeroSection";
import MyBtn from "../components/MyBtn.jsx";
import { ToggleContext } from "../context/ToggleContext.jsx";

export const MyInput = ({
  type,
  name,
  value,
  placeholder,
  classname,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`${classname} px-5 focus:outline-none`}
      onChange={onChange}
      required
    />
  );
};

const ContactSection = () => {
  const { setSubmit } = useContext(ToggleContext);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    interested: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForm = () => {
    const { name, email, phoneNumber, interested, message } = data;

    if (!name || !email || !phoneNumber || !interested || !message) {
      setError("Please fill in all the fields before submitting.");
      return;
    }
    setError("");
    setData({
      name: "",
      email: "",
      phoneNumber: "",
      interested: "",
      message: "",
    });
    setSubmit(true);
  };

  return (
    <section className="mt-20 max-w-[1170px] mx-auto px-4 md:px-0">
      <h1 className="text-[40px] md:text-[64px] leading-[48px] md:leading-[64px] font-light py-7 text-[#BDBDBD]">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-10 md:items-end">
        <div className="w-full md:w-auto">
          <form className="flex flex-col gap-4">
            <MyInput
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              classname="w-full md:w-[391px] h-[46px] bg-[#F3F3F3]"
              onChange={handleInput}
            />
            <MyInput
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={data.phoneNumber}
              classname="w-full md:w-[391px] h-[46px] bg-[#F3F3F3]"
              onChange={handleInput}
            />
            <MyInput
              type="email"
              name="email"
              placeholder="E-mail"
              value={data.email}
              classname="w-full md:w-[391px] h-[46px] bg-[#F3F3F3]"
              onChange={handleInput}
            />
            <MyInput
              type="text"
              name="interested"
              placeholder="Interested In"
              value={data.interested}
              classname="w-full md:w-[391px] h-[46px] bg-[#F3F3F3]"
              onChange={handleInput}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={data.message}
              className="w-full md:w-[391px] h-[147px] bg-[#F3F3F3] p-5 focus:outline-none"
              onChange={handleInput}
            ></textarea>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="w-full md:w-auto">
          <img
            src={Img}
            className="w-full md:w-[749px] h-[369px] object-cover"
            alt="Contact Illustration"
          />
        </div>
      </div>

      <MyBtn
        onclick={handleForm}
        classname="flex w-full md:w-[221.81px] justify-center items-center text-[16px] px-5 py-3 bg-[#2C2C2C] text-white mt-10 md:mt-20"
      >
        SEND EMAIL <ArrowRIght />
      </MyBtn>
    </section>
  );
};

export default ContactSection;
