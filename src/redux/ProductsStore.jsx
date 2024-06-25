import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";

export const store = configureStore({
  reducer: {
    prods: ProductsReducer,
  },
});
