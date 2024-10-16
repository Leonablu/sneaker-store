import { FC } from 'react';
import styles from './submit-button.module.scss';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset'; // Добавляем поддержку свойства type
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  text,
  onClick,
  className,
  disabled = false,
  type = 'button'
}) => (
  <Button
    className={`${styles.submit} ${className || ''}`}
    variant='contained'
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {text}
  </Button>
);
