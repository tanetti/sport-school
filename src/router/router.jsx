import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components';
import { Home } from '@/pages';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);
