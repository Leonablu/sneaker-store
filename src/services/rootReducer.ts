import { combineReducers } from '@reduxjs/toolkit';
import { categoriesSlice } from './slices/categories';
import { orderSlice } from './slices/order';
import { productsSlice } from './slices/products';
import { usersSlice } from './slices/users';

export const rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
  order: orderSlice.reducer,
  products: productsSlice.reducer,
  users: usersSlice.reducer
});
