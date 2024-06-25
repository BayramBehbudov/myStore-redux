import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import style from "../header.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderActions = () => {
  const shopCard = useSelector((state) => state.prods.shopCard);
  const nav = useNavigate();

  return (
    <div className={style.icons}>
      <FontAwesomeIcon icon={faUser} className={style.icon} />
      <div
        className={`${style.shopCardContainer} ${style.icon}`}
        onClick={() => {
          nav("/shopcard");
        }}
      >
        <FontAwesomeIcon icon={faShop} />
        <span className={style.shopCardCount}>{shopCard.length}</span>
      </div>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} />
    </div>
  );
};

export default HeaderActions;
