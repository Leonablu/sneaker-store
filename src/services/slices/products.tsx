import { createSlice } from '@reduxjs/toolkit';

export type TProductsState = {};

export const initialState: TProductsState = {};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  selectors: {}
});

export const {} = productsSlice.actions;
export const prodtctsSelector = productsSlice.selectors;
