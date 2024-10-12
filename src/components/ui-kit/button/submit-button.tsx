import { FC } from 'react';
import styles from './submit-button.module.scss';
import { Button } from '@mui/material';

type TSubmitButtonProps = {
  text: string;
  onClick: () => void;
};

export const SubmitButton: FC<TSubmitButtonProps> = ({ text, onClick }) => (
  <>
    <Button className={styles.submit} variant='contained' onClick={onClick}>
      {text}
    </Button>
  </>
);
