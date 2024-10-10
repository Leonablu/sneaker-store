import { FC } from 'react';
import styles from './searchComponent.module.scss';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// поисковая строка
type SerchColorProps = {
  colorProps: boolean;
};
export const SearchComponent: FC<SerchColorProps> = ({ colorProps }) => (
  <>
    <Paper
      component='form'
      className={styles.search_container}
      sx={{
        backgroundColor: colorProps
          ? 'rgb(255 255 255 / 1)'
          : 'rgba(179, 192, 210, 0.2)'
      }}
    >
      <InputBase
        sx={{
          ml: 5,
          flex: 1,
          fontSize: '18px',
          color: colorProps ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
        }}
        placeholder='Поиск'
        inputProps={{ 'aria-label': 'search product' }}
      />
      <Paper
        className={styles.search_container_rectangle}
        sx={{
          backgroundColor: colorProps
            ? 'rgba(41, 41, 45, 1)'
            : 'rgba(25, 25, 25, 1)'
        }}
      >
        <SearchIcon className={styles.search_icon} viewBox='0 0 28 28' />
      </Paper>
    </Paper>
  </>
);
