import React from "react";
import { ArrowRIght, PageTitle } from "../components/HeroSection";
import Img1 from "../assets/image 30.png";
import Img2 from "../assets/image 33.png";
import Img3 from "../assets/image 34.png";
import Img4 from "../assets/image 35.png";
import Img5 from "../assets/image 33 (1).png";
import Img6 from "../assets/image 32.png";
import MyBtn from "../components/MyBtn";

export const projectArr = [
  {
    id: 1,
    img1: Img1,
    img2: Img2,
    img3: Img3,
    img4: Img4,
    title: "Sample Project 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.",
  },
  {
    id: 2,
    img1: Img5,
    img2: Img2,
    img3: Img3,
    img4: Img4,
    title: "Sample Project 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.",
  },
  {
    id: 3,
    img1: Img6,
    img2: Img2,
    img3: Img3,
    img4: Img4,
    title: "Sample Project 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.",
  },
];

const ProjectsPage = () => {
  return (
    <section className=" max-w-[1170px] mx-auto">
      <PageTitle text1="Our" text2="Projects" />
      <section>
        {projectArr.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-[#FBFBFB] flex justify-between items-center mb-[60px]"
            >
              <img src={item.img1} className="w-[670px] h-[435px]" />
              <div className="flex flex-col gap-10 px-[30px]">
                <h1
                  className="font-light text-[40px] leading-[100%
]"
                >
                  {item.title}
                </h1>
                <p className="font-light text-[16px] leading-[25px]">
                  {item.text.slice(0, 218)}...
                </p>
                <MyBtn
                  to={`/projects/${item.id}`}
                  classname="bg-white w-[222px] h-[71px] flex justify-center items-center"
                >
                  VIEW MORE
                  <ArrowRIght classname="inline" />
                </MyBtn>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ProjectsPage;
