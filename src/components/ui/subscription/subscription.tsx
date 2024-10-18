import { FC, memo } from 'react';
import styles from './subscription.module.scss';
import { SubmitButton } from '../../ui-kit';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

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
      <TextField
        id='standard-basic'
        label='email'
        variant='standard'
        placeholder='Введите Ваш email'
        className={styles.input}
      />
      <SubmitButton
        onClick={() => console.log('Вы подписались на рассылку!')}
        text='Подписаться'
      />
      <Link to='#' className={styles.link}>
        Политика конфиденциальности
      </Link>
    </form>
  </div>
));
