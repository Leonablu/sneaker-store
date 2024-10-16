import { FC } from 'react';
import styles from './submit-button.module.scss';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  text,
  onClick,
  className,
  disabled = false
}) => (
  <Button
    className={`${styles.submit} ${className || ''}`}
    variant='contained'
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </Button>
);
