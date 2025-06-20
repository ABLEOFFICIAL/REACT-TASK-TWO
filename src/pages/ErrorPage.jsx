import React from "react";
import MyBtn from "../components/MyBtn";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center gap-10 items-center h-[400px]">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <MyBtn to={"/"} classname="bg-black px-5 py-3 text-white">
        Go to Home
      </MyBtn>
    </div>
  );
};

export default ErrorPage;
