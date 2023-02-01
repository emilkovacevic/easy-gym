import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  products: Array<Product>;
}

interface Product {
  id: string;
  quantity: number;
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(item => item.id !== action.payload );
    },
    resetCart: (state, action: PayloadAction) => {
      state.products = []
    },
  },
});

export const { addToCart, removeItem, resetCart} = cartSlice.actions
export default cartSlice.reducer