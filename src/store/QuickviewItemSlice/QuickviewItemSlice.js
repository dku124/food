import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'item',
  initialState: { item: [] },
  reducers: {
    showItem(state, action) {
      state.item = action.payload;
    },
  },
});

export const showActions = itemSlice.actions;
export default itemSlice.reducer;
