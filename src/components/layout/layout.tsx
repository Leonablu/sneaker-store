import { FC, memo } from 'react';
import { LayoutUI } from '../ui';
import { TLayoutProps } from './type';

export const Layout: FC<TLayoutProps> = memo(({ children }) => (
  <LayoutUI>{children}</LayoutUI>
));
