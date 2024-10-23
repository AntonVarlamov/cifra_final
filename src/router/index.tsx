import { createBrowserRouter } from 'react-router-dom';
import Menu from '../pages/main';
import Settings from '../pages/settings';
import About from '../pages/about';
import Accounting from '../pages/accounting';
import AccountingProd from '../pages/accountingProd';
import Scan from '../pages/scan';
import Settings1 from '../pages/settings1';
import Settings2 from '../pages/settings2';
import Tasks from '../pages/tasks';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu />,
    },
    {
        path: '/settings',
        element: <Settings />,
    },
    {
      path: '/about',
      element: <About />,
  },
  {
    path: '/accounting',
    element: <Accounting />,
},
{
  path: '/accountingProd',
  element: <AccountingProd />,
},
{
  path: '/scan',
  element: <Scan />,
},
{
  path: '/settings1',
  element: <Settings1 />,
},
{
  path: '/settings2',
  element: <Settings2 />,
},
{
  path: '/tasks',
  element: <Tasks />,
},
    
    // Добавьте другие маршруты по мере необходимости
]);