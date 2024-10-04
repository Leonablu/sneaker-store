import { FC, memo } from 'react';
import styles from './app-footer.module.scss';
import { Logo } from '../logo/logo';
import { SocialsUI } from '../socials';
import { ContactsUI } from '..';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import { ButtonNavigation } from '../../ui-kit/Navigation/icon-button';
import { SearchComponent } from '../../ui-kit/search';

export const AppFooterUI: FC = memo(() => {
  const setActive = ({ isActive }: NavLinkRenderProps) =>
  `${styles.link} ${isActive ? styles.link_active : ''}`;
 return (
  <footer>
  <nav className={styles.footer}>
    <Logo />
    <div className={styles.footer_contacts}>
      <SocialsUI />
      <ContactsUI />
    </div>
    <div className={styles.footer_details}>
      <NavLink to='/FAQ/#delivery' className={setActive}>
        <p >Доставка</p>
      </NavLink>
      <NavLink to='/FAQ/#guarantees' className={setActive}>
        <p >Гарантии</p>
      </NavLink>
      <NavLink to='/FAQ/#sizes' className={setActive}>
        <p >Таблица размеров</p>
      </NavLink>
      <NavLink to='/FAQ/#return-policy' className={setActive}>
        <p >Обмен и возврат</p>
      </NavLink>
      <NavLink to='/FAQ' className={setActive}>
        <p >Вопросы и ответы</p>
      </NavLink>
    </div>
    <div className={styles.footer_actions}>
    <ButtonNavigation />
    <SearchComponent />
    </div>
  </nav>
  </footer>
 )
});
    {/* <ButtonNavigation> </ButtonNavigation> // из ui-kit
<SearchComponent></SearchComponent>// из ui-kit
<socialMediaButtons></socialMediaButtons> // из ui-kit
<List></List> // из matrial ui для отображения доставка/гарантии */}
