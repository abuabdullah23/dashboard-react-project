import React from 'react';

const SellerDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='w-full flex flex-wrap text-[#d0d2d6]'>
                    {/* image */}
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <div>
                            <img className='w-full h-[230px] rounded-md' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/admin.jpg`} alt="sellers image" />
                        </div>
                    </div>
                    {/* info */}
                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Basic Info</h2>
                            </div>
                            <div className='flex flex-col justify-between text-sm gap-2 p-4 bg-slate-800 rounded-md'>
                                <div className='flex gap-2'>
                                    <span>Name: </span>
                                    <span>Zayed</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>zayed@gmail.com</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role: </span>
                                    <span>Admin</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status: </span>
                                    <span>active</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Payment Account: </span>
                                    <span>active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* address */}
                    <div className='w-5/12'>

                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Address</h2>
                            </div>
                            <div className='flex flex-col justify-between text-sm gap-2 p-4 bg-slate-800 rounded-md'>
                                <div className='flex gap-2'>
                                    <span>Shop Name: </span>
                                    <span>Aoz Fashion</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Division: </span>
                                    <span>Rajshahi</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>District: </span>
                                    <span>Natore</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Upazila: </span>
                                    <span>Baraigram</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* form and submit section */}
                <div>
                    <form>
                        <div className='flex gap-4 py-3'>
                            <select className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d7]' name="" id="">
                                <option value="">--select status--</option>
                                <option value="active">Active</option>
                                <option value="deactive">Deactive</option>
                            </select>
                            <button type='submit' className='bg-blue-500 hover:shadow
                         bg-blue-500/50 shadow-lg text-white rounded-md px-7 py-2'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default SellerDetails;