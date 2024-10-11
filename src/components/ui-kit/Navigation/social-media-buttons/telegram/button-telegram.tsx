import { FC } from 'react';
import { IconButton, Link } from '@mui/material';
import telegram from '../../../../../assets/svg/telegram .svg';

// иконки социальных сетей
export const TelegramButton: FC = () => (
  <>
    <Link href='#' target='_blank'>
      <IconButton aria-label='label telegram'>
        <img src={telegram} alt='Иконка телеграма' />
      </IconButton>
    </Link>
  </>
);
