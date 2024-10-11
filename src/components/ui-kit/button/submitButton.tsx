import { FC } from 'react';
import styles from './submitButton.module.scss';
import { Button } from '@mui/material';

// базовая кнопка для всех действий

export const SubmitButton: FC = () => <>
      <Button className={styles.submit} variant="contained">Подписаться</Button>
      
      </>;
