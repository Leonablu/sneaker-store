import { createSlice } from '@reduxjs/toolkit';

export interface TUsersState {

};

export const initialState: TUsersState = {

};

const usersSlice = createSlice({
  name: '',
  initialState,
  reducers: {

  },
  selectors: {

  }
});

export const { } = usersSlice.actions;
export const userSelector = usersSlice.selectors; 