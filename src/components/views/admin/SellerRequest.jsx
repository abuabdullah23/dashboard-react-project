import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../SearchBox/Search';
import { get_seller_request } from '../../../redux/Reducers/seller/sellerReducer';

const SellerRequest = () => {
    const dispatch = useDispatch();
    const { sellers, totalSeller } = useSelector(state => state.seller);
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    // get seller request
    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_seller_request(obj))
    }, [searchValue, currentPage, perPage])

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <Search
                    setPerPage={setPerPage}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue} />

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
                                sellers.map((seller, i) => <tr className='border-b border-slate-700' key={i + 1}>
                                    <td scope='row' className='py-2 px-4 font-normal whitespace-nowrap'>{seller.name}</td>
                                    <td scope='row' className='py-2 px-4 font-normal whitespace-nowrap'><img className='h-11 w-11' src={seller?.image ? `${seller.image}` : `${import.meta.env.VITE_DASHBOARD_URL}/images/seller.png`} alt="seller image" /></td>
                                    <td scope='row' className='py-2 px-4 font-normal whitespace-nowrap'><span>{seller.name}</span></td>
                                    <td scope='row' className='py-2 px-4 font-normal whitespace-nowrap'><span>{seller.email}</span></td>
                                    <td scope='row' className='py-2 px-4 font-normal whitespace-nowrap'><span>{seller.payment}</span></td>
                                    <td scope='row' className='py-2 px-4 font-normal whitespace-nowrap'><span>{seller.status}</span></td>
                                    <td scope='row' className='py-2 px-4 font-normal whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link
                                                to={`/admin/dashboard/seller/details/${seller._id}`}
                                                className='p-[6px] bg-green-500 rounded-sm hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className='flex justify-between items-center mt-4 bottom-4 right-4'>
                    <div>
                        <p> <span className='font-semibold'>Total Seller:</span> {totalSeller}</p>
                    </div>
                    {
                        totalSeller <= perPage ? '' : <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={50}
                            perPage={perPage}
                            showItem={3}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default SellerRequest;