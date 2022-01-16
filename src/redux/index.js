import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";

const reducers = {
    cart : cartSlice.reducer
}

const store = configureStore({
    reducer : reducers
});
export const cartActions = cartSlice.actions;
export default store;