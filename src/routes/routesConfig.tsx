import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import SearchPage from '../pages/search/SearchPage';
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
                loader: async ({ request }) => {
                    const { searchParams } = new URL(request.url);
                    const q = searchParams.get('q');
                    const res = await fetch(
                        `https://registry.npmjs.org/-/v1/search?text=${q}`
                    );
                    const data = await res.json();

                    return data.objects;
                }
            },
            {
                path: '/detail',
                element: <DetailPage />
            }
        ]
    }
])

export default router