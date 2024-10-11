import { FC } from 'react';
import styles from '../icon-button.module.scss';
import { Badge, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Person3Icon from '@mui/icons-material/Person3';

// отображение иконок из header
type headerProps = {
  isheader: boolean;
};
export const ProfileButton: FC<headerProps> = ({ isheader }) => (
  <>
    <Link to='/profile'>
      <Badge color='error'>
        {isheader ? (
          <IconButton
            className={`${styles.buttonNavHeader} ${styles.iconButton}`}
          >
            <Person3Icon htmlColor='white' className={styles.icon} />
          </IconButton>
        ) : (
          <IconButton
            aria-label='person'
            className={`${styles.buttonNavFooter} ${styles.iconButton}`}
          >
            <Person3Icon htmlColor='white' className={styles.icon} />
          </IconButton>
        )}
      </Badge>
    </Link>
  </>
);
