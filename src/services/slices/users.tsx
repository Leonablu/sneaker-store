import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setCookie, deleteCookie } from '../../utils/cookie';
import { RootState } from '../store';
import { TOrder, TUser } from '../../types';
import { TLoginData, TRegisterData } from '../../utils/types';
import {
  getOrdersUser,
  getUserApi,
  loginUser,
  logoutUser,
  registerUser,
  updateUserApi
} from '../../utils/store-api';

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

export const getRegisterUser = createAsyncThunk(
  'users/register',
  async (registerData: TRegisterData) => {
    const data = await registerUser(registerData);
    if (!data.success) {
      return data;
    }
    setCookie('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  }
);

export const getLoginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }: TLoginData) => {
    console.log('Отправка данных на сервер:', { email, password });
    const data = await loginUser({ email, password });
    if (!data.success) {
      return data;
    }
    setCookie('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  }
);

export const getUser = createAsyncThunk('users/getUser', getUserApi);

export const getOrders = createAsyncThunk('users/getOrders', getOrdersUser);

export const updateUser = createAsyncThunk('users/updateUser', updateUserApi);

export const getLogoutUser = createAsyncThunk('user/logoutUser', async () => {
  await logoutUser();
  localStorage.removeItem('refreshToken');
  deleteCookie('accessToken');
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
      .addCase(getUser.pending, (state) => {
        state.isAuthChecked = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isAuthChecked = true;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(getUser.rejected, (state) => {
        state.isAuthChecked = true;
        state.isAuthenticated = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.request = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.request = false;
        state.error = action.error.message as string;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.request = false;
        state.error = null;
        state.response = action.payload.user;
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
      })
      .addCase(getOrders.pending, (state) => {
        state.request = true;
        state.error = null;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.request = false;
        state.error = action.error.message as string;
      })
      .addCase(getOrders.fulfilled, (state) => {
        state.request = false;
        state.error = null;
      });
  }
});

export const { userLogout, resetError } = userSlice.actions;
export const getUserState = (state: RootState): UserState => state.user;
export default userSlice.reducer;
