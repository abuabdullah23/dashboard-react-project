import { lazy } from "react";
const AdminDashboard = lazy(() => import('../../components/views/admin/AdminDashboard'));

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
        role: 'role'
    }
]