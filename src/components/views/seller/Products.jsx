import React, { useState } from 'react';
import Search from '../../SearchBox/Search';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';

const Products = () => {
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <Search setPerPage={setPerPage} searchValue={searchValue} setSearchValue={setSearchValue} />

                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Category</th>
                                <th scope='col' className='py-3 px-4'>Brand</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Discount</th>
                                <th scope='col' className='py-3 px-4'>Stock</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((item, i) => <tr key={i}>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{item}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><img className='h-11 w-11' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/category/${item}.jpg`} alt="category image" /></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Sticky Notes 3x3...</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Sports</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Easy</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>$654</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>5%</span></td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>20</span></td>

                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link to={`/seller/dashboard/edit-product/3453`} className='p-[6px] bg-orange-500 rounded-sm hover:shadow-lg hover:shadow-orange-500/50'><FaEdit /></Link>
                                            <Link className='p-[6px] bg-green-500 rounded-sm hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link>
                                            <button className='p-[6px] bg-red-500 rounded-sm hover:shadow-lg hover:shadow-red-500/50'><FaTrashAlt /></button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
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

export default Products;