import { lazy } from "react";
const SellerDashboard = lazy(() => import('../../components/views/seller/SellerDashboard'));
const AddProduct = lazy(() => import('../../components/views/seller/AddProduct'));
const Products = lazy(() => import('../../components/views/seller/Products'));
const EditProduct = lazy(() => import('../../components/views/seller/EditProduct'));
const DiscountProducts = lazy(() => import('../../components/views/seller/DiscountProducts'));
const Orders = lazy(() => import('../../components/views/seller/Orders'));
const OrderDetails = lazy(() => import('../../components/views/seller/OrderDetails'));
const Payments = lazy(() => import('../../components/views/seller/Payments'));
const SellerToAdminChat = lazy(() => import('../../components/views/seller/SellerToAdminChat'));
const SellerToCustomerChat = lazy(() => import('../../components/views/seller/SellerToCustomerChat'));
const Profile = lazy(() => import('../../components/views/seller/Profile'));
const PendingSeller = lazy(() => import('../../components/views/pages/PendingSeller'));
const DeactiveSeller = lazy(() => import('../../components/views/pages/DeactiveSeller'));

export const sellerRoutes = [
    {
        path: 'seller/account-pending',
        element: < PendingSeller />,
        ability: 'seller',
    },
    {
        path: 'seller/account-deactive',
        element: <DeactiveSeller />,
        ability: 'seller',
    },
    {
        path: 'seller/dashboard',
        element: <SellerDashboard />,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/add-product',
        element: <AddProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/products',
        element: <Products />,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/edit-product/:productId',
        element: <EditProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/discount-products',
        element: <DiscountProducts />,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/orders',
        element: <Orders />,
        role: 'seller',
        visibility: ['active', 'deactive']
    },
    {
        path: 'seller/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'seller',
        visibility: ['active', 'deactive']
    },
    {
        path: 'seller/dashboard/payments',
        element: <Payments />,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/chat-support',
        element: <SellerToAdminChat />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    },
    {
        path: 'seller/dashboard/chat-customer/:customerId',
        element: <SellerToCustomerChat />,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/chat-customer',
        element: <SellerToCustomerChat />,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/profile',
        element: <Profile />,
        role: 'seller',
        status: 'active'
    },
]