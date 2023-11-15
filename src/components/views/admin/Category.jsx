import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Pagination from '../Pagination/Pagination';
import { BsImage } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Loader from '../../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAdd, categoryGet } from '../../../redux/Reducers/category/categoryReducer';
import toast from 'react-hot-toast';
import { messageClear } from '../../../redux/Reducers/auth/authReducerSlice';
import Search from '../../SearchBox/Search';

const Category = () => {
    const dispatch = useDispatch();
    const { loader, successMessage, errorMessage, categories } = useSelector(state => state.category)
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [imageShow, setImageShow] = useState('');
    const [state, setState] = useState({
        name: '',
        image: ''
    })
    // handleImage
    const handleImage = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            setImageShow(URL.createObjectURL(files[0]))
            setState({
                ...state,
                image: files[0]
            })
        }
    }

    // handle add category
    const handleAddCategory = (e) => {
        e.preventDefault();
        // const form = e.target;
        // const category_name = form.category_name.value;
        // const categoryData = {
        //     name: category_name,
        //     image: state.image
        // }
        dispatch(categoryAdd(state))
            // right way
            .then((res) => {
                // console.log(res);
                if (res.meta.requestStatus === 'fulfilled') {
                    toast.success(successMessage || "Category added successful")
                    dispatch(messageClear())
                    setState({
                        name: '',
                        image: ''
                    })
                    setImageShow('')
                } else {
                    if (res.meta.requestStatus === 'rejected') {
                        toast.error(errorMessage || 'Category not added.')
                        dispatch(messageClear())
                    }
                }
            })
    }

    // get category
    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(categoryGet(obj))
    }, [searchValue, currentPage, perPage])


    // console.log(state);

    // এভাবেও করা যায়, তবে উত্তম হলো উপরেরটা।
    // useEffect(() => {
    //     if (successMessage) {
    //         toast.success(successMessage)
    //         dispatch(messageClear())
    //         setState({
    //             name: '',
    //             image: ''
    //         })
    //         setImageShow('')
    //     }
    //     if (errorMessage) {
    //         toast.error(errorMessage)
    //         dispatch(messageClear())
    //     }

    // }, [successMessage, errorMessage])


    return (
        <div className='px-2 lg:px-7 pt-5'>
            {/* Conditional rendering: show only small device */}
            <div className='flex lg:hidden justify-between items-center mb-5 p-4 bg-[#283046] rounded-md'>
                <h1 className='text-[#d0d2d6] font-semibold text-sm'>Categories</h1>
                <button onClick={() => setShow(true)} className='bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-4 py-2 cursor-pointer text-white rounded-sm text-sm'>Add</button>
            </div>

            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12 p-4 bg-[#283046] rounded-md'>
                    <Search
                        setPerPage={setPerPage}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue} />

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
                                    categories.map((item, i) => <tr key={i}>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{i + 1}</td>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><img className='h-11 w-11' src={item.image} alt="category image" /></td>
                                        <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>{item.name}</span></td>
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

                <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0 z-[9999]' : '-right-[340px]'}  top-0 transition-all duration-500`}>
                    <div className='w-full pl-6'>
                        <div className='bg-[#283046] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]'>
                            <div className='flex justify-between items-center mb-4'>
                                <h2 className='font-semibold text-xl'>Add Category</h2>
                                <div onClick={() => setShow(false)} className='block lg:hidden cursor-pointer'>
                                    <AiOutlineClose className='text-[#d0d2d6]' />
                                </div>
                            </div>
                            <form onSubmit={handleAddCategory}>
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor="category_name">Category name</label>
                                    <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]'
                                        value={state.name}
                                        onChange={(e) => setState({ ...state, name: e.target.value })}
                                        type="text" id='category_name' name='category_name' placeholder='category name' required />
                                </div>
                                <div>
                                    <label className='flex flex-col justify-center items-center h-[238px] cursor-pointer border border-[#d0d2d6] border-dashed hover:border-indigo-500 w-full' htmlFor="image">
                                        {
                                            imageShow ? <img className='h-full w-full object-cover object-top' src={imageShow} alt="image" /> :
                                                <>
                                                    <span><BsImage /></span>
                                                    <span>Select Image</span>
                                                </>
                                        }
                                    </label>
                                </div>
                                <input
                                    onChange={handleImage}
                                    className='hidden' type="file" name="image" id="image" required multiple="multiple" />
                                <div className='mt-3'>
                                    {/* submit button */}
                                    <button
                                        disabled={loader ? true : false}
                                        type="submit"
                                        className={`py-2 px-4 w-full bg-blue-500 hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md mb-3 ${loader && 'bg-blue-400'} `}>
                                        {
                                            loader ? <Loader loadingText={'Uploading...'} /> : 'Add Category'
                                        }
                                    </button>
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