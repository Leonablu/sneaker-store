import { FC, SyntheticEvent, useState } from 'react';
import { TextField } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import styles from './login.module.scss';
import { SubmitButton } from '../../components/ui-kit';
import { useDispatch, useSelector } from '../../services/store';
import { getUserState } from '../../services/slices/user/user';
import { getLoginUser } from '../../services/slices/user/action';

export const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isAuthenticated } = useSelector(getUserState);
  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(getLoginUser({ email, password }));
  };

  if (isAuthenticated) {
    return <Navigate to={'/profile'} />;
  }
  return (
    <div className={styles.authContainer}>
      <form onSubmit={handleSubmit}>
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
              text='Вход'
              onClick={() => {}}
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
};
