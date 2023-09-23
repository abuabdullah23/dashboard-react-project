import { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const DeactiveSellers = () => {
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

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
                {/* Table data */}
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr className='text-xs'>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Email</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm font-normal'>
                            {
                                [1, 2, 3, 4, 5].map((item, i) => <tr key={i}>
                                    <td scope='row' className='py-1 px-4 font-normal whitespace-nowrap'>{item}</td>
                                    <td scope='row' className='py-1 px-4 font-normal whitespace-nowrap'><img className='h-11 w-11' src={`${import.meta.env.VITE_DASHBOARD_URL}/images/seller.png`} alt="seller image" /></td>
                                    <td scope='row' className='py-1 px-4 font-normal whitespace-nowrap'><span>Md. Ashikur Rahman</span></td>
                                    <td scope='row' className='py-1 px-4 font-normal whitespace-nowrap'><span>ashikur@gamil.com</span></td>
                                    <td scope='row' className='py-1 px-4 font-normal whitespace-nowrap'><span>active</span></td>
                                    <td scope='row' className='py-1 px-4 font-normal whitespace-nowrap'><span>deactive</span></td>
                                    <td scope='row' className='py-1 px-4 font-normal whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link className='p-[6px] bg-green-500 rounded-sm hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link>

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

export default DeactiveSellers;