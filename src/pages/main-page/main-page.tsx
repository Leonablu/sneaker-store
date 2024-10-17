import { FC } from 'react';
import { Carousel } from '../../components/ui-kit/carousel';
import styles from './main-page.module.scss';
import { GuaranteesUI } from '../../components/ui';
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
import { useSelector } from '../../services/store';
import { getListProduct } from '../../services/slices/products/products';
import { SkeletonUI } from '../../components/ui/skeleton';
import { AdProduct, Blog } from '../../components';
import * as images from '../../assets/images';

export const MainPage: FC = () => {
  const products = useSelector(getListProduct);
  if (!products) {
    return <SkeletonUI />;
  }
  return (
    <>
      <section className={styles.content}>
        <AdProduct productList={list} />
        <h2 className={styles.header}>Лучшие из лучших</h2>
        <Carousel type='card' cards={products} />
        <GuaranteesUI />
        <h2 className={styles.header}>Блог</h2>
        <Blog />
        <h2 className={styles.header}>Бренды</h2>
        <Carousel type='brand' />
      </section>
    </>
  );
};

const list = [
  {
    name: 'ADIDAS YEEZY BOOST',
    description: 'Городские кроссовки в ярком стиле 80-х',
    images: images.yeezy,
    id: '1',
    price: 14,
    createdAt: '',
    slug: '',
    discount: 0,
    isPublished: true,
    stock: 14000,
    tags: [''],
    likes: [],
    categoryId: 1,
    category: {
      name: '',
      id: '',
      slug: ''
    },
    user: {
      id: '',
      // createdAt: string;
      // updatedAt: string;
      email: '',
      password: '',
      // provider: string | null;
      // isAdmin: boolean;
      // isBlocked: boolean;
      name: '',
      avatarPath: '',
      about: '',
      phone: '',
      roles: [''],
      likes: [],
      favoritesPost: []
    }
  },
  {
    name: 'ADIDAS NITE JOGGER',
    description: 'Городские кроссовки в ярком стиле 80-х',
    images: images.nite,
    id: '2',
    price: 14,
    createdAt: '',
    slug: '',
    discount: 0,
    isPublished: true,
    stock: 14000,
    tags: [],
    likes: [],
    categoryId: 1,
    category: {
      name: '',
      id: '',
      slug: ''
    },
    user: {
      id: '',
      // createdAt: string;
      // updatedAt: string;
      email: '',
      password: '',
      // provider: string | null;
      // isAdmin: boolean;
      // isBlocked: boolean;
      name: '',
      avatarPath: '',
      about: '',
      phone: '',
      roles: [''],
      likes: [],
      favoritesPost: []
    }
  },
  {
    name: 'NIKE AIR MAX',
    description: 'Городские кроссовки в ярком стиле 80-х',
    images: images.air,
    id: '3',
    price: 14,
    createdAt: '',
    slug: '',
    discount: 0,
    isPublished: true,
    stock: 14000,
    tags: [],
    likes: [],
    categoryId: 1,
    category: {
      name: '',
      id: '',
      slug: ''
    },
    user: {
      id: '',
      // createdAt: string;
      // updatedAt: string;
      email: '',
      password: '',
      // provider: string | null;
      // isAdmin: boolean;
      // isBlocked: boolean;
      name: '',
      avatarPath: '',
      about: '',
      phone: '',
      roles: [''],
      likes: [],
      favoritesPost: []
    }
  }
];
