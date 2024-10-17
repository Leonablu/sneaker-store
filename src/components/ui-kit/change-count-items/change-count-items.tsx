import { FC, memo, useState } from 'react';
import styles from './change-count-items.module.scss';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';

type TCountSelect = {
  itemsPerPage: number;
  onChange: (count: number) => void;
};
export const CountButton: FC<TCountSelect> = memo(
  ({ itemsPerPage, onChange }) => {
    const a = 1;
    return (
      <>
        <Grid className={styles.container}>
          <p> Количество </p>
          <IconButton
            value={itemsPerPage}
            aria-label='left aligned'
            className={`${styles.container_button} ${itemsPerPage === 18 ? styles.container_button_active : ''}`}
            onClick={() => onChange(18)}
          >
            18
          </IconButton>
          <IconButton
            value={itemsPerPage}
            aria-label='centered'
            className={`${styles.container_button} ${itemsPerPage === 30 ? styles.container_button_active : ''}`}
            onClick={() => onChange(30)}
          >
            30
          </IconButton>
          <IconButton
            value={itemsPerPage}
            aria-label='right aligned'
            className={`${styles.container_button} ${itemsPerPage === 60 ? styles.container_button_active : ''}`}
            onClick={() => onChange(60)}
          >
            60
          </IconButton>
        </Grid>
      </>
    );
  }
);
