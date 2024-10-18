import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import styles from './catalog-accessories-page.module.scss';
import { Aside, Catalog } from '../../components';

export const CatalogAccessoriesPage: FC = () => {
  const a = 1;
  return (
    <>
      <main>
        <Grid container className={styles.container}>
          <Aside />
          <Catalog activeCategory={'igrushki'} />
        </Grid>
      </main>
    </>
  );
};
