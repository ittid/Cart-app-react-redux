import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findedProduct = state.find((quanty) => {
        return quanty.id === action.payload.id;
      });

      if (findedProduct) {
        // if he find the productù
        findedProduct.quantity += 1;
      } else {
        /* 
          if there is just one item in the cart we pick a clone of object 
          and we add quantity key: 1 default value
         */
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((cartProduct) => cartProduct.id !== action.payload);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
