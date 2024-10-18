import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TOrder, TUser } from '../../../types';
import { TRegisterData } from '../../../utils/types';
import { getLoginUser, getLogoutUser, getRegisterUser } from './action';

export type UserState = {
  request: boolean;
  error: string | null;
  response: TUser | null;
  registerData: TRegisterData | null;
  user: TUser | null;
  userOrders: TOrder[];
  isAuthChecked: boolean;
  isAuthenticated: boolean;
  loginUserRequest: boolean;
  loading: boolean;
};

export const initialState: UserState = {
  request: false,
  error: null,
  response: null,
  registerData: null,
  user: null,
  userOrders: [],
  isAuthChecked: false,
  isAuthenticated: false,
  loginUserRequest: false,
  loading: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    userLogout: (state) => {
      state.user = null;
    },
    resetError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRegisterUser.pending, (state) => {
        state.request = true;
        state.error = null;
        state.isAuthChecked = true;
        state.isAuthenticated = false;
      })
      .addCase(getRegisterUser.fulfilled, (state, action) => {
        state.request = false;
        state.error = null;
        state.response = action.payload.user;
        state.user = action.payload.user;
        state.isAuthChecked = false;
        state.isAuthenticated = true;
      })
      .addCase(getRegisterUser.rejected, (state, action) => {
        state.request = false;
        state.error = action.error.message as string;
        state.isAuthChecked = false;
      })
      .addCase(getLoginUser.pending, (state) => {
        state.loginUserRequest = true;
        state.error = null;
        state.isAuthChecked = true;
        state.isAuthenticated = false;
      })
      .addCase(getLoginUser.fulfilled, (state, action) => {
        state.loginUserRequest = false;
        state.error = null;
        state.user = action.payload.user;
        state.isAuthChecked = true;
        state.isAuthenticated = true;
      })
      .addCase(getLoginUser.rejected, (state, action) => {
        state.loginUserRequest = false;
        state.error = action.error.message as string;
        state.isAuthChecked = false;
      })
      .addCase(getLogoutUser.pending, (state) => {
        state.request = true;
        state.error = null;
        state.isAuthChecked = true;
        state.isAuthenticated = false;
      })
      .addCase(getLogoutUser.rejected, (state, action) => {
        state.request = false;
        state.error = action.error.message as string;
        state.isAuthChecked = false;
        state.isAuthenticated = true;
      })
      .addCase(getLogoutUser.fulfilled, (state) => {
        state.request = false;
        state.error = null;
        state.user = null;
        state.isAuthChecked = true;
        state.isAuthenticated = false;
      });
  }
});

export const { userLogout, resetError, setAuth, setUser } = userSlice.actions;
export const getUserState = (state: RootState): UserState => state.user;
