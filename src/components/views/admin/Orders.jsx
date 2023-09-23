import React, { useState } from 'react';
import { BsArrowBarDown } from 'react-icons/bs';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [searchValue, setSearchValue] = useState('');
    const [showSubOrder, setShowSubOrder] = useState(false);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center'>
                    <select
                        onChange={(e) => setPerPage(parseInt(e.target.value))}
                        className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d7]'>
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                    </select>
                    <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d7]' type="text" placeholder='search' />
                </div>
                {/* Table */}
                <div className='relative mt-5 overflow-x-auto'>
                    {/* Table Head */}
                    <div className='w-full text-sm uppercase text-left text-[#d0d2d6]'>
                        <div className='border-b border-slate-700'>
                            <div className='flex justify-between items-start'>
                                <div className='py-3 w-[25%]'>Order Id</div>
                                <div className='py-3 w-[13%]'>Price</div>
                                <div className='py-3 w-[18%]'>Payment Status</div>
                                <div className='py-3 w-[18%]'>Order Status</div>
                                <div className='py-3 w-[18%]'>Action</div>
                                <div className='py-3 w-[8%]'><BsArrowBarDown /></div>
                            </div>
                        </div>
                    </div>
                    {/* Data */}
                    <div className='text-[#d0d2d6]'>
                        <div className='flex justify-between items-start border-b border-slate-700'>
                            <div className='py-4 w-[25%] font-medium whitespace-nowrap'>3464564646465487</div>
                            <div className='py-4 w-[13%]'>$250</div>
                            <div className='py-4 w-[18%]'>Pending</div>
                            <div className='py-4 w-[18%]'>Running</div>
                            <div className='py-4 w-[18%]'>
                                <Link to='/admin/dashboard/order/details/1' className='hover:text-indigo-400'>View</Link>
                            </div>
                            <div onClick={(e) => setShowSubOrder(!showSubOrder)} className='py-4 w-[8%] cursor-pointer'><BsArrowBarDown /></div>
                        </div>
                        {/* Suborder document */}
                        <div className={showSubOrder ? 'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                            <div className='flex justify-start items-start border-b border-slate-700 transition-all duration-500'>
                                <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>3464564646465487</div>
                                <div className='py-4 w-[13%]'>$250</div>
                                <div className='py-4 w-[18%]'>Pending</div>
                                <div className='py-4 w-[18%]'>Running</div>
                            </div>
                            <div className='flex justify-start items-start border-b border-slate-700'>
                                <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>3464564646465487</div>
                                <div className='py-4 w-[13%]'>$250</div>
                                <div className='py-4 w-[18%]'>Pending</div>
                                <div className='py-4 w-[18%]'>Running</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pagination */}
                <div className='flex justify-end mt-4 bottom-4 right-4'>
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        perPage={perPage}
                        showItem={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default Orders;