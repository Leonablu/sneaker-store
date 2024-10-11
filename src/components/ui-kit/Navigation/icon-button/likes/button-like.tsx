import { FC } from 'react';
import styles from '../icon-button.module.scss';
import { Badge, IconButton } from '@mui/material';
import { Favorite} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// отображение иконок из header
type headerProps = {
  isheader: boolean;
  counter: number;
};
export const LikeButton: FC<headerProps> = ({ counter }) => (
  <>
    {/* здесь должен путь до страницы с избранным */}
    <Link to='/'>
      <Badge badgeContent={counter} color='error' showZero={false}>
        <IconButton
          aria-label='like'
          className={`${styles.buttonNavHeader} ${styles.iconButton}`}
        >
          <Favorite htmlColor='white' className={styles.icon} />
        </IconButton>
      </Badge>
    </Link>
  </>
);
