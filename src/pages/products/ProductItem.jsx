import React, { useState } from "react";
import style from "./products.module.css";
import { useDispatch } from "react-redux";
import { addToShopCard } from "../../redux/ProductsSlice";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductItem = ({ product }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className={style.card}>
      <div className={style.card2}>
        <img src={product.image} alt="" />

        <div className={style.description}>
          <h3>{product.title}</h3>

          <div className={style.priceAndCount}>
            <h2>${product.price}</h2>
            <div className={style.count}>
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => {
                  setCount((prev) => (prev > 1 ? prev - 1 : 1));
                }}
              />
              <p>{count}</p>
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          product={ ...product,count}
          dispatch(addToShopCard(product));
        }}
        className={style.cardButton}
      >
        Add Card
      </button>
    </div>
  );
};

export default ProductItem;
