import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    shopCard: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addToShopCard: (state, action) => {
      const currentProd = state.shopCard.find(
        (prod) => prod.id == action.payload.id
      );
      if (currentProd) {
        currentProd.count = action.payload.count;
      } else {
        state.shopCard.push(action.payload);
      }
    },

    incrementCount: (state, action) => {
      const currentProd = state.shopCard[action.payload];
      currentProd.count++;
    },
    decrementCount: (state, action) => {
      const currentProd = state.shopCard[action.payload];
      currentProd.count > 1 && currentProd.count--;
    },
    removeProduct: (state, action) => {
      state.shopCard = state.shopCard.filter(
        (prod) => prod.id != action.payload
      );
    },
  },
});

export const {
  setProducts,
  addToShopCard,
  incrementCount,
  decrementCount,
  removeProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
