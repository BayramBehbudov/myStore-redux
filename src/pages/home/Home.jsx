import React from "react";
import Layout from "../layout/Layout";
import style from "./home.module.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
  return (
    <Layout>
      <div className={style.container}>
        <h1>Discover the fashion of the times</h1>
        <button
          className={style.animatedButton}
          onClick={() => {
            nav("/products");
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className={style.arr2}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className={style.text}>Products</span>
          <span className={style.circle}></span>
          <svg
            viewBox="0 0 24 24"
            className={style.arr1}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
