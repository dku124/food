import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlide/cartSlide';
import cartVisibleSlice from './CartSlide/cartVisible';

var store = configureStore({
  reducer: { cart: cartSlice, cartVisible: cartVisibleSlice },
});

export default store;
