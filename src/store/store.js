import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlide/cartSlide';

var store = configureStore({
  reducer: { cart: cartSlice },
});

export default store;
