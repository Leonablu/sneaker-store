import { FC, memo } from 'react';
import styles from './modal.module.scss';
import { TModalUIProps } from './type';
import { ModalOverlayUI } from '..';
import { CloseIcon } from '../../ui-kit';

export const ModalUI: FC<TModalUIProps> = memo(({ onClose, children }) => (
  <>
    <div className={styles.modal}>
      <button className={styles.button} type='button' onClick={onClose}>
        <CloseIcon />
      </button>
      <div className={styles.content}>{children}</div>
    </div>
    <ModalOverlayUI onClick={onClose} />
  </>
));
