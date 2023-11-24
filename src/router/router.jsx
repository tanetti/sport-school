import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components';
import { Home, About, Football } from '@/pages';

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
        path: '/football',
        element: <Football />,
      },

      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);
