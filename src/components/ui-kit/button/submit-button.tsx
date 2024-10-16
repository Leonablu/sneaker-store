import { FC } from 'react';
import styles from './submit-button.module.scss';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  text,
  onClick,
  className
}) => (
  <>
    <Button
      className={`${styles.submit} ${className || ''}`}
      variant='contained'
      onClick={onClick}
    >
      {text}
    </Button>
  </>
);
