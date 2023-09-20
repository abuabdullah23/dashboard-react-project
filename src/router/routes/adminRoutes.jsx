import { lazy } from "react";
const AdminDashboard = lazy(() => import('../../components/views/admin/AdminDashboard'));
const Orders = lazy(() => import('../../components/views/admin/Orders'));
const Category = lazy(() => import('../../components/views/admin/Category'));

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/orders',
        element: <Orders />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/category',
        element: <Category />,
        role: 'role'
    },
]