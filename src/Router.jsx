import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import Home from '@/pages/Home';

const Football = lazy(() => import('@/pages/Football'));
const Volleyball = lazy(() => import('@/pages/Volleyball'));
const Climbing = lazy(() => import('@/pages/Climbing'));
const Tennis = lazy(() => import('@/pages/Tennis'));
const Box = lazy(() => import('@/pages/Box'));
const Swimming = lazy(() => import('@/pages/Swimming'));
const News = lazy(() => import('@/pages/News'));
const About = lazy(() => import('@/pages/About'));

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'football',
        element: <Football />,
      },

      {
        path: 'volleyball',
        element: <Volleyball />,
      },

      {
        path: 'climbing',
        element: <Climbing />,
      },

      {
        path: 'tennis',
        element: <Tennis />,
      },

      {
        path: 'box',
        element: <Box />,
      },

      {
        path: 'swimming',
        element: <Swimming />,
      },

      {
        path: 'schoolnews',
        element: <News />,
      },

      {
        path: 'about',
        element: <About />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export default Router;
