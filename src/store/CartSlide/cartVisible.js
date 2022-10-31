import { createSlice } from '@reduxjs/toolkit';

const cartVisibleSlice = createSlice({
  name: 'cartVisible',
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
      console.log(state.cartIsVisible);
    },
  },
});

export const cartVisibleAction = cartVisibleSlice.actions;
export default cartVisibleSlice.reducer;
