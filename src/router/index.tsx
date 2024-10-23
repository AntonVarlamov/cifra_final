import { createBrowserRouter } from 'react-router-dom';

import { Test } from '../pages/test';
import { HomeWork2 } from '../pages/homeWork2';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
  },
  {
    path: '/homework2',
    element: <HomeWork2/>,
  },
]);
