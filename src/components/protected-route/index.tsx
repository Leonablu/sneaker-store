import { FC, useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SkeletonUI } from '../ui/skeleton';

type TProtectedRouteType = 'auth' | 'unauth';

type ProtectedRouteProps = {
  children: React.ReactElement;
  type: TProtectedRouteType;
};

// Функция, которая имитирует проверку авторизации пользователя
const authenticateUser = async (email: string, password: string) =>
  new Promise<{ isAuthenticated: boolean }>((resolve) => {
    setTimeout(() => {
      if (email === 'leona@mail.ru' && password === '123') {
        resolve({ isAuthenticated: true });
      } else {
        resolve({ isAuthenticated: false });
      }
    }, 1000);
  });

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, type }) => {
  const [user, setUser] = useState<null | {}>(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const checkAuth = async () => {
      const email = 'leona@mail.ru';
      const password = '123';

      try {
        const { isAuthenticated } = await authenticateUser(email, password);
        if (isAuthenticated) {
          setUser({});
        }
      } catch (error) {
        console.error('Ошибка проверки авторизации', error);
      } finally {
        setIsAuthChecked(true);
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (!isAuthChecked || loading) {
    return <SkeletonUI />;
  }

  if (type === 'auth' && !user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  if (type === 'unauth' && user) {
    return <Navigate to={from} />;
  }

  return children;
};
