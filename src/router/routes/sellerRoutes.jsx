import { lazy } from "react";
const Home = lazy(() => import('../../components/views/Home/Home'));

export const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ['admin', 'seller']
    }
]