import { createSlice } from '@reduxjs/toolkit';

export interface TCategoriesState {}

export const initialState: TCategoriesState = {};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  selectors: {}
});

export const {} = categoriesSlice.actions;
export const categoriesSelector = categoriesSlice.selectors;
