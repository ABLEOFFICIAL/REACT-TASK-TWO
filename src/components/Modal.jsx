import React, { useContext } from "react";
import success from "../assets/success.png";
import MyBtn from "./MyBtn";
import { ToggleContext } from "../context/ToggleContext";

const Modal = () => {
  const { submit, setSubmit } = useContext(ToggleContext);
  const closeForm = () => {
    setSubmit(false);
  };
  return (
    submit && (
      <div className="w-[516px] h-[421px] flex flex-col justify-around items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg z-50">
        <img src={success} className="h-[142px] w-[142px]" />
        <p className="font-[700] text-[24px] leading-[26px] text-[#333333]">
          Success
        </p>
        <p className="font-black text-[14px] leading-[26px] text-[#4F4F4F]">
          You have successfully submitted your form...
        </p>
        <MyBtn
          onclick={closeForm}
          classname="w-[391px] h-[42px] flex justify-center items-center"
        >
          CLOSE
        </MyBtn>
      </div>
    )
  );
};

export default Modal;
