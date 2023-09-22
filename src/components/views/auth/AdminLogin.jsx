import { FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import { admin_login, messageClear } from "../../../redux/Reducers/auth/authReducerSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [seePass, setSeePass] = useState(true);
    const dispatch = useDispatch();
    // for spinner, error and success message
    const { loader, errorMessage, successMessage } = useSelector(state => state.auth);

    const navigate = useNavigate();

    // password show/hide function
    const handleSeePassword = () => {
        setSeePass(!seePass)
    }

    // handle registration form value
    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginData = {
            email,
            password,
        }
        dispatch(admin_login(loginData))
    }

    // for show error or success message in toast
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
            navigate('/admin/dashboard');
        }
    }, [errorMessage, successMessage]);

    return (
        <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
            <div className="w-[350px] text-gray-100 p-2">
                <div className="bg-[#283046] p-4 rounded-md">
                    <div className="flex justify-center mb-5">
                        <div className="flex flex-col items-center gap-3">
                            <img className="h-7" src="${import.meta.env.VITE_DASHBOARD_URL}/images/logo.png" alt="logo" />
                            <h2 className="text-3xl font-bold text-center text-slate-500">Admin Login</h2>
                        </div>
                    </div>

                    <form onSubmit={handleSubmitForm}>
                        {/* email */}
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                type="email"
                                placeholder="email"
                                id="email"
                                name="email"
                                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-gray-100 focus:border-gray-400 overflow-hidden" />
                        </div>

                        {/* password */}
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    required
                                    type={seePass ? 'password' : 'text'}
                                    placeholder="password"
                                    id="password"
                                    name="password"
                                    className="w-full px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-gray-100 focus:border-gray-400 overflow-hidden" />
                                <div
                                    onClick={() => handleSeePassword(!seePass)}
                                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2">
                                    {
                                        seePass ? <FiEye /> : <FiEyeOff />
                                    }
                                </div>
                            </div>
                        </div>

                        {/* submit button */}
                        <button
                            disabled={loader ? true : false}
                            type="submit"
                            className={`py-2 px-4 w-full bg-blue-500 hover:shadow-blue-500/30 hover:shadow-lg text-white rounded-md mb-3 ${loader && 'bg-blue-400'} `}>
                            {
                                loader ? <Loader loadingText={'Logging in...'} /> : 'Login'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;