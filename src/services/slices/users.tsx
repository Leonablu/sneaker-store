import { createSlice } from '@reduxjs/toolkit';

export interface TUsersState {}

export const initialState: TUsersState = {};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {}
});

export const {} = usersSlice.actions;
export const userSelector = usersSlice.selectors;
