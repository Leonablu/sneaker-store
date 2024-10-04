import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { SkeletonUI } from '../ui/skeleton';

type TProtectedRouteType = 'auth' | 'unauth';

type ProtectedRouteProps = {
  children: React.ReactElement;
  type: TProtectedRouteType;
};

export const ProtectedRoute = ({ 
  children, 
  type }: ProtectedRouteProps) => {
  //   const { user, isAuthChecked, loading } = useSelector((state) => state.user);
  const user = null;
  const isAuthChecked = false;
  const loading = false;

  const location = useLocation();
  const from = location.state?.from || '/';

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
