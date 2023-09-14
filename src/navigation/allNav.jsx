import { AiFillDashboard, AiFillShopping } from "react-icons/ai";

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiFillShopping />,
        role: 'admin',
        path: '/admin/orders'
    }
]