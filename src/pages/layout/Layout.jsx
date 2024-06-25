import React from "react";
import Header from "../header/Header";
import style from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
