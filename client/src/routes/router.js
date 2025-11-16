import { createBrowserRouter } from 'react-router';
import RootLayout from '../components/RootLayout';
import ReportsGuard from '../components/ReportsGuard';
import AuthGuard from '../components/AuthGuard';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import NotFoundPage from '../components/NotFoundPage';
import ReportsPage from '../components/ReportsPage';
import ReportsDetails from '../components/ReportsDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      // AUTH ROUTES (public)
      {
        path: 'auth',
        Component: AuthGuard,
        children: [
          { path: 'login', Component: LoginPage },
          { path: 'register', Component: RegisterPage },
        ],
      },
      // REPORTS ROUTES (protected)
      {
        path: 'reports',
        Component: ReportsGuard,
        children: [
          { index: true, Component: ReportsPage },
          { path: ':id', Component: ReportsDetails },
        ],
      },
      // CATCH ALL — must be LAST
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
