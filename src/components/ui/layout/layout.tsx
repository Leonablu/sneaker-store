import { FC, memo } from 'react';
import { AppHeaderUI } from '../app-header/app-header';
import { AppFooterUI } from '..';
import { TLayoutUIProps } from './type';

export const LayoutUI: FC<TLayoutUIProps> = memo(({ children }) => (
  <>
    <AppHeaderUI />
    {children}
    <AppFooterUI />
  </>
));
