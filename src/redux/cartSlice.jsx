import { createSlice } from "@reduxjs/toolkit";

// Safely retrieve and parse the initial cart state from localStorage
let initialState = [];
const storedCart = localStorage.getItem("cart");

if (storedCart && storedCart !== "undefined") {
  try {
    initialState = JSON.parse(storedCart);
  } catch (error) {
    console.error("Error parsing cart data from localStorage:", error);
    initialState = []; // Fallback to an empty array in case of an error
  }
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const payload = {
        ...action.payload,
        time:
          action.payload.time?.toDate?.().toISOString() ||
          (action.payload.time instanceof Date
            ? action.payload.time.toISOString()
            : action.payload.time),
      };

      const existingItem = state.find((item) => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...payload, quantity: 1 });
      }
    },
    deleteFromCart(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        state.splice(itemIndex, 1); // Remove the item safely
      }
    },
    incrementQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
