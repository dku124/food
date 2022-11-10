import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItem: [],
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
      }
      state.wishBtn = !state.wishBtn;
    },

    deleteFavoriteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.favoriteItem.find((item) => item.id === id);
      if (existingItem) {
        state.favoriteItem = state.favoriteItem.filter((item) => item.id !== id);
      }
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice.reducer;
