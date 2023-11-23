import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components';
import { Home, About } from '@/pages';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/about',
        element: <About />,
      },

      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);
