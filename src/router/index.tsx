import { createBrowserRouter } from 'react-router-dom';

import { Test } from '../pages/test';
import  Menu  from '../pages/main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
]);
