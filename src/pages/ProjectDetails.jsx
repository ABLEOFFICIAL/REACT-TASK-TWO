import React from "react";
import { useParams } from "react-router-dom";
import { projectArr } from "./ProjectsPage";
import { PageTitle } from "../components/HeroSection";

const ProjectDetails = () => {
  const { id } = useParams();
  const clickedPost = projectArr.find((item) => item.id === Number(id));
  const word = clickedPost.title.split(" ");

  return (
    <div className="max-w-[1170px] mx-auto px-4 md:px-0 flex flex-col gap-10 mt-10">
      <PageTitle text1={word[0]} text2={`${word[1]} ${word[2] || ""}`} />

      <img
        src={clickedPost.img2}
        className="w-full h-[250px] md:h-[435px] object-cover rounded"
        alt="Project Header"
      />

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
        <img
          src={clickedPost.img3}
          className="w-full md:w-[419px] h-[300px] md:h-[428px] object-cover rounded"
          alt="Project"
        />
        <p className="font-light text-[16px] leading-[25px] text-justify md:text-left">
          {clickedPost.text}
        </p>
      </div>

      <img
        src={clickedPost.img4}
        className="w-full h-[250px] md:h-[435px] object-cover rounded"
        alt="Project Footer"
      />
    </div>
  );
};

export default ProjectDetails;
