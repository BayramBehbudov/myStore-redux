import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <div>
      <nav>
        <li
          onClick={() => {
            nav("/");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            nav("/products");
          }}
        >
          Products
        </li>
        <li
          onClick={() => {
            nav("/contact");
          }}
        >
          Contact
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
