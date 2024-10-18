import { FC } from 'react';
import { IconButton, Link } from '@mui/material';
import VK from '../../../../../assets/svg/vk-social-logotype.svg';

// иконки социальных сетей
export const VkButton: FC = () => (
  <>
    <Link href='#' target='_blank'>
      <IconButton aria-label='label VK'>
        <img src={VK} alt='Иконка вконтакте' />
      </IconButton>
    </Link>
  </>
);
