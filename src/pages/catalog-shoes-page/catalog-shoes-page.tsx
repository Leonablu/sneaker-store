import { useState } from 'react';
import styles from './catalog-shoes-page.module.scss';
import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import { TProduct } from '../../types';
import { AsideUI, ListItem } from '../../components/ui';

export const CatalogShoesPage: FC = () => {
  const a = 1;
  return (
    <>
      <main>
        <Grid container className={styles.container}>
          <AsideUI />
          <ListItem activeCategory={'sneaker'} />
        </Grid>
      </main>
    </>
  );
};
