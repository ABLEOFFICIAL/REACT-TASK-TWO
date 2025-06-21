import React, { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const SideBar = () => {
  const { toggle, setToggle } = useContext(ToggleContext);
  console.log(toggle);
  return (
    toggle && (
      <div>
        <nav className="w-[75%] h-screen fixed top-0 bottom-0 right-0 justify-start py-10 px-6 gap-10 flex flex-col bg-white shadow-md z-50">
          <div className="flex justify-end">
            <FaTimes onClick={() => setToggle(false)} size={25} />
          </div>
          <div className="flex flex-col gap-6">
            <Link to={"/"}>Main</Link>
            <Link to={"/gallery"}>Gallery</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"certification"}>Certifications</Link>
            <Link to={"/contact-us"}>Contacts</Link>
          </div>
        </nav>
      </div>
    )
  );
};

export default SideBar;
