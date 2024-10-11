import { FC, memo } from 'react';
import styles from './subscription.module.scss';

export const SubscriptionUI: FC = memo(() => (
  <div className={styles.container}>
    <h3 className={styles.title}>
      Подпишись на рассылку и получи скидку до 10 %{' '}
    </h3>
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type='text' placeholder='Введите ваш email' />
      <button type='submit'>Подписаться</button>
      <a href='#' className={styles.link}>Политика конфиденциальности</a>
    </form>
  </div>
));
