import { FC, memo } from 'react';
import styles from './app-header.module.scss';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import { Logo } from '../../ui-kit/logo/logo';
import { SearchComponent } from '../../ui-kit/search';
import { ListContacts } from '../../ui-kit/contacts/contacts';
import Grid from '@mui/material/Grid2';
import { OrderButton } from '../../ui-kit/navigation/icon-button/orders';
import { ProfileButton } from '../../ui-kit/navigation/icon-button/profile';
import { LikeButton } from '../../ui-kit/navigation/icon-button/likes';

const RunningItem = () => (
  <span className={styles.running_items_line}>
    Только три дня скидка{' '}
    <span className={styles.running_items_line_sale}>-30%</span> на всё!
  </span>
);
export const AppHeaderUI: FC = memo(() => {
  const setActive = ({ isActive }: NavLinkRenderProps) =>
    `${styles.link} ${isActive ? styles.link_active : ''}`;

  return (
    <header>
      <div className={styles.running}>
        <div className={styles.running_items}>
          <RunningItem />
          <RunningItem />
        </div>
        <div aria-hidden='true' className={styles.running_items}>
          <RunningItem />
          <RunningItem />
        </div>
      </div>
      <nav>
        <Grid className={styles.grid_container}>
          <Grid display='flex' justifyContent='start' alignItems='center'>
            <ListContacts isComponentInHeader />
          </Grid>
          <Grid justifySelf='center' alignSelf='center'>
            <NavLink to='/' className={styles.link_logo}>
              <Logo widthLogo='95px' heightLogo='95px' />
            </NavLink>
          </Grid>
          <Grid
            display='flex'
            justifyContent='end'
            alignItems='center'
            gap='20px'
          >
            <OrderButton isheader counter={2} />
            <ProfileButton isheader />
            <LikeButton isheader counter={1} />
          </Grid>
          <Grid gridColumn='span 2' display='flex' gap='20px'>
            <NavLink to='/shoes' className={setActive}>
              <p>Кроссовки</p>
            </NavLink>
            <NavLink to='/clothes' className={setActive}>
              <p>Одежда</p>
            </NavLink>
            <NavLink to='/accessories' className={setActive}>
              <p>Аксессуары</p>
            </NavLink>
            <NavLink to='/blog' className={setActive}>
              <p>Блог</p>
            </NavLink>
          </Grid>
          <Grid justifySelf='end' alignSelf='start' marginBlockStart='-10px'>
            <SearchComponent isComponentInHeader />
          </Grid>
        </Grid>
      </nav>
    </header>
  );
});
