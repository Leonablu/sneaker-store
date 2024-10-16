import { useState } from 'react';
import styles from './catalog-shoes-page.module.scss';
import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import { TProduct } from '../../types';
import { AsideUI, ListItem } from '../../components/ui';

const products: Partial<TProduct>[] = [
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 10,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '1',
    tags: ['35', '36', '37'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 100,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '2',
    tags: ['34', '33', '31'],
    categoryId: 1
  },

  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '3',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '4',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '5',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 10,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '6',
    tags: ['35', '36', '37'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '7',
    tags: ['30', '24', '27'],
    categoryId: 1
  },

  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '8',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '9',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '10',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '11',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '12',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '13',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '14',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '15',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '16',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '17',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '18',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '19',
    tags: ['30', '24', '27'],
    categoryId: 1
  },
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '20',
    tags: ['30', '24', '27'],
    categoryId: 1
  }
];

export const CatalogShoesPage: FC = () => {
  const [sortBy, setSortBy] = useState('');

  const sortProducts = () => {
    // тут должна быть реализация сортировки
  };
  return (
    <>
      <Grid container className={styles.container}>
        <AsideUI />
        <ListItem
          products={products}
          onSort={() => console.log('сортируем')}
          activeCategory={1}
        />
      </Grid>
    </>
  );
};
