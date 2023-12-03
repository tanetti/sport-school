import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import Home from '@/pages/Home';

import Football from '@/pages/Football';
import Volleyball from '@/pages/Volleyball';
import Climbing from '@/pages/Climbing';
import Tennis from '@/pages/Tennis';
import Box from '@/pages/Box';
import News from '@/pages/News';
import About from '@/pages/About';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
        path: 'news/*',
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
