import { Outlet, Navigate } from 'react-router';

export default function ReportsGuard() {
  //const isAuth = false
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
