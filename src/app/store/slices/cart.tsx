import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  name: string;
  category: string;
  qty: number;
}

const initialState: CartState[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const obj = state.find((val) => val.name === action.payload.name);
      if (obj) {
        ++obj.qty;
        const newState = state.filter((val) => val.name !== obj.name);
        state = [...newState, obj];
        return;
      }
      state.push(action.payload);
    },
    deleteCart: (state, action) => {
      return state.filter(val => val.name !== action.payload.name);
    },
  },
});

export const { addCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
