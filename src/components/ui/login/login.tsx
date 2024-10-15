import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import styles from './login.module.scss';
import { SubmitButton } from '../../ui-kit';

// Моковая функция для имитации логина
const mockLogin = async (email: string, password: string) => {
  if (email === 'leona@mail.ru' && password === '123') {
    return { success: true };
  } else {
    throw new Error('Неверный email или пароль');
  }
};

export const LoginUI: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/profile';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorText('');

    if (!email || !password) {
      setErrorText('Пожалуйста, заполните все поля');
      return;
    }

    try {
      const response = await mockLogin(email, password);
      if (response.success) {
        console.log('Успешный вход');
        navigate(from);
      }
    } catch (error) {
      setErrorText((error as Error).message);
    }
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
              className={`${styles.textField}`}
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
