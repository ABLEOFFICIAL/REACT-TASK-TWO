import React from "react";
import Img1 from "../assets/Rectangle 22.png";
import Img2 from "../assets/Rectangle 23.png";
import Img3 from "../assets/Rectangle 24.png";
import Img4 from "../assets/Rectangle 25.png";
import Img5 from "../assets/Rectangle 26.png";
import Img6 from "../assets/Rectangle 27.png";
import Img7 from "../assets/Rectangle 28.png";
import Img8 from "../assets/Rectangle 29.png";
import Img9 from "../assets/Rectangle 30.png";
import Img10 from "../assets/Rectangle 31.png";
import { Direction, PageTitle } from "../components/HeroSection";

export const galleryArr = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
];

const GalleryPage = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-4 md:px-0">
      <PageTitle text1="Photo" text2="Gallery" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[20px] md:gap-[30px]">
        {galleryArr.map((photo, idx) => (
          <img
            key={idx}
            src={photo}
            alt={`Gallery image ${idx + 1}`}
            className="w-full aspect-[3/4] object-cover object-center rounded"
          />
        ))}
      </div>
      <Direction classname="py-20" />
    </div>
  );
};

export default GalleryPage;
