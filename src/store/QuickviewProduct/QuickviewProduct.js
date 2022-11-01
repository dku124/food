import { createSlice } from '@reduxjs/toolkit';

const quickviewProduct = createSlice({
  name: 'view',
  initialState: { viewProduct: false },
  reducers: {
    toggle(state) {
      state.viewProduct = !state.viewProduct;
      // console.log(state.viewProduct);
    },
  },
});

export const viewAction = quickviewProduct.actions;
export default quickviewProduct.reducer;
