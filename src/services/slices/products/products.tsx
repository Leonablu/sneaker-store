import { createSlice } from '@reduxjs/toolkit';
import { getProductsItem } from './action';
import { TProduct } from '../../../types';

export type TProductsState = {
  products: TProduct[] | null;
};

export const initialState: TProductsState = {
  products: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  selectors: {
    getListProduct: (action) => action.products
  },
  extraReducers: (builder) =>
    builder.addCase(getProductsItem.fulfilled, (state, action) => {
      state.products = action.payload;
    })
});

export const {} = productsSlice.actions;
export const { getListProduct } = productsSlice.selectors;
