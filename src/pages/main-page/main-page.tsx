import { FC, useEffect } from 'react';
import { CardProduct, Carousel } from '../../components/ui-kit';
import styles from './main-page.module.scss';
import { GuaranteesUI } from '../../components/ui';
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
import Splide from '@splidejs/splide';

const products = [
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 10,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '1',
    tags: ['35', '36', '37']
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 100,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '2',
    tags: ['34', '33', '31']
  },

  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '3',
    tags: ['30', '24', '27']
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '4',
    tags: ['30', '24', '27']
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '5',
    tags: ['30', '24', '27']
  }
];

export const MainPage: FC = () => {
  const a = 1;

  return (
    <>
      <h2 className={styles.header}>Лучшие из лучших</h2>
      <Carousel type='card' cards={products} />
      <GuaranteesUI />
      <h2 className={styles.header}>Блог</h2>
      <h2 className={styles.header}>Бренды</h2>
      <Carousel type='brand' />
    </>
  );
};
