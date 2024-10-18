import { combineReducers } from '@reduxjs/toolkit';
import { categoriesSlice } from './slices/categories';
import { orderSlice } from './slices/order';
import { productsSlice } from './slices/products/products';
import { userSlice } from './slices/user/user';

export const rootReducer = combineReducers({
  [categoriesSlice.name]: categoriesSlice.reducer,
  [orderSlice.name]: orderSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
  [userSlice.name]: userSlice.reducer
});
