import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('favoriteItem') !== null ? JSON.parse(localStorage.getItem('favoriteItem')) : [];

const setItemFavoriteFunc = (item) => {
  localStorage.setItem('favoriteItem', JSON.stringify(item));
};

const initialState = {
  favoriteItem: items,
  wishBtn: false,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const newItemFavorite = action.payload;
      const existFavoriteItem = state.favoriteItem.find((item) => item.id === newItemFavorite.id);
      if (!existFavoriteItem) {
        state.favoriteItem.push({
          id: newItemFavorite.id,
          title: newItemFavorite.title,
          image01: newItemFavorite.image01,
          image02: newItemFavorite.image02,
          image03: newItemFavorite.image03,
          price: newItemFavorite.price,
          quantity: 1,
        });
        state.wishBtn = !state.wishBtn;
      }

      setItemFavoriteFunc(state.favoriteItem.map((item) => item));
    },

    deleteFavoriteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.favoriteItem.find((item) => item.id === id);
      if (existingItem) {
        state.favoriteItem = state.favoriteItem.filter((item) => item.id !== id);
      }
      setItemFavoriteFunc(state.favoriteItem.map((item) => item));
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice.reducer;
