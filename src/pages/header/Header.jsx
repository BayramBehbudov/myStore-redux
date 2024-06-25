import React from "react";
import style from "./header.module.css";
import Navbar from "./components/Navbar";
import HeaderActions from "./components/HeaderActions";

const Header = () => {
  
  return (
    <div className={style.container}>
      <div>MyStore.com</div>
      <Navbar />
      <HeaderActions />
    </div>
  );
};

export default Header;
