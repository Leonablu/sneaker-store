import { FC, useState } from 'react';
import styles from './sorting.module.scss';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const Sorting: FC = () => {
  const [input, setInput] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setInput(event.target.value);
  };

  return (
    <>
      <Grid className={styles.container_sort}>
        <p> Сортировка</p>
        <FormControl className={styles.form}>
          <Select
            className={styles.form_select}
            id='demo-simple-select-autowidth'
            value={input}
            inputProps={{ 'aria-label': 'Without label' }}
            displayEmpty
            onChange={handleChange}
            label='Sort by'
            sx={{
              '.MuiOutlinedInput-notchedOutline': {
                border: 'none'
              }
            }}
          >
            <MenuItem value=''>
              <em className={styles.form_text}>по умолчанию</em>
            </MenuItem>
            <MenuItem value={1}>новинки</MenuItem>
            <MenuItem value={2}>по цене ↑</MenuItem>
            <MenuItem value={3}>по цене ↓</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};
