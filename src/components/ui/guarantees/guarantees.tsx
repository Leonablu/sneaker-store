import { FC, memo } from 'react';
import styles from './guarantees.module.scss';
import Grid from '@mui/material/Grid2';
import { Paper } from '@mui/material';
import * as advantages from '../../../assets/svg/index';


export const GuaranteesUI: FC = memo(() => (
  <>
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
  </>
));
