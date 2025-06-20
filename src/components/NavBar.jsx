import React, { useContext } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { ToggleContext } from "../context/ToggleContext";

const NavBar = () => {
  const { toggle, setToggle } = useContext(ToggleContext);
  const handleSideBar = () => {
    setToggle((prev) => !prev);
    console.log("hello");
  };
  return (
    <div className="md:h-[102px] h-[80px] flex justify-between items-center max-w-[1170px] mx-auto">
      <Logo classname="w-[70px] h-[43.71px] ml-3 md:ml-0" />
      <nav className="w-[75%]  justify-center gap-10 hidden md:flex">
        <Link to={"/"}>Main</Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"certification"}>Certifications</Link>
        <Link to={"/contact-us"}>Contacts</Link>
      </nav>
      <div className="md:hidden w-[25%] flex justify-center">
        <FaBars onClick={handleSideBar} size={25} />
      </div>
    </div>
  );
};

export default NavBar;
