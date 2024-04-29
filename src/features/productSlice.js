import { createSlice } from '@reduxjs/toolkit';
import ProductData from '../ProductData.json';

export const productSlice = createSlice({
  name: 'products',
  initialState: ProductData.products,
  reducers: {},
});

export default productSlice.reducer;
