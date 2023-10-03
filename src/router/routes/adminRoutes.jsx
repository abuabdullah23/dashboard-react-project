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
        role: 'admin'
    },
    {
        path: 'admin/dashboard/orders',
        element: <Orders />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/category',
        element: <Category />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/sellers',
        element: <Sellers />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/seller/details/:id',
        element: <SellerDetails />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/payment-request',
        element: <PaymentRequest />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/deactive-sellers',
        element: <DeactiveSellers />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/sellers-request',
        element: <SellerRequest />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/chat-sellers',
        element: <ChatSellers />,
        role: 'admin'
    }

]