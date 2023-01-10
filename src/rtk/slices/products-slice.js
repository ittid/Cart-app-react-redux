import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    let req = await fetch("http://localhost:9000/products");
    let data = await req.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      console.log("please just wait a few secounds");
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      throw new Error("the call is rejected by the local server");
    });
  },
});

//export const {} = productsSlice.actions;
export default productsSlice.reducer;

export { fetchProducts };
