import React, { useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';
import Loader from '../../Loader/Loader';
import { messageClear, profile_image_upload, profile_info_add } from '../../../redux/Reducers/auth/authReducerSlice';
import toast from 'react-hot-toast';

const Profile = () => {
    const dispatch = useDispatch();
    const { loader, userInfo, successMessage, errorMessage } = useSelector(state => state.auth);

    console.log({ errorMessage, successMessage });
    const [seePass, setSeePass] = useState(false);
    const [seeNewPass, setSeeNewPass] = useState(false);

    // handle image
    const addImage = (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData();
            formData.append('image', e.target.files[0]);
            dispatch(profile_image_upload(formData))
                .then((res) => {
                    if (res.meta.requestStatus === 'fulfilled') {
                        // toast.success(successMessage);
                        toast.success('Image upload success');
                        dispatch(messageClear());
                    } else {
                        if (res.meta.requestStatus === 'rejected') {
                            // toast.error(errorMessage);
                            toast.error('Image not upload');
                            dispatch(messageClear());
                        }
                    }
                })
        }
    }

    // handle add seller info
    const addSellerProfileInfo = (event) => {
        event.preventDefault();
        const form = event.target;
        const shopName = form.shopName.value;
        const division = form.division.value;
        const district = form.district.value;
        const subDistrict = form.subDistrict.value;

        const profileInfo = {
            shopName,
            division,
            district,
            subDistrict
        }
        dispatch(profile_info_add(profileInfo))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    toast.success(successMessage || 'Info added successful');
                    dispatch(messageClear());
                } else {
                    if (res.meta.requestStatus === 'rejected') {
                        toast.error(errorMessage || 'Not added');
                        dispatch(messageClear());
                    }
                }
            })
    }



    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 bg-[#283046] rounded-md'>
                        {/* image section */}
                        <div className='flex justify-center items-center mt-4'>
                            {
                                userInfo?.image
                                    ? <label htmlFor="img" className='h-[210px] w-[260px] relative cursor-pointer overflow-hidden'>
                                        <img className='w-full h-full object-contain' src={userInfo.image} alt="image" />
                                        {
                                            loader && <div className='bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20'>
                                                <span><FadeLoader /></span>
                                            </div>
                                        }
                                    </label>
                                    : <label className='flex flex-col justify-center items-center h-[210px] w-[260px] cursor-pointer border border-dashed border-[#d0d2d6] hover:border-indigo-500 relative' htmlFor="img">
                                        <span><BsImage /></span>
                                        <span>Select Image</span>
                                        {
                                            loader && <div className='bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20'>
                                                <span>
                                                    <FadeLoader />
                                                </span>
                                            </div>
                                        }
                                    </label>
                            }
                            <input onChange={addImage} className='hidden' type="file" name="img" id="img" />
                        </div>
                        {/* basic info section */}
                        <div className='px-0 md:px-5 py-5'>
                            <div className='flex flex-col justify-between gap-2 p-4 bg-slate-800 rounded-md relative text-sm '>
                                <span className='p-[6px] bg-orange-500 rounded-sm hover:shadow-lg hover:shadow-orange-500/50 absolute top-2 right-2 cursor-pointer text-white'><FaEdit /></span>
                                <div className='flex gap-2'>
                                    <span>Name : </span>
                                    <span>{userInfo.name}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email : </span>
                                    <span>{userInfo.email}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role : </span>
                                    <span>{userInfo.role}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status : </span>
                                    <span>{userInfo.status}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Payment Account : </span>
                                    <p>
                                        {
                                            userInfo.payment === 'active'
                                                ?
                                                <span className='bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>{userInfo.payment}</span>
                                                :
                                                <span className='bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>click active</span>
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* seller info section */}
                        <div className='px-0 md:px-5 py-5'>
                            {
                                !userInfo?.shopInfo ?
                                    <form
                                        onSubmit={addSellerProfileInfo}
                                        className='flex flex-col gap-3 p-4'>
                                        <div className='flex flex-col w-full gap-1'>
                                            <label htmlFor="shopName">Shop name</label>
                                            <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md' name='shopName' id='shopName' type="text" placeholder='Shop name' required />
                                        </div>
                                        <div className='flex flex-col w-full gap-1'>
                                            <label htmlFor="division">Division</label>
                                            <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md' name='division' id='division' type="text" placeholder='Division' required />
                                        </div>
                                        <div className='flex flex-col w-full gap-1'>
                                            <label htmlFor="district">District</label>
                                            <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md' name='district' id='district' type="text" placeholder='District' required />
                                        </div>
                                        <div className='flex flex-col w-full gap-1'>
                                            <label htmlFor="subDistrict">Sub District</label>
                                            <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md' name='subDistrict' id='subDistrict' type="text" placeholder='Sub District' required />
                                        </div>
                                        <button
                                            disabled={loader ? true : false}
                                            type="submit"
                                            className={`py-2 px-4 w-fit bg-blue-500 hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md mb-3 ${loader && 'bg-blue-400'} `}>
                                            {
                                                loader ? <Loader loadingText={'Adding Info...'} /> : 'Add Info'
                                            }
                                        </button>
                                    </form>
                                    :
                                    <div>
                                        <div className='flex flex-col justify-between gap-2 p-4 bg-slate-800 rounded-md relative text-sm '>
                                            <span className='p-[6px] bg-orange-500 rounded-sm hover:shadow-lg hover:shadow-orange-500/50 absolute top-2 right-2 cursor-pointer text-white'><FaEdit /></span>
                                            <div className='flex gap-2'>
                                                <span>Shop Name : </span>
                                                <span>{userInfo?.shopInfo?.shopName}</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Division : </span>
                                                <span>{userInfo?.shopInfo?.division}</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>District : </span>
                                                <span>{userInfo?.shopInfo?.district}</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Sub District : </span>
                                                <span>{userInfo?.shopInfo?.subDistrict}</span>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                {/* change password section */}
                <div className='w-full md:w-6/12'>
                    <div className='w-full pl-0 md:pl-7 mt-6 md:mt-0'>
                        <div className='bg-[#283046] rounded-md p-4'>
                            <h2 className='text-lg font-semibold'>Change Password</h2>
                            <form className='flex flex-col gap-3 p-4'>
                                <div className='flex flex-col w-full gap-1'>
                                    <label htmlFor="email">Email</label>
                                    <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md' name='email' id='email' type="email" placeholder='Email' />
                                </div>
                                <div className='flex flex-col w-full gap-1'>
                                    <label htmlFor="oldPassword">Old Password</label>
                                    <div className='relative'>
                                        <input className='w-full px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md' name='oldPassword' id='oldPassword'
                                            type={seePass ? 'text' : 'password'}
                                            placeholder='Old Password' />
                                        <div
                                            onClick={() => setSeePass(!seePass)}
                                            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2">
                                            {
                                                seePass ? <FiEyeOff /> : <FiEye />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full gap-1'>
                                    <label htmlFor="newPassword">New Password</label>
                                    <div className='relative'>
                                        <input className='w-full px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md' name='newPassword' id='newPassword'
                                            type={seeNewPass ? 'text' : 'password'} placeholder='New Password' />
                                        <div
                                            onClick={() => setSeeNewPass(!seeNewPass)}
                                            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2">
                                            {
                                                seeNewPass ? <FiEyeOff /> : <FiEye />
                                            }
                                        </div>
                                    </div>
                                </div>

                                <button type='submit' className='w-fit bg-blue-500           
                                         hover:shadow-blue-500/50 shadow-lg text-white rounded-md px-4 py-2 my-2'>Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;