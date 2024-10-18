import styles from './catalog-shoes-page.module.scss';
import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import { Aside, Catalog } from '../../components';

export const CatalogShoesPage: FC = () => {
  const a = 1;
  return (
    <>
      <main>
        <Grid container className={styles.container}>
          <Aside />
          <Catalog activeCategory={'sneaker'} />
        </Grid>
      </main>
    </>
  );
};
