import { TCategories, TPost, TProduct, TUser } from '../types';

export type TServerResponse<T> = {
  success: boolean;
  error?: string;
} & T;

export type TRefreshResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
}>;

export type TAuthResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
  user: TUser;
}>;

export type TRegisterData = {
  email: string;
  name: string;
  password: string;
  roles?: string;
};

export type TLoginData = {
  email: string;
  password: string;
};

export type TOrderResponse = {
  id: number;
  number: string;
  status: string;
  total: number;
  createdAt: string;
};

export type TOrdersResponse = TOrderResponse[];

export type TCategoriesResponse = TServerResponse<TCategories> & {};

export type TUserResponse = TServerResponse<{
  user: TUser;
  name: string;
  email: string;
}>;

export type TProductResponse = TServerResponse<{
  products: TProduct[];
  length: number;
}>;

export type TPostsResponse = TServerResponse<{
  posts: TPost[];
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}>;
