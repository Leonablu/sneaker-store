import { createSlice } from '@reduxjs/toolkit';

export interface TCategoriesState {}

export const initialState: TCategoriesState = {};

const categoriesSlice = createSlice({
  name: '',
  initialState,
  reducers: {},
  selectors: {}
});

export const {} = categoriesSlice.actions;
export const categoriesSelector = categoriesSlice.selectors;
