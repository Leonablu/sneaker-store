import { FC, memo } from 'react';
import styles from './app-footer.module.scss';
import { Logo } from '../../ui-kit/logo/logo';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

import { SearchComponent } from '../../ui-kit/search';
import Grid from '@mui/material/Grid2';
import { ListContacts } from '../../ui-kit/contacts/contacts';
import { InstagramButton } from '../../ui-kit/navigation/social-media-buttons/instagram';
import { WhatsappButton } from '../../ui-kit/navigation/social-media-buttons/whatsapp';
import { VkButton } from '../../ui-kit/navigation/social-media-buttons/vk';
import { OrderButton } from '../../ui-kit/navigation/icon-button/orders';
import { ProfileButton } from '../../ui-kit/navigation/icon-button/profile';

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
            <Grid display='flex' gap='30px'>
              <InstagramButton />
              <VkButton />
              <WhatsappButton />
            </Grid>
            <ListContacts isComponentInHeader={false} />
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
            <Grid display='flex' gap='20px'>
              <OrderButton isheader={false} counter={2} />
              <ProfileButton isheader={false} />
            </Grid>

            <SearchComponent isComponentInHeader={false} />
          </Grid>
        </Grid>
      </nav>
    </footer>
  );
});

