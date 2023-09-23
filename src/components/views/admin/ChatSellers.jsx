import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaList } from 'react-icons/fa';
import { TbSend } from 'react-icons/tb';

const ChatSellers = () => {
    const [show, setShow] = useState(false);
    const sellerId = 32;

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    <div className={`w-[280px] h-full absolute z-10 ${show ? '-left-[16px]' : '-left-[336px]'} md:left-0 md:relative transition-all`}>
                        <div className='w-full h-[calc(100vh-177px)] bg-[#252b3b] md:bg-transparent overflow-y-auto'>
                            <div className='flex justify-between items-center text-2xl font-semibold p-4 md:p-0 md:px-3 md:pb-3 text-white border-b border-slate-600 md:border-none'>
                                <h2>Sellers</h2>
                                <span onClick={() => setShow(!show)} className='block md:hidden cursor-pointer'><AiOutlineClose className='text-white' /></span>
                            </div>
                            <div className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}>
                                <div className='relative'>
                                    <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[2px] rounded-full' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/admin.jpg`} alt="image" />
                                    <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                </div>
                                <div className='flex justify-center items-start flex-col w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h2 className='text-base font-semibold'>Zayed</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}>
                                <div className='relative'>
                                    <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[2px] rounded-full' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/admin.jpg`} alt="image" />
                                    <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                </div>
                                <div className='flex justify-center items-start flex-col w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h2 className='text-base font-semibold'>Abdullah</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}>
                                <div className='relative'>
                                    <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[2px] rounded-full' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/admin.jpg`} alt="image" />
                                    <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                </div>
                                <div className='flex justify-center items-start flex-col w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h2 className='text-base font-semibold'>Khaled</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* chatting section */}
                    <div className='w-full md:w-[calc(100%-200px)] md:pl-4'>
                        <div className='flex justify-between items-center'>
                            {
                                sellerId && <div className='flex justify-start items-center gap-3'>
                                    <div className='relative'>
                                        <img className='w-[38px] h-[38px] border-2 border-green-500 max-w-[38px] p-[2px] rounded-full' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/admin.jpg`} alt="image" />
                                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                    </div>
                                </div>
                            }
                            <div onClick={() => setShow(!show)} className='w-[35px] h-[35px] flex justify-center items-center md:hidden rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 cursor-pointer text-white'>
                                <span><FaList /></span>

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

export default ChatSellers;