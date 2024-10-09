import { FC } from 'react';
import styles from './buttonNavigation.module.scss';
import { Badge, IconButton } from '@mui/material';
import { Favorite, Person, ShoppingBag } from '@mui/icons-material';

// отображение иконок из header
type headerProps = {
  isheader: boolean;
};
export const ButtonNavigation: FC<headerProps> = ({ isheader }) => (
  <>
    {isheader ? (
      <>
        {' '}
        <Badge badgeContent={1} color='error' showZero={false}>
          <IconButton aria-label='purchase' className={styles.buttonNavHeader}>
            <ShoppingBag
              htmlColor='white'
              sx={{ width: '24px', height: '24px' }}
            />
          </IconButton>
        </Badge>
        <Badge color='error'>
          <IconButton aria-label='person' className={styles.buttonNavHeader}>
            <Person htmlColor='white' sx={{ width: '28px', height: '28px' }} />
          </IconButton>
        </Badge>
        <Badge badgeContent={2} color='error' showZero={false}>
          <IconButton aria-label='like' className={styles.buttonNavHeader}>
            <Favorite
              htmlColor='white'
              sx={{ width: '23px', height: '24px' }}
            />
          </IconButton>
        </Badge>
      </>
    ) : (
      <>
        {' '}
        <div className={styles.button_container}>
          <Badge badgeContent={1} color='error' showZero={false}>
            <IconButton
              aria-label='purchase'
              className={styles.buttonNavFooter}
            >
              <ShoppingBag
                htmlColor='white'
                sx={{ width: '24px', height: '24px' }}
              />
            </IconButton>
          </Badge>
          <Badge >
            <IconButton aria-label='person' className={styles.buttonNavFooter}>
              <Person
                htmlColor='white'
                sx={{ width: '28px', height: '28px' }}
              />
            </IconButton>
          </Badge>
        </div>
      </>
    )}
  </>
);
