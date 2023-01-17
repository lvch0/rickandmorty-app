import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  id: string | number;
  name: string;
  info: string;
  image: string;
}

interface CartRemoveState {
  id: string | number;
}

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<CartState>) => {},
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
