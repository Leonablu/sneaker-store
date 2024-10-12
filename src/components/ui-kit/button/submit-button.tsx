import { FC } from 'react';
import styles from './submit-button.module.scss';
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
  <button
    className={`${styles.submitButton} ${className || ''}`}
    onClick={onClick}
  >
    {text}
  </button>
);
