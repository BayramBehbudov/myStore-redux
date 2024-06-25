import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import ProductItem from "./ProductItem";
import style from "./products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/ProductsSlice";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProducts(json));
      });
  }, []);

  const products = useSelector((state) => state.prods.allProducts);

  return (
    <Layout>
      <div className={style.productsContainer}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
