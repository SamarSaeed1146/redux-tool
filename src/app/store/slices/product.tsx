import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  name: string;
  category: string;
  qty: number;
}

const initialState: ProductState[] = [
  { name: "Shoes-1", category: "Service", qty: 4 },
  { name: "Shoes-2", category: "Soft", qty: 2 },
  { name: "Shoes-3", category: "Air", qty: 6 },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
