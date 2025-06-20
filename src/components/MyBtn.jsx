import React from "react";
import { Link } from "react-router-dom";

const MyBtn = ({ children, classname, to, onclick }) => {
  return (
    <Link onClick={onclick} to={to} className={classname}>
      {children}
    </Link>
  );
};

export default MyBtn;
