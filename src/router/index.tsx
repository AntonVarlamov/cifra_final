import { createBrowserRouter } from 'react-router-dom';
import Menu from '../pages/main';
import Settings from '../pages/settings';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu />,
    },
    {
        path: '/settings',
        element: <Settings />,
    },
    
    // Добавьте другие маршруты по мере необходимости
]);