import { FC } from 'react';
import { IconButton, Link } from '@mui/material';
import viber from '../../../../assets//svg/instagram.svg';

// иконки социальных сетей
export const ViberButton: FC = () => (
  <>
    <Link href='#' target='_blank'>
      <IconButton aria-label='label viber'>
        <img src={viber} alt='Иконка вайбера' />
      </IconButton>
    </Link>
  </>
);
