import { FC, memo } from 'react';
import styles from './app-footer.module.scss';
import { Logo } from '../../ui-kit/logo/logo';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import { ButtonNavigation } from '../../ui-kit/navigation/icon-button';
import { SearchComponent } from '../../ui-kit/search';
import Grid from '@mui/material/Grid2';
import { ListContacts } from '../../ui-kit/contacts/contacts';
import { SocialMediaButtons } from '../../ui-kit/navigation/social-media-buttons';

export const AppFooterUI: FC = memo(() => {
  const setActive = ({ isActive }: NavLinkRenderProps) =>
    `${styles.link} ${isActive ? styles.link_active : ''}`;
  return (
    <footer className={styles.footer}>
      <nav>
        <Grid container className={styles.grid_container}>
          <Grid>
            <Logo heightLogo='190px' widthLogo='190px' />
          </Grid>
          <Grid
            display='flex'
            flexDirection='column'
            gap='15px'
            justifyContent='end'
          >
            <SocialMediaButtons />
            <ListContacts iconAndTextColor={false} />
          </Grid>
          <Grid
            display='flex'
            flexDirection='column'
            gap='15px'
            paddingInlineStart='30px'
            justifyContent='center'
          >
            <NavLink to='/FAQ/#delivery' className={setActive}>
              Доставка
            </NavLink>
            <NavLink to='/FAQ/#guarantees' className={setActive}>
              Гарантии
            </NavLink>
            <NavLink to='/FAQ/#sizes' className={setActive}>
              Таблица размеров
            </NavLink>
            <NavLink to='/FAQ/#return-policy' className={setActive}>
              Обмен и возврат
            </NavLink>
            <NavLink to='/FAQ' className={setActive}>
              Вопросы и ответы
            </NavLink>
          </Grid>
          <Grid
            display='flex'
            flexDirection='column'
            justifyContent='end'
            alignItems='end'
            gap='35px'
          >
            <ButtonNavigation isheader={false} />
            <SearchComponent colorProps={false} />
          </Grid>
        </Grid>
      </nav>
    </footer>
  );
});
{
  /* <ButtonNavigation> </ButtonNavigation> // из ui-kit
<SearchComponent></SearchComponent>// из ui-kit
<socialMediaButtons></socialMediaButtons> // из ui-kit
<List></List> // из matrial ui для отображения доставка/гарантии */
}
