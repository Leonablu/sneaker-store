import { FC } from 'react';
import styles from '../icon-button.module.scss';
import { Badge, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// отображение иконок из header
type headerProps = {
  isheader: boolean;
  counter: number;
};
export const OrderButton: FC<headerProps> = ({ isheader, counter }) => (
  <>
    <>
      <Badge badgeContent={counter} color='error' showZero={false}>
        <Link to='/basket'>
          {isheader ? (
            <IconButton
              aria-label='purchase'
              className={`${styles.buttonNavHeader} ${styles.iconButton}`}
            >
              <ShoppingBag htmlColor='white' className={styles.icon} />
            </IconButton>
          ) : (
            <IconButton
              aria-label='purchase'
              className={`${styles.buttonNavFooter} ${styles.iconButton}`}
            >
              <ShoppingBag
                fontSize='large'
                htmlColor='white'
                className={styles.icon}
              />
            </IconButton>
          )}
        </Link>
      </Badge>
    </>
  </>
);
