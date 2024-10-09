import {
  TCategories,
  TCreatePostData,
  TFavoritePost,
  TOrder,
  TOrderItem,
  TPost,
  TProduct,
  TQueryParams,
  TUpdatePost,
  TUserUpdate
} from '../types';
import {
  TAuthResponse,
  TCategoriesResponse,
  TLoginData,
  TOrderResponse,
  TOrdersResponse,
  TPostsResponse,
  TProductResponse,
  TRegisterData,
  TServerResponse,
  TUserResponse
} from './types';

// Базовый URL для запросов к API
const API_URL = import.meta.env.VITE_SNEAKER_API_URL;

// Проверка ответа сервера
const checkResponse = async <T>(response: Response): Promise<T> => {
  try {
    const data = await response.json();
    console.log('Данные ответа:', data);
    return data;
  } catch (error) {
    throw new Error(`Ошибка при разборе ответа: ${error}`);
  }
};

const setTokens = (accessToken: string): void => {
  localStorage.setItem('accessToken', accessToken);
};
// Получение accessToken из localStorage
const getAccessToken = (): string | null => localStorage.getItem('accessToken');

// Удаление токенов (очистка localStorage и куков)
const clearTokens = (): void => {
  localStorage.removeItem('accessToken');
};

// Функция для обновления токенов
export async function refreshTokens() {
  try {
    const response = await fetch('/auth/refresh-tokens', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();

    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
      console.log('accessToken успешно обновлен:', data.accessToken);
    }

    return data;
  } catch (error) {
    console.error('Ошибка при обновлении токенов:', error);
    throw error;
  }
}

// Регистрация пользователя
export const registerUser = async (
  data: TRegisterData
): Promise<TAuthResponse> => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    credentials: 'include',
    body: JSON.stringify(data)
  });

  return checkResponse<TAuthResponse>(response);
};

// Функция для авторизации пользователя
export const loginUser = async (data: TLoginData): Promise<TAuthResponse> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data)
  });

  const loginData = await checkResponse<TAuthResponse>(response);
  setTokens(loginData.accessToken);
  return loginData;
};

// Выход пользователя и удаление токенов
export const logoutUser = async (): Promise<void> => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken()
    } as HeadersInit
  });
  const result = await checkResponse<TServerResponse<{}>>(response);
  if (result && response.ok) {
    clearTokens();
  }
};

// Обёртка для запросов с автоматическим обновлением токенов
export const fetchWithRefresh = async <T>(
  url: RequestInfo,
  options: RequestInit
) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse<T>(res);
  } catch (err) {
    if ((err as { message: string }).message === 'jwt expired') {
      const refreshData = await refreshTokens();
      if (options.headers) {
        (options.headers as { [key: string]: string }).authorization =
          refreshData.accessToken;
      }
      const res = await fetch(url, options);
      return await checkResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};

// Получение информации о текущем пользователе
export const getUser = (): Promise<TUserResponse> =>
  fetchWithRefresh<TUserResponse>(`${API_URL}/users/me`, {
    headers: {
      authorization: getAccessToken()
    } as HeadersInit
  });

// Обновление информации о текущем пользователе
export const updateUser = (
  user: Partial<TUserUpdate>
): Promise<TUserResponse> =>
  fetchWithRefresh<TUserResponse>(`${API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getAccessToken()
    } as HeadersInit,
    body: JSON.stringify(user)
  });

// Поиск пользователя по ID или Email
export const getUserByIdOrEmail = async (
  idOrEmail: string
): Promise<TUserResponse> => {
  try {
    return await fetchWithRefresh<TUserResponse>(
      `${API_URL}/users/${idOrEmail}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: getAccessToken()
        } as HeadersInit
      }
    );
  } catch (error) {
    console.error('Ошибка при поиске пользователя:', error);
    throw error;
  }
};

// Удаление пользователя по ID
export const deleteUserById = async (id: string): Promise<TUserResponse> => {
  try {
    await fetchWithRefresh<TUserResponse>(`${API_URL}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });
    console.log(`Пользователь с ID ${id} успешно удален.`);
  } catch (error) {
    console.error('Ошибка при удалении пользователя:', error);
    throw error;
  }
  return Promise.reject('Данные не были получены.');
};

// Получение списка всех продуктов
export const getProducts = async (): Promise<TProduct[]> =>
  fetch(`${API_URL}/products`)
    .then((res) => checkResponse<TProductResponse>(res))
    .then((data) => data.products)
    .catch((error) => {
      console.error('Ошибка при получении продуктов:', error);
      return Promise.reject('Данные не были получены.');
    });

// Получение списка продуктов с фильтрацией и пагинацией
export const getFilteredProductsApi = async (
  params: TQueryParams
): Promise<TProductResponse> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== ''
    )
  );

  const query = new URLSearchParams(filteredParams).toString();

  return fetchWithRefresh<TProductResponse>(`${API_URL}/products?${query}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' } as HeadersInit
  });
};

