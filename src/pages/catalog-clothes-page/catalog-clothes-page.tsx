import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import { AsideUI, ListItem } from '../../components/ui';
import styles from './catalog-clothes-page.module.scss';

export const CatalogClothesPage: FC = () => {
  const a = 1;
  return (
    <>
      <main>
        <Grid container className={styles.container}>
          <AsideUI />
          <ListItem activeCategory={'nabory'} />
        </Grid>
      </main>
    </>
  );
};
