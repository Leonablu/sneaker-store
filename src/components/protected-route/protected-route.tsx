import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { getUserState } from '../../services/slices/user/user';
import { SkeletonUI } from '../ui/skeleton';

export const isTokenPresent = () => {
  const token = localStorage.getItem('accessToken');
  return token !== null;
};

type ProtectedRouteProps = {
  children: React.ReactElement;
  onlyAuthorized?: boolean;
};

export const ProtectedRoute = ({
  children,
  onlyAuthorized
}: ProtectedRouteProps) => {
  const { isAuthChecked } = useSelector(getUserState);
  const location = useLocation();

  if (!isAuthChecked) {
    return <SkeletonUI />;
  }

  const tokenPresent = isTokenPresent();

  if (onlyAuthorized && !tokenPresent) {
    return <Navigate replace to='/login' state={{ from: location }} />;
  }

  if (!onlyAuthorized && tokenPresent) {
    const from = location.state?.from || { pathname: '/profile' };
    return <Navigate replace to={from} />;
  }

  return children;
};
