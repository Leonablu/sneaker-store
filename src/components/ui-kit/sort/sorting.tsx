import { FC, memo } from 'react';
import styles from './sorting.module.scss';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import Grid from '@mui/material/Grid2';

type TSortingSelect = {
  sorting: string;
  onChange: (event: SelectChangeEvent) => void;
};
export const Sorting: FC<TSortingSelect> = memo(({ sorting, onChange }) => {
  const a = 1;
  return (
    <>
      <Grid className={styles.container_sort}>
        <p> Сортировка</p>
        <FormControl className={styles.form}>
          <Select
            className={styles.form_select}
            id='demo-simple-select-autowidth'
            value={sorting}
            inputProps={{ 'aria-label': 'Without label' }}
            displayEmpty
            onChange={onChange}
            label='Sort by'
            sx={{
              '.MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '.MuiInputBase-input': {
                fontSize: '16px'
              }
            }}
          >
            <MenuItem value={'default'}>
              <em className={styles.form_text}>по умолчанию</em>
            </MenuItem>
            <MenuItem value={'create date'}>новинки</MenuItem>
            <MenuItem value={'high price'}>по цене ↑</MenuItem>
            <MenuItem value={'low price'}>по цене ↓</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
});
