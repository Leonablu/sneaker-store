import { FC, memo } from 'react';
import { AppHeaderUI } from '../ui/app-header/app-header';
import { AppFooterUI } from '../ui';
import { TLayoutUIProps } from './type';
import styles from './layout.module.scss';

export const Layout: FC<TLayoutUIProps> = memo(({ children }) => (
  <>
    <AppHeaderUI />
    <div className={styles.main}>{children}</div>
    <AppFooterUI />
  </>
));
