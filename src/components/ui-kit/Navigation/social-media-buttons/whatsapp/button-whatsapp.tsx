import { FC } from 'react';
import { IconButton, Link } from '@mui/material';
import WhatsApp from '../../../../../assets/svg/whatsapp.svg';

// иконки социальных сетей
export const WhatsappButton: FC = () => (
  <>
    <Link href='#' target='_blank'>
      <IconButton aria-label='label WhatsApp'>
        <img src={WhatsApp} alt='Иконка воцапа' />
      </IconButton>
    </Link>
  </>
);
