import { FC } from 'react';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import styles from './profile-menu-navigation.module.scss';
import { ShoppingBag } from '@mui/icons-material';
import Person3Icon from '@mui/icons-material/Person3';

export const ProfileMenuNavigation: FC = () => {
  const setActive = ({ isActive }: NavLinkRenderProps) =>
    `${styles.link} ${isActive ? styles.link_active : ''}`;
  return (
    <div className={styles.content}>
      <NavLink to='/profile' className={setActive}>
        <Person3Icon className={styles.icon} />
      </NavLink>
      <NavLink to='/orders' className={setActive}>
        <ShoppingBag className={styles.icon} />
      </NavLink>
    </div>
  );
};
