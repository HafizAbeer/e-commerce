import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore `time` field if it contains Firebase Timestamp
        ignoredPaths: ["cart.time"],
        ignoredActions: ["cart/addToCart", "cart/deleteFromCart"],
      },
    }),
});

// Persist cart state to localStorage
store.subscribe(() => {
  const cartState = store.getState().cart;
  try {
    localStorage.setItem("cart", JSON.stringify(cartState));
  } catch (error) {
    console.error("Error saving cart state to localStorage:", error);
  }
});
