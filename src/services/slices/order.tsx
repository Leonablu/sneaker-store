import { createSlice } from '@reduxjs/toolkit';

export interface TOrderState {}

export const initialState: TOrderState = {};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  selectors: {}
});

export const {} = orderSlice.actions;
export const orderSelector = orderSlice.selectors;
