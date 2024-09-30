export type TUser = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  password: string;
  provider: string | null;
  isAdmin: boolean;
  isBlocked: boolean;
  name: string;
  avatarPath: string;
  about: string;
  phone: string;
  roles: string[];
  likes?: TLike[];
  favoritesPost: TPost[];
};

export type TLike = {
  id: string;
  userId: string;
  productId: string;
  user: TUser;
};

export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string;
  createdAt: string;
  slug: string;
  discount: number;
  isPublished: boolean;
  stock: number;
  tags: string[];
  likes: TLike[];
  categoryId: number;
  user: TUser;
};

export type TCategories = {
  id: string;
  name: string;
  slug: string;
};

export type TListProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string;
};

export type TQueryParams = {
  sort: string;
  searchTerm: string;
  ratings: string;
  minPrice: string;
  maxPrice: string;
  categoryId: string;
  perPage: string;
  page: string;
};

export type TPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  description: string;
  body: string;
  favoritesCount: number;
  images: string;
  tags: string[];
  isPublished: boolean;
  products: TProduct;
  user: TUser;
};
export type TFavoritePost = {
  message: string;
  favorites: {
    id: string;
    userId: string;
    productId: string;
  };
};

export type TOrder = {
  id: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  status: string;
  total: number;
  userId: string;
  items: TOrderItem[];
};

export type TOrderItem = {
  quantity: number;
  price: number;
  productId: string;
};
