import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlide/cartSlide';
import cartVisibleSlice from './CartSlide/cartVisible';
import favoriteSlice from './FavoriteSlice/FavoriteSlice';
import itemSlice from './QuickviewItemSlice/QuickviewItemSlice';
import quickviewProduct from './QuickviewProduct/QuickviewProduct';

var store = configureStore({
  reducer: {
    cart: cartSlice,
    cartVisible: cartVisibleSlice,
    view: quickviewProduct,
    item: itemSlice,
    favorite: favoriteSlice,
  },
});

export default store;
