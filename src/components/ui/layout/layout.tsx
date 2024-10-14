import { FC, memo } from 'react';
import { AppHeaderUI } from '../app-header/app-header';
import { AppFooterUI } from '..';
import { TLayoutUIProps } from './type';
import styles from './layout.module.scss';
import { createTheme, ThemeProvider } from '@mui/material';


export const LayoutUI: FC<TLayoutUIProps> = memo(({ children }) => (
  <>
    <AppHeaderUI />
      <div className={styles.main}>{children}</div>
    <AppFooterUI />
  </>
));
