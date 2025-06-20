import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="relative overflow-x-hidden">
      <NavBar />
      <SideBar />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
};

export default MainLayout;
