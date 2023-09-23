import { lazy } from "react";
const AdminDashboard = lazy(() => import('../../components/views/admin/AdminDashboard'));
const Orders = lazy(() => import('../../components/views/admin/Orders'));
const OrderDetails = lazy(() => import('../../components/views/admin/NestedRoute/OrderDetails'));
const Category = lazy(() => import('../../components/views/admin/Category'));
const Sellers = lazy(() => import('../../components/views/admin/Sellers'));
const SellerDetails = lazy(() => import('../../components/views/admin/NestedRoute/SellerDetails'));
const PaymentRequest = lazy(() => import('../../components/views/admin/PaymentRequest'));
const DeactiveSellers = lazy(() => import('../../components/views/admin/DeactiveSellers'));
const SellerRequest = lazy(() => import('../../components/views/admin/SellerRequest'));
const ChatSellers = lazy(() => import('../../components/views/admin/ChatSellers'));

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
        path: 'admin/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/category',
        element: <Category />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/sellers',
        element: <Sellers />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/seller/details/:id',
        element: <SellerDetails />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/payment-request',
        element: <PaymentRequest />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/deactive-sellers',
        element: <DeactiveSellers />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/sellers-request',
        element: <SellerRequest />,
        role: 'role'
    },
    {
        path: 'admin/dashboard/chat-sellers',
        element: <ChatSellers />,
        role: 'role'
    }

]