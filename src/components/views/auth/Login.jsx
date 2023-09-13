import { Link } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const Login = () => {
  const [seePass, setSeePass] = useState(true);

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
    console.log(loginData);
  }

  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-gray-100 p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h2 className="pb-3 text-3xl font-bold text-center">Login</h2>
          <h2 className="text-xl mb-3">Welcome to e-commerce</h2>
          <p className="text-sm mb-3">Please login to your account</p>

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
              type="submit"
              className="py-2 px-4 w-full bg-blue-500 hover:shadow-blue-500/30 hover:shadow-lg text-white rounded-md mb-3">Login</button>

            <div className="mb-3 flex items-center justify-center">
              <p>New in this website? <Link to='/register' className="text-blue-400">Register here</Link></p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-600 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">or</span>
              </div>
              <div className="w-[45%] bg-slate-600 h-[1px]"></div>
            </div>

            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;