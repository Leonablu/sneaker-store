import { FC } from 'react';
import Grid from '@mui/material/Grid2';

import styles from './catalog-clothes-page.module.scss';
import { Aside, Catalog } from '../../components';

export const CatalogClothesPage: FC = () => {
  const a = 1;
  return (
    <>
      <main>
        <Grid container className={styles.container}>
          <Aside />
          <Catalog activeCategory={'nabory'} />
        </Grid>
      </main>
    </>
  );
};
