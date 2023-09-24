import { lazy } from "react";
const Home = lazy(() => import('../../components/views/Home/Home'));
const SellerDashboard = lazy(() => import('../../components/views/seller/SellerDashboard'));
const AddProduct = lazy(() => import('../../components/views/seller/AddProduct'));

export const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ['admin', 'seller']
    },
    {
        path: 'seller/dashboard',
        element: <SellerDashboard />,
        ability: ['seller']
    },
    {
        path: 'seller/dashboard/add-product',
        element: <AddProduct />,
        ability: ['seller']
    },
]