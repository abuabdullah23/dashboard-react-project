import { AiOutlineGithub, AiOutlineGooglePlus } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
const SocialLogin = () => {

    return (
        <div className="flex justify-center items-center gap-3">
            <div className="w-8 h-8 flex justify-center items-center rounded-md bg-orange-600 shadow-md hover:shadow-orange-600/70 cursor-pointer overflow-hidden">
                <span><AiOutlineGooglePlus /></span>
            </div>

            <div className="w-8 h-8 flex justify-center items-center rounded-md bg-indigo-600 shadow-md hover:shadow-indigo-600/70 cursor-pointer overflow-hidden">
                <span><FiFacebook /></span>
            </div>

            <div className="w-8 h-8 flex justify-center items-center rounded-md bg-cyan-600 shadow-md hover:shadow-cyan-600/70 cursor-pointer overflow-hidden">
                <span><CiTwitter /></span>
            </div>

            <div className="w-8 h-8 flex justify-center items-center rounded-md bg-purple-600 shadow-md hover:shadow-purple-600/70 cursor-pointer overflow-hidden">
                <span><AiOutlineGithub /></span>
            </div>

        </div>
    );
};

export default SocialLogin;