import { createBrowserRouter } from 'react-router-dom';

import { Test } from '../pages/test';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
  },
]);
