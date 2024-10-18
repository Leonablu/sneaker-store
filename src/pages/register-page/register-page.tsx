import { FC, SyntheticEvent, useState } from 'react';
import { TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import styles from './register.module.scss';
import { SubmitButton } from '../../components/ui-kit';
import { useDispatch } from '../../services/store';
import { getRegisterUser } from '../../services/slices/user/action';

export const RegisterPage: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(getRegisterUser({ email, password, name }));
  };

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
            <h2 className={styles.title}>Регистрация</h2>
          </Grid>
          <Grid>
            <TextField
              fullWidth
              label='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant='standard'
              className={styles.textField}
              error={Boolean(errorText)}
            />
          </Grid>
          <Grid>
            <TextField
              fullWidth
              label='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant='standard'
              className={styles.textField}
              error={Boolean(errorText)}
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
              className={styles.textField}
              error={Boolean(errorText)}
            />
          </Grid>
          {errorText && (
            <Grid>
              <p className={styles.errorText}>{errorText}</p>
            </Grid>
          )}
          <div className={styles.submitButtonContainer}>
            <SubmitButton
              text='Регистрация'
              onClick={() => {}}
              className={styles.submitButtonCustom}
            />
          </div>
        </Grid>
      </form>
      <div className={styles.linkContainer}>
        <p className={styles.question}>
          Уже зарегистрированы?
          <Link to='/login' className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
