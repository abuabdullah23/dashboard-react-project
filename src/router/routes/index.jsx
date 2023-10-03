import MainLayout from "../../layout/MainLayout"
import ProtectRoutes from "./ProtectRoutes";
import { privateRoutes } from "./privateRoutes"

export const getRoutes = () => {

    const allRoute = [];
    privateRoutes.map((route)=> {
        route.element = <ProtectRoutes route={route} >{route.element}</ProtectRoutes>
    })

    return {
        path: '/',
        element: <MainLayout />,
        children: privateRoutes
    }
}