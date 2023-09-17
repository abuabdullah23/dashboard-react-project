import { lazy } from "react";
const AdminDashboard = lazy(() => import('../../components/views/admin/AdminDashboard'));
const Orders = lazy(() => import('../../components/views/admin/Orders'));

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
]