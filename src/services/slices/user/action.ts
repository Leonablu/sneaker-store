import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserApi,
  loginUser,
  logoutUser,
  registerUser
} from '../../../utils/store-api';
import { TLoginData, TRegisterData } from '../../../utils/types';
import { deleteCookie, setCookie } from '../../../utils/cookie';
import { setAuth, setUser } from './user';

export const getRegisterUser = createAsyncThunk(
  'user/register',
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

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch }) => {
    if (localStorage.getItem('refreshToken')) {
      getUserApi()
        .then((user) => dispatch(setUser(user.user)))
        .finally(() => dispatch(setAuth(true)));
    } else {
      dispatch(setAuth(true));
    }
  }
);

export const getLogoutUser = createAsyncThunk('user/logoutUser', async () => {
  await logoutUser();
  localStorage.removeItem('refreshToken');
  deleteCookie('accessToken');
});

// export const getOrders = createAsyncThunk('users/getOrders', getOrdersUser);

// export const updateUser = createAsyncThunk('users/updateUser', updateUserApi);
