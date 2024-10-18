import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../../utils/store-api';
import { TProduct } from '../../../types';

export const getProductsItem = createAsyncThunk<TProduct[]>(
  'products/getProducts',
  async function () {
    return await getProducts();
  }
);
