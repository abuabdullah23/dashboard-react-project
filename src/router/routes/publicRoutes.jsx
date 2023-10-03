import { lazy } from "react";
const Home = lazy(() => import('../../components/views/Home/Home'));
const Login = lazy(() => import('../../components/views/auth/Login'));
const Register = lazy(() => import('../../components/views/auth/Register'));
const AdminLogin = lazy(() => import('../../components/views/auth/AdminLogin'));
const Unauthorized = lazy(() => import('../../components/views/pages/Unauthorized'));

const publicRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ['admin', 'seller']
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/admin-login',
        element: <AdminLogin />
    },
    {
        path: '/unauthorized',
        element: <Unauthorized />
    },
]

export default publicRoutes;