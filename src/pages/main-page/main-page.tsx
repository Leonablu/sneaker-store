import { FC } from 'react';
import { Carousel, CardProduct } from '../../components/ui-kit';
import * as images from '../../assets/images';
import styles from './main-page.module.scss';
import Grid from '@mui/material/Grid2';
import * as advantages from '../../assets/svg/index';
import { Paper } from '@mui/material';
export const MainPage: FC = () => (
  <>
    <Grid display='flex' justifyContent='space-between'>
      {product.map((item) => (
        <CardProduct
          key={item.id}
          name={item.name}
          images={item.images}
          price={item.price}
          slug={item.slug}
          tags={item.tags}
        />
      ))}
    </Grid>
    <Grid container className={styles.container_advanteges}>
      <Paper
        className={styles.container_advanteges_circle}
        sx={{ background: ' rgba(179, 192, 210, 1)' }}
      >
        <img
          src={advantages.like}
          className={styles.container_advanteges_image}
        />
      </Paper>
      <Paper
        className={styles.container_advanteges_circle}
        sx={{ background: ' rgba(207, 235, 198, 1)' }}
      >
        <img
          src={advantages.help}
          className={styles.container_advanteges_image}
        />
      </Paper>
      <Paper
        className={styles.container_advanteges_circle}
        sx={{ background: ' rgba(255, 225, 225, 1)' }}
      >
        <img
          src={advantages.box}
          className={styles.container_advanteges_image}
        />
      </Paper>
      <p>Гарантируем качество товара</p>
      <p>Поможем подобрать размер</p>
      <p>Быстро доставим покупку</p>
    </Grid>
    <h2 className={styles.header}>Бренды</h2>
    <Carousel cards={brands} visibleCount={6} />
  </>
);

const product = [
  {
    name: 'Наименование товара',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '123',
    tags: ['35', '36', '37']
  },
  {
    name: 'Наименование товара Наименование товара ',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '1233',
    tags: ['35', '36', '37', '38', '39', '40', '41']
  },
  {
    name: 'Наименование товара Наименование товара ',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '1235',
    tags: ['35', '36', '37', '38', '39', '40', '41']
  },
  {
    name: 'Наименование товара Наименование товара ',
    slug: 'артикул',
    price: 1000,
    images:
      'https://i.pinimg.com/originals/6c/ba/fe/6cbafe83aeab6c19f878678ff6e41524.jpg',
    id: '1236',
    tags: ['35', '36', '37', '38', '39', '40', '41']
  }
];

const brands = [
  { src: images.porshe, alt: 'label brand porse' },
  { src: images.newBalance, alt: 'label brand new Balance' },
  { src: images.nike, alt: 'label brand nike' },
  { src: images.puma, alt: 'label brand puma' },
  { src: images.vans, alt: 'label brand vans' },
  { src: images.reebok, alt: 'label brand reebok' }
];
