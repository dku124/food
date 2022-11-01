import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlide/cartSlide';
import cartVisibleSlice from './CartSlide/cartVisible';
import quickviewProduct from './QuickviewProduct/QuickviewProduct';

var store = configureStore({
  reducer: { cart: cartSlice, cartVisible: cartVisibleSlice, view: quickviewProduct },
});

export default store;
