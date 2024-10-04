import styles from './modal-overlay.module.scss';

export const ModalOverlayUI = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.overlay} onClick={onClick} id='overlay' />
);
