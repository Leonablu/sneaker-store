import { FC, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  useMediaQuery
} from '@mui/material';
import styles from './aside.module.scss';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

export const Aside: FC = () => {
  const matches = useMediaQuery('(min-width:360px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      {matches ? (
        <Grid container className={styles.container} gridColumn={1}>
          <Grid>
            <h3 className={styles.container_title}> Размер</h3>
          </Grid>
          <Grid gap='30px'>
            <h3 className={styles.container_filter_title}> Сезон</h3>
            <FormGroup className={styles.container_checkbox}>
              <FormControlLabel
                className={styles.container_checkbox_form}
                control={
                  <Checkbox
                    id={'1'}
                    size='large'
                    defaultChecked
                    sx={{
                      color: '#B3C0D2',
                      '&.Mui-checked': {
                        color: '#FF1818'
                      }
                    }}
                  />
                }
                label={<span className={styles.text}>Демисезон</span>}
              />
              <FormControlLabel
                sx={{
                  '&.Mui-checked .MuiFormControlLabel-label': {
                    fontWeight: 'bold'
                  }
                }}
                control={
                  <Checkbox
                    size='large'
                    sx={{
                      color: '#B3C0D2',
                      '&.Mui-checked': {
                        color: '#FF1818'
                      }
                    }}
                  />
                }
                label={<span className={styles.text}>Зима</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size='large'
                    sx={{
                      color: '#B3C0D2',
                      '&.Mui-checked': {
                        fontWeight: 'bold',
                        color: '#FF1818'
                      }
                    }}
                  />
                }
                label={<span className={styles.text}>Лето</span>}
              />
            </FormGroup>
          </Grid>
          <Grid>
            <h3 className={styles.container_filter_title}> Цена</h3>
          </Grid>
          <Grid>
            <h3 className={styles.container_filter_title}> Цвет</h3>
          </Grid>
          <Grid>
            <h3 className={styles.container_filter_title}> Категория</h3>
          </Grid>
          <Grid>
            <h3 className={styles.container_filter_title}> Бренды</h3>
          </Grid>
          <Grid>
            <h3 className={styles.container_filter_title}> Sale</h3>
          </Grid>
        </Grid>
      ) : (
        <>
          <Button onClick={handleDrawerToggle}>Open Menu</Button>
          <Collapse in={mobileOpen} timeout='auto' unmountOnExit>
            <div>
              <div>Color</div>
              <div className={styles.container_mobile}>Size</div>
            </div>
          </Collapse>
        </>
      )}
    </div>
  );
};