// Создание нового продукта
export const createProduct = async (
  productData: {
    name: string;
    description: string;
    price: number;
    images: string;
    categoryId: number;
  } & Partial<
    Omit<TProduct, 'name' | 'description' | 'price' | 'images' | 'categoryId'>
  >
): Promise<TProduct> => {
  try {
    const token = getAccessToken();
    if (!token) throw new Error('Пользователь не авторизован');

    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(productData)
    });

    return await checkResponse<TProduct>(response);
  } catch (error) {
    throw new Error(`Ошибка при создании товара: ${(error as Error).message}`);
  }
};

// Получение похожих продуктов по идентификатору товара
export const getSimilarProducts = async (id: string): Promise<TProduct[]> => {
  try {
    const response = await fetch(`${API_URL}/products/similar/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: getAccessToken()
      } as HeadersInit
    });

    const data = await checkResponse<TProduct[]>(response);

    if (Array.isArray(data)) {
      return data;
    } else {
      throw new Error('Некорректный формат ответа от сервера');
    }
  } catch (error) {
    console.error('Ошибка при получении похожих продуктов:', error);
    throw error;
  }
};

// Получение товара по ID
export const getProductByID = async (id: string): Promise<TProduct> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TProduct>(response);
  } catch (error) {
    console.error('Ошибка при получении продукта:', error);
    return Promise.reject('Данные не были получены.');
  }
};

// Обновление товара по ID
export const updateProductByID = async (
  id: string,
  productData: { name: string; categoryId: number } & Partial<
    Omit<TProduct, 'name' | 'categoryId'>
  >
): Promise<TProduct> => {
  try {
    const token = getAccessToken();
    if (!token) throw new Error('Пользователь не авторизован');

    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(productData)
    });

    return await checkResponse<TProduct>(response);
  } catch (error) {
    throw new Error(
      `Ошибка при обновлении товара: ${(error as Error).message}`
    );
  }
};

// Удаление товара по ID
export const deleteProductByID = async (id: string): Promise<TProduct> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TProduct>(response);
  } catch (error) {
    console.error('Ошибка при удалении товара:', error);
    throw error;
  }
};

// Получение товара по Slug
export const getProductBySlug = async (
  slug: string
): Promise<TProductResponse> => {
  try {
    const response = await fetch(`${API_URL}/products/by-slug/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      } as HeadersInit
    });
    return await checkResponse<TProductResponse>(response);
  } catch (error) {
    console.error('Ошибка при получении продукта по slug:', error);
    throw new Error('Продукт не был найден.');
  }
};

