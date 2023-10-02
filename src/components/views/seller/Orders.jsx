import React, { useState } from 'react';
import Search from '../../SearchBox/Search';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Pagination from '../Pagination/Pagination';

const Orders = () => {
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <Search setPerPage={setPerPage} searchValue={searchValue} setSearchValue={setSearchValue} />

                {/* Recent Order Section */}
                <div className='w-full p-4  bg-[#283046] rounded-md mt-6'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
                        <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <table className='w-full text-sm text-left text-[#d0d2d6]'>
                            <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                                <tr>
                                    <th scope='col' className='py-3 px-4'>Order Id</th>
                                    <th scope='col' className='py-3 px-4'>Price</th>
                                    <th scope='col' className='py-3 px-4'>Payment Status</th>
                                    <th scope='col' className='py-3 px-4'>Order Status</th>
                                    <th scope='col' className='py-3 px-4'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [1, 2, 3, 4, 5].map((item, i) => <tr key={i}>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#sdjf3298u923</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>145</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><span>Pending</span></td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><span>Running</span></td>
                                        <td scope='row' className='font-medium whitespace-nowrap'> <Link to={`/seller/dashboard/order/details/523`} className='w-fit p-[6px] bg-green-500 rounded-sm hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center'><FaEye /></Link></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
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