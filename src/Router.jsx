import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import Home from '@/pages/Home';

const About = lazy(() => import('@/pages/About'));
const Football = lazy(() => import('@/pages/Football'));
const Volleyball = lazy(() => import('@/pages/Volleyball'));
const Climbing = lazy(() => import('@/pages/Climbing'));
const Tennis = lazy(() => import('@/pages/Tennis'));

const Router = createBrowserRouter([
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
        path: '/volleyball',
        element: <Volleyball />,
      },

      {
        path: '/climbing',
        element: <Climbing />,
      },

      {
        path: '/tennis',
        element: <Tennis />,
      },

      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default Router;
