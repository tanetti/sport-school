import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from '@/router';

export const App = () => (
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
