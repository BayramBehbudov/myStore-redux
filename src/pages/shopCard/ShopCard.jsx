import React from "react";
import Layout from "../layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  removeProduct,
} from "../../redux/ProductsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import style from "./shopcard.module.css";

const ShopCard = () => {
  const { shopCard } = useSelector((state) => state.prods);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return shopCard.reduce(
      (acc, product) => acc + product.count * product.price,
      0
    );
  };

  return (
    <Layout>
      <div className={style.container}>
        <h1>Shopping Cart</h1>
        {shopCard.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Delete</th>
                <th>ID</th>
                <th>Name</th>
                <th>Count</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {shopCard.map((product, index) => (
                <tr key={product.id}>
                  <td>
                    <button onClick={() => dispatch(removeProduct(product.id))}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td className={style.count}>
                    <FontAwesomeIcon
                      icon={faMinus}
                      className={style.countIcon}
                      onClick={() => {
                        dispatch(decrementCount(index));
                      }}
                    />
                    {product.count}
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => {
                        dispatch(incrementCount(index));
                      }}
                      className={style.countIcon}
                    />
                  </td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>${(product.count * product.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5">Total</td>
                <td>${calculateTotal().toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        ) : (
          "Cart is empty"
        )}
      </div>
    </Layout>
  );
};

export default ShopCard;
