import React from 'react';
import { TbSend } from 'react-icons/tb';

const SellerToAdminChat = () => {

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    {/* chatting section */}
                    <div className='w-full md:pl-4'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center gap-3'>
                                <div className='relative'>
                                    <img className='w-[38px] h-[38px] border-2 border-green-500 max-w-[38px] p-[2px] rounded-full' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/admin.jpg`} alt="image" />
                                    <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                </div>
                                <h2 className='text-base font-semibold text-white'>Support</h2>
                            </div>

                        </div>
                        {/* chatting box */}
                        <div className='py-4'>
                            <div className='bg-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto'>
                                {/* seller message */}
                                <div className='w-full flex justify-start items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                        <div>
                                            <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/admin.jpg`} alt="image" />
                                        </div>
                                        <div className='flex flex-col justify-center items-start w-full bg-orange-500 shadow-md shadow-orange-500/50 text-white py-1 px-2'>
                                            <span>How are you?</span>
                                        </div>
                                    </div>
                                </div>
                                {/* admin message */}
                                <div className='w-full flex justify-end items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                        <div className='flex flex-col justify-center items-start w-full bg-blue-500 shadow-md shadow-blue-500/50 text-white py-1 px-2'>
                                            <span>How are you?</span>
                                        </div>
                                        <div>
                                            <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/admin.jpg`} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* input and send message */}
                        <form className='flex gap-3'>
                            <input className='w-full flex justify-between items-center px-2 py-[5px] border border-slate-700 focus:border-blue-500 rounded-md bg-transparent outline-none text-[#d0d2d6] ' type="text" placeholder='input your text here' />
                            <button className='flex items-center gap-2 text-white bg-cyan-500 py-2 px-3 rounded-md shadow-lg hover:shadow-cyan-500/50'>
                                <span className='hidden md:block transition-all'>Send</span>
                                <span><TbSend /></span>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerToAdminChat;