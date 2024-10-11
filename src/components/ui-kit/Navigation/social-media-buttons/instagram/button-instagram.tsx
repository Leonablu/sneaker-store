import { FC } from 'react';
import { IconButton, Link } from '@mui/material';
import instagram from '../../../../../assets/svg/instagram.svg';

// иконки социальных сетей
export const InstagramButton: FC = () => (
  <>
    <Link href='#' target='_blank'>
      <IconButton aria-label='label instagram'>
        <img src={instagram} alt='Иконка инстраграма' />
      </IconButton>
    </Link>
  </>
);
