import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import SearchPage from '../pages/search/SearchPage';
import { searchLoader } from '../pages/search/searchLoader';
const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/search',
                element: <SearchPage />,
                loader: searchLoader
            },
            {
                path: '/detail',
                element: <DetailPage />
            }
        ]
    }
])

export default router