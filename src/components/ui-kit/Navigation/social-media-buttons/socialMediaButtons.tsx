import { FC } from 'react';
import { IconButton, Link } from '@mui/material';
import instagram from '../../../../assets//svg/instagram.svg';
import VK from '../../../../assets//svg/vk-social-logotype.svg';
import WhatsApp from '../../../../assets//svg/whatsapp.svg';
import styles from './socialMediaButtons.module.scss';
// иконки социальных сетей
export const SocialMediaButtons: FC = () => (
  <>
    <div className={styles.container_icon}>
      <Link href='#' target='_blank'>
        <IconButton aria-label='label instagram'>
          <img src={instagram} alt='Иконка инстраграма' />
        </IconButton>
      </Link>
      <Link href='#' target='_blank'>
        <IconButton aria-label='label VK'>
          <img src={VK} alt='Иконка вконтакте' />
        </IconButton>
      </Link>
      <Link href='#' target='_blank'>
        <IconButton aria-label='label WhatsApp'>
          <img src={WhatsApp} alt='Иконка воцапа' />
        </IconButton>
      </Link>
    </div>
  </>
);
