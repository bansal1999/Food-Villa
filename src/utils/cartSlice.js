import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Apples", "Banana"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;






/**
 * Create Store
 * -- configureStore() -- RTK
 *
 * Provide My store to app (whole)
 * - <Provider store = {store}> -- import from react-redux
 *
 * Slice
 * -RTK - createSlice({
 *      name: "",
 *      initialState:
 *      reducers: {
 *  addItem: (state, action) => {state = action.payload}}
 * })
 *
 * export const {addItem, removeItem, etc...} = cartSlice.actions;
 * export default cartSlice.reducer;
 *
 * Put that Slice into store
 * - {
 *  reducer: {
 *      cart: cartSlice,
 *      user: userSlice
 *    }
 * }
 *
 */
