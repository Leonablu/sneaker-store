import { FC } from 'react';
import styles from '../icon-button.module.scss';
import { Badge, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Person3Icon from '@mui/icons-material/Person3';
import { useSelector } from '../../../../../services/store';
import { getUserState } from '../../../../../services/slices/users';

// Отображение иконок из header
type HeaderProps = {
  isheader: boolean;
};

// Утилита для проверки наличия токена
const isTokenPresent = () => {
  const token = localStorage.getItem('accessToken');
  return token !== null;
};

export const ProfileButton: FC<HeaderProps> = ({ isheader }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const tokenPresent = isTokenPresent();

    if (tokenPresent) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Badge color='error'>
        {isheader ? (
          <IconButton
            className={`${styles.buttonNavHeader} ${styles.iconButton}`}
            onClick={handleProfileClick} // Обработчик клика
          >
            <Person3Icon htmlColor='white' className={styles.icon} />
          </IconButton>
        ) : (
          <IconButton
            aria-label='person'
            className={`${styles.buttonNavFooter} ${styles.iconButton}`}
            onClick={handleProfileClick} // Обработчик клика
          >
            <Person3Icon htmlColor='white' className={styles.icon} />
          </IconButton>
        )}
      </Badge>
    </>
  );
};
