import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_seller, messageClear, update_seller_status } from '../../../../redux/Reducers/seller/sellerReducer';
import toast from 'react-hot-toast';

const SellerDetails = () => {
    const dispatch = useDispatch();
    const { seller, successMessage, errorMessage } = useSelector(state => state.seller);
    const { sellerId } = useParams();

    useEffect(() => {
        dispatch(get_seller(sellerId))
    }, [sellerId])

    // handle update seller status
    const submitStatus = (e) => {
        e.preventDefault();
        const status = e.target.status.value;
        dispatch(update_seller_status({
            sellerId,
            status
        }))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    toast.success(successMessage || 'Updated seller status');
                    dispatch(messageClear());
                } else {
                    if (res.meta.requestStatus === 'rejected') {
                        toast.error(errorMessage || 'Not updated seller status');
                        dispatch(messageClear());
                    }
                }
            })
    }

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='w-full flex flex-wrap text-[#d0d2d6]'>
                    {/* image */}
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <div>
                            {
                                seller?.image
                                    ? <img className='w-full h-[230px] rounded-md' src={seller.image} alt="sellers image" />
                                    :
                                    <span className='text-lg'>Image not uploaded</span>
                            }
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
                                    <span>{seller.name}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>{seller.email}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role: </span>
                                    <span>{seller.role}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status: </span>
                                    <span>{seller.status}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Payment Account: </span>
                                    <span>{seller.payment}</span>
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
                                    <span>{seller?.shopInfo?.shopName}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Division: </span>
                                    <span>{seller?.shopInfo?.division}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>District: </span>
                                    <span>{seller?.shopInfo?.district}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Upazila: </span>
                                    <span>{seller?.shopInfo?.subDistrict}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* form and submit section */}
                <div>
                    <form onSubmit={submitStatus}>
                        <div className='flex gap-4 py-3'>
                            <select className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name="status" id="status" required defaultValue={seller.status}>
                                <option value="">--select status--</option>
                                <option value="active">active</option>
                                <option value="deactive">deactive</option>
                                <option value="pending">pending</option>
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