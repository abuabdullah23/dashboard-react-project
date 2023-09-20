import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Pagination from '../Pagination/Pagination';
import { BsImage } from 'react-icons/bs';

const Category = () => {
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12 p-4 bg-[#283046] rounded-md'>
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
                    {/* Table data */}
                    <div className='relative overflow-x-auto'>
                        <table className='w-full text-sm text-left text-[#d0d2d6]'>
                            <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                                <tr>
                                    <th scope='col' className='py-3 px-4'>No</th>
                                    <th scope='col' className='py-3 px-4'>Image</th>
                                    <th scope='col' className='py-3 px-4'>Name</th>
                                    <th scope='col' className='py-3 px-4'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [1, 2, 3, 4, 5].map((item, i) => <tr key={i}>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{item}</td>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><img className='h-11 w-11' src={`../../../../public/images/category/${item}.jpg`} alt="category image" /></td>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Sports</span></td>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <div className='flex justify-start items-center gap-4'>
                                                <Link className='p-[6px] bg-orange-500 rounded-sm hover:shadow-lg hover:shadow-orange-500/50'><FaEdit /></Link>
                                                <Link className='p-[6px] bg-red-500 rounded-sm hover:shadow-lg hover:shadow-red-500/50'><FaTrashAlt /></Link>
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

                <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0' : '-right-[340px]'} z-20 top-0 transition-all duration-500`}>
                    <div className='w-full pl-6'>
                        <div className='bg-[#283046] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]'>
                            <h2 className='font-semibold text-xl mb-4 w-full text-center'>Add Category</h2>
                            <form>
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor="name">Category name</label>
                                    <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d7]' type="text" id='name' name='category_name' placeholder='category name' />
                                </div>
                                <div>
                                    <label className='flex flex-col justify-center items-center h-[238px] cursor-pointer border border-[#d0d2d6] border-dashed hover:border-indigo-500 w-full' htmlFor="image">
                                        <span><BsImage /></span>
                                        <span>Select Image</span>
                                    </label>
                                </div>
                                <input className='hidden' type="file" name="image" id="image" />
                                <div>
                                    <button className='bg-blue-500 w-full hover:shadow
                                    bg-blue-500/50 shadow-lg text-white rounded-md px-7 py-2 my-2'>Add Category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;