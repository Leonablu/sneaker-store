import { FC, memo } from 'react';
import styles from './subscription.module.scss';
import { SubmitButton } from '../../ui-kit';

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
      <SubmitButton
        onClick={() => console.log('Вы подписались на рассылку!')}
        text='Подписаться'
      />
      <a href='#' className={styles.link}>
        Политика конфиденциальности
      </a>
    </form>
  </div>
));
