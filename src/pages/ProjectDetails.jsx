import React from "react";
import { useParams } from "react-router-dom";
import { projectArr } from "./ProjectsPage";
import { PageTitle } from "../components/HeroSection";

const ProjectDetails = () => {
  const { id } = useParams();
  const clickedPost = projectArr.find((item) => item.id === Number(id));
  const word = clickedPost.title.split(" ");

  return (
    <div className="max-w-[1170px] mx-auto flex flex-col gap-10">
      <PageTitle text1={word[0]} text2={`${word[1]} ${word[2]}`} />
      <img src={clickedPost.img2} className="w-[1170px] h-[435px]" />
      <div className="flex justify-between items-center gap-10">
        <img src={clickedPost.img3} className="w-[419px] h-[428px]" />
        <p className="font-light text-[16px] leading-[25px]">
          {clickedPost.text}
        </p>
      </div>
      <img src={clickedPost.img4} className="w-[1170px] h-[435px]" />
    </div>
  );
};

export default ProjectDetails;
