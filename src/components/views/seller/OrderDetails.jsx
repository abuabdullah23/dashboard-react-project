import React from 'react';

const OrderDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-xl text-[#d0d2d6]'>Order Details</h2>
                    <select
                        className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]'
                        name="" id="">
                        <option value="pending">pending</option>
                        <option value="processing">processing</option>
                        <option value="warehouse">warehouse</option>
                        <option value="placed">placed</option>
                        <option value="cancelled">cancelled</option>
                    </select>
                </div>
                <div className='p-4'>
                    <div className='flex gap-2 text-lg text-[#d0d2d6]'>
                        <h2>#3686876867863</h2>
                        <span>3 oct 2023</span>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-[32%]'>
                            <div className='pr-3 text-[#d0d2d6]'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='pb-2 font-semibold'>Deliver to: Warehouse</h2>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2>Payment Status: </h2>
                                    <span className='text-base'>paid</span>
                                </div>
                                <span>Price: $4344</span>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center gap-3 text-md'>
                                            <img className='h-11 w-11' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/category/1.jpg`} alt="product image" />
                                            <div>
                                                <h2>long long T-Shirt</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>Easy, </span>
                                                    <span className='text-lg'>Quantity: 2</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 text-md'>
                                            <img className='h-11 w-11' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/category/1.jpg`} alt="product image" />
                                            <div>
                                                <h2>long long T-Shirt</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>Easy, </span>
                                                    <span className='text-lg'>Quantity: 2</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;