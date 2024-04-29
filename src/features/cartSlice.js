import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        if (state[index].quantity === 1) {
          state.splice(index, 1); // Remove item if quantity is 1
        } else {
          state[index].quantity -= 1; // Decrease quantity if item quantity > 1
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
