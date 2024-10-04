import { FC, memo } from 'react';
import styles from './app-header.module.scss';
import { ContactsUI } from '..';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import { ButtonNavigation } from '../../ui-kit/Navigation/icon-button';
import { Logo } from '../../ui-kit/logo/logo';
import { SearchComponent } from '../../ui-kit/search';

export const AppHeaderUI: FC = memo(() => {
  const setActive = ({ isActive }: NavLinkRenderProps) =>
    `${styles.link} ${isActive ? styles.link_active : ''}`;
  return (
    <header>
      <div className={styles.running_line}>Бегущая строка</div>
      <nav className={styles.menu}>
        <div className={styles.menu_part_top}>
          <ContactsUI />
          <NavLink to='/'>
            <Logo />
          </NavLink>
          <ButtonNavigation />
        </div>
        <div className={styles.menu_part_bottom}>
          <div className={styles.menu_tabs}>
            <NavLink to='/shoes' className={setActive}>
              <p className=''>Кроссовки</p>
            </NavLink>
            <NavLink to='/clothes' className={setActive}>
              <p className=''>Одежда</p>
            </NavLink>
            <NavLink to='/accessories' className={setActive}>
              <p className=''>Аксессуары</p>
            </NavLink>
            <NavLink to='/blog' className={setActive}>
              <p className=''>Блог</p>
            </NavLink>
          </div>
          <SearchComponent />
        </div>
      </nav>
    </header>
  );
});

{
  /* <ButtonNavigation> </ButtonNavigation> // из ui-kit
<SearchComponent></SearchComponent>// из ui-kit */
}
