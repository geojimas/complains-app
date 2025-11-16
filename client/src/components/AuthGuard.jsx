import { Outlet, Navigate } from 'react-router';

export default function AuthGuard() {
  //const isAuth = false
  const isAuth = true;

  if (isAuth) {
    return <Navigate to="/reports" replace />;
  }

  return <Outlet />;
}