// Получение продуктов по slug категории с фильтрацией и пагинацией
export const getProductsByCategory = async (
  categorySlug: string,
  params: Partial<TQueryParams>
): Promise<TProductResponse> => {
  const query = new URLSearchParams(
    params as Record<string, string>
  ).toString();

  try {
    const response = await fetchWithRefresh<TProductResponse>(
      `${API_URL}/products/by-category/${categorySlug}?${query}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' } as HeadersInit
      }
    );
    return response;
  } catch (error) {
    console.error('Ошибка при получении продуктов по категории:', error);
    throw error;
  }
};

// Добавление лайка товару по ID
export const addLikeToProduct = async (id: string): Promise<TProduct> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}/likes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TProduct>(response);
  } catch (error) {
    console.error(`Ошибка при добавлении лайка к товару с ID: ${id}`, error);
    throw error;
  }
};

// Удаление лайка товару по ID
export const removeLikeFromProduct = async (id: string): Promise<TProduct> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TProduct>(response);
  } catch (error) {
    console.error(`Ошибка при удалении лайка у товара с ID: ${id}`, error);
    throw error;
  }
};
// Получение списка категорий
export const fetchCategories = async (): Promise<TCategories> =>
  fetch(`${API_URL}/categories`)
    .then((res) => checkResponse<TCategoriesResponse>(res))
    .then((data) => data)
    .catch((error) => {
      console.error('Ошибка при получении списка категорий:', error);
      return Promise.reject('Данные не были получены.');
    });
// Создание новой категории
export const createCategory = async (
  name: string
): Promise<TCategoriesResponse> => {
  try {
    const token = getAccessToken();
    if (!token) throw new Error('Пользователь не авторизован');

    const response = await fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ name })
    });

    return await checkResponse<TCategoriesResponse>(response);
  } catch (error) {
    throw new Error(
      `Ошибка при создании категории: ${(error as Error).message}`
    );
  }
};
// Получение категории по Slug
export const getCategoryBySlug = async (
  slug: string
): Promise<TCategoriesResponse> => {
  try {
    const response = await fetch(`${API_URL}/categories/by-slug/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    return await checkResponse<TCategoriesResponse>(response);
  } catch (error) {
    console.error('Ошибка при получении категории по slug:', error);
    throw new Error('Категория не была найдена.');
  }
};
// Получение категории по ID
export const getCategoryById = async (id: string): Promise<TCategories> => {
  try {
    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TCategories>(response);
  } catch (error) {
    console.error('Ошибка при получении категории:', error);
    return Promise.reject('Данные не были получены.');
  }
};
// Обновление категории по ID
export const updateCategoryById = async (
  id: string,
  categories: Partial<TCategories>
): Promise<TCategoriesResponse> => {
  try {
    const token = getAccessToken();
    if (!token) throw new Error('Пользователь не авторизован');

    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(categories)
    });

    return await checkResponse<TCategoriesResponse>(response);
  } catch (error) {
    throw new Error(
      `Ошибка при обновлении категории: ${(error as Error).message}`
    );
  }
};
// Удаление категории по ID
export const deleteCategoryById = async (
  id: string
): Promise<TCategoriesResponse> => {
  try {
    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TCategoriesResponse>(response);
  } catch (error) {
    console.error('Ошибка при удалении категории:', error);
    throw error;
  }
};
// Получение списка постов с фильтрацией и пагинацией
export const getFilteredPostApi = async (
  params: TQueryParams
): Promise<TPostsResponse> => {
  const query = new URLSearchParams(params).toString();
  return fetchWithRefresh<TPostsResponse>(`${API_URL}/posts?${query}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' } as HeadersInit
  });
};
// Создание новой поста
export const createPosts = async (
  postData: TCreatePostData
): Promise<TPost> => {
  try {
    const token = getAccessToken();
    if (!token) throw new Error('Пользователь не авторизован');

    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(postData)
    });

    return await checkResponse<TPost>(response);
  } catch (error) {
    throw new Error(`Ошибка при создании статьи: ${(error as Error).message}`);
  }
};
// Получение поста по Slug
export const getPostsBySlug = async (slug: string): Promise<TPostsResponse> => {
  try {
    const response = await fetch(`${API_URL}/posts/by-slug/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    return await checkResponse<TPostsResponse>(response);
  } catch (error) {
    console.error('Ошибка при получении статьи по slug:', error);
    throw new Error('Статья не была найдена.');
  }
};
// Получение поста по ID
export const getPostsById = async (id: string): Promise<TPostsResponse> => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TPostsResponse>(response);
  } catch (error) {
    console.error('Ошибка при получении статьи:', error);
    return Promise.reject('Данные не были получены.');
  }
};
// Обновление поста по ID
export const updatePostsById = async (
  id: string,
  posts: TUpdatePost
): Promise<TPostsResponse> => {
  try {
    const token = getAccessToken();
    if (!token) throw new Error('Пользователь не авторизован');

    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify(posts)
    });

    return await checkResponse<TPostsResponse>(response);
  } catch (error) {
    throw new Error(
      `Ошибка при обновлении статьи: ${(error as Error).message}`
    );
  }
};
// Удаление поста по ID
export const deletePostsID = async (id: string): Promise<TPostsResponse> => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TPostsResponse>(response);
  } catch (error) {
    console.error('Ошибка при удалении статьи:', error);
    throw error;
  }
};
// Добавление статьи из избранного
export const addFavoritePost = async (id: string): Promise<TFavoritePost> => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}/favorite`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TFavoritePost>(response);
  } catch (error) {
    console.error('Ошибка при добавлении статьи в избранное:', error);
    return Promise.reject('Не удалось добавить статью в избранное.');
  }
};
// Удаление статьи из избранного
export const deleteFavoritePost = async (
  id: string
): Promise<TFavoritePost> => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}/favorite`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit
    });

    return await checkResponse<TFavoritePost>(response);
  } catch (error) {
    console.error('Ошибка при удалении статьи из избранного:', error);
    return Promise.reject('Не удалось удалить статью из избранного.');
  }
};
// Функция для получения всех заказов
export const getOrders = async (): Promise<TOrderResponse[]> => {
  const response = await fetch(`${API_URL}/orders`, {
    headers: {
      authorization: getAccessToken()
    } as HeadersInit
  });

  return checkResponse<TOrdersResponse>(response);
};
// Создания заказа
export const createOrder = async (orderData: {
  status: string;
  items: TOrderItem[];
}): Promise<TOrder> => {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit,
      body: JSON.stringify(orderData)
    });

    const result = await checkResponse<TOrder>(response);

    console.log('Заказ успешно создан:', result);
    return result;
  } catch (error) {
    console.error('Ошибка при создании заказа:', error);
    return Promise.reject('Не удалось создать заказ.');
  }
};
// Функция для получения заказов текущего пользователя
export const getOrdersUser = async (): Promise<TOrderResponse[]> => {
  const response = await fetch(`${API_URL}/orders/by-user`, {
    headers: {
      authorization: getAccessToken()
    } as HeadersInit
  });

  return checkResponse<TOrdersResponse>(response);
};
// Обновляет статус заказа
export const updateOrder = async (orderData: {
  event: string;
  id: string;
}): Promise<TOrder> => {
  try {
    const response = await fetch(`${API_URL}/orders/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: getAccessToken()
      } as HeadersInit,
      body: JSON.stringify(orderData)
    });

    const result = await checkResponse<TOrder>(response);

    console.log('Заказ успешно обновлен:', result);
    return result;
  } catch (error) {
    console.error('Ошибка при обновлении заказа:', error);
    return Promise.reject('Не удалось обновить заказ.');
  }
};
