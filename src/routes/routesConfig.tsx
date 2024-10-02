import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import SearchPage from '../pages/SearchPage';
const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                index:true,
                element: <HomePage />
            },
            {
                path: '/search',
                element: <SearchPage />
            },
            {
                path: '/detail',
                element: <DetailPage />
            }
        ]
    }
])

export default router