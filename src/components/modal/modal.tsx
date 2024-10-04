import { FC, memo, useEffect } from 'react';
import { TModalProps } from './type';
import { ModalUI } from '../ui';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modals');

export const Modal: FC<TModalProps> = memo(({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose}>{children}</ModalUI>,
    modalRoot as HTMLDivElement
  );
});
