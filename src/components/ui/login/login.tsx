import { FC } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styles from './login.module.scss';
import { SubmitButton } from '../../ui-kit';
import { Link } from 'react-router-dom';

interface LoginUIProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  error: string | null;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginUI: FC<LoginUIProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  error,
  onSubmit
}) => (
  <div className={styles.authContainer}>
    <form onSubmit={onSubmit}> 
      <Grid
        container
        spacing={2}
        direction='column'
        className={styles.formGrid}
      >
        <Grid>
          <h2 className={styles.title}>Вход</h2>
        </Grid>
        <Grid>
          <TextField
            fullWidth
            label='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant='standard'
            className={`${styles.textField}`}
            error={Boolean(error)}
          />
        </Grid>
        <Grid>
          <TextField
            fullWidth
            label='Пароль'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant='standard'
            className={`${styles.textField}`}
            error={Boolean(error)}
          />
        </Grid>
        {error && (
          <Grid>
            <p className={styles.errorText}>{error}</p>
          </Grid>
        )}
        <div className={styles.submitButtonContainer}>
          <SubmitButton
            type='submit'
            text='Вход'
            className={styles.submitButtonCustom}
          />
        </div>
      </Grid>
    </form>
    <div className={styles.linkContainer}>
      <p className={styles.question}>
        Вы - новый пользователь?
        <Link to='/registration' className={styles.link}>
          Зарегистрироваться
        </Link>
      </p>
    </div>
  </div>
);
