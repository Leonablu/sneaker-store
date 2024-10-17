import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import { AsideUI, ListItem } from '../../components/ui';
import styles from './catalog-accessories-page.module.scss';

export const CatalogAccessoriesPage: FC = () => {
  const a = 1;
  return (
    <>
      <main>
        <Grid container className={styles.container}>
          <AsideUI />
          <ListItem activeCategory={'igrushki'} />
        </Grid>
      </main>
    </>
  );
};
