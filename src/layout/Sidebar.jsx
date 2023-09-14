import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";

const Sidebar = () => {
    const [allNav, setAllNav] = useState([]);
    const { pathname } = useLocation();

    useEffect(() => {
        const nav = getNav('admin');
        setAllNav(nav)
    }, [])

    return (
        <div>
            <div></div>
            <div className={`w-64 fixed bg-[#283046] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all`}>
                <div className="h-16 flex justify-center items-center mt-1">
                    <Link to='/' className="w-44 h-12">
                        <img src="../../public/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="px-4">
                    {
                        allNav.map((n, i) => <li
                            key={i}
                            className="list-none"
                        >
                            <Link
                                to={n.path}
                                className={`${pathname === n.path ? 'bg-slate-600 shadow-indigo-500/30 text-white duration-500' : 'text-[#d0d2d6] font-normal duration-200'} px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 transition-all w-full mb-1`}>
                                <span>{n.icon}</span>
                                <span>{n.title}</span>
                            </Link>
                        </li>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Sidebar;