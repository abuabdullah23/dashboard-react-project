import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsImages } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { categoryGet, messageClear } from '../../../redux/Reducers/category/categoryReducer';
import { addProduct } from '../../../redux/Reducers/product/productReducer';
import Loader from '../../Loader/Loader';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const dispatch = useDispatch();
    const [catShow, setCatShow] = useState(false);
    const [category, setCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [imageShow, setImageShow] = useState([]);
    const [images, setImages] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const { categories } = useSelector(state => state.category);
    const { loader, successMessage, errorMessage } = useSelector(state => state.product);

    // get all category and send parameter
    useEffect(() => {
        dispatch(categoryGet({
            perPage: '',
            searchValue: '',
            page: '',
        }))
    }, [])

    // set categories from backend
    useEffect(() => {
        setAllCategory(categories)
    }, [categories])

    // handle search category
    const categorySearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value) {
            let searchText = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(searchText)
        } else {
            setAllCategory(categories)
        }
    }

    // handle image for add product
    const handleImage = (e) => {
        const files = e.target.files;
        const length = files.length;

        if (length > 0) {
            setImages([...images, ...files]);
            let imageUrl = [];

            for (let i = 0; i < length; i++) {
                imageUrl.push({ url: URL.createObjectURL(files[i]) })
            }
            setImageShow([...imageShow, ...imageUrl]);
        }
    }

    // change image when select add product image
    const changeImage = (img, index) => {
        if (img) {
            let tempUrl = imageShow;
            let tempImages = images;

            tempImages[index] = img;
            tempUrl[index] = { url: URL.createObjectURL(img) };
            setImageShow([...tempUrl]);
            setImages([...tempImages]);
        }
    }

    // remove image
    const removeImage = (i) => {
        const filterImage = images.filter((img, index) => index !== i);
        const filterImageUrl = imageShow.filter((img, index) => index !== i);
        setImages(filterImage);
        setImageShow(filterImageUrl);
    }

    // handle add product form value
    const handleAddProductForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const stock = form.stock.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const description = form.description.value;

        const formData = new FormData()
        formData.append('name', name)
        formData.append('brand', brand)
        formData.append('stock', stock)
        formData.append('price', price)
        formData.append('discount', discount)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('shopName', 'Easy Fashion')
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i])
        }
        dispatch(addProduct(formData))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    toast.success(successMessage);
                    dispatch(messageClear());
                    form.reset('');
                    setImageShow([]);
                    setCategory('');
                } else {
                    if (res.meta.requestStatus === 'rejected') {
                        toast.error(errorMessage);
                        dispatch(messageClear());
                    }
                }
            })
    }

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h2 className='text-xl font-semibold'>Add Products</h2>
                    <Link className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg rounded-sm px-7 py-2 my-2' to='/seller/dashboard/products'>
                        Products
                    </Link>
                </div>
                {/* form */}
                <div>
                    <form onSubmit={handleAddProductForm}>
                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name">Product name</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='name' type="text" placeholder='product name' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="brand">Product brand</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='brand' type="text" placeholder='product brand' />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            {/* select category option */}
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor="category">Category</label>
                                <input readOnly value={category} onClick={() => setCatShow(!catShow)} className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' id='category' placeholder='--select category--' type="text" name='category' />
                                <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${catShow ? 'scale-100' : 'scale-0'}`}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <input value={searchValue} onChange={categorySearch} className='w-full px-3 py-1 border border-slate-700 focus:border-indigo-500 outline-none bg-transparent rounded-md text-[#d0d2d6] overflow-hidden' type="text" placeholder='search' />
                                    </div>
                                    <div className='pt-14'></div>
                                    <div className='flex justify-start items-start flex-col h-[200px] overflow-y-scroll'>
                                        {
                                            allCategory.map((c, i) => <span
                                                key={i}
                                                className={`cursor-pointer hover:bg-slate-900 w-full px-4 py-1 transition-all ${category === c.name && 'bg-slate-950'}`}
                                                onClick={() => {
                                                    setCatShow(false)
                                                    setCategory(c.name)
                                                    setSearchValue('')
                                                    setAllCategory(categories)
                                                }}
                                            >{c.name}</span>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="stock">Stock</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='stock' type="number" placeholder='stock' min={0} />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="price">Price</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='price' type="number" min={0} placeholder='Price' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="discount">discount</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='discount' type="number" min={0} placeholder='%discount%' />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="description">Description</label>
                                <textarea className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='description' type="text" min={0} placeholder='Description' />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 xs:gap-4 md:gap-4 w-full mb-4'>
                            {
                                imageShow.map((img, i) => <div className='h-[180px] relative' key={i}>
                                    <label htmlFor={i}>
                                        <img className='w-full h-full rounded-sm object-cover' src={img.url} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(e.target.files[0], i)} id={i} type="file" className='hidden' />
                                    <span onClick={() => removeImage(i)} className='p-2 z-10 cursor-pointer bg-red-600 hover:shadow-lg hover:shadow-red-500/50 text-white absolute top-1 right-1 rounded-full'><IoCloseSharp /></span>
                                </div>)
                            }
                            <label htmlFor="image" className='flex flex-col justify-center items-center h-[180px] cursor-pointer border border-dashed w-full hover:border-indigo-500 border-[#d0d2d6] rounded-sm'>
                                <span><BsImages /></span>
                                <span>select image</span>
                            </label>
                            <input multiple onChange={handleImage} className='hidden' type="file" name='image' id='image' />
                        </div>
                        {/* submit button */}
                        <button
                            disabled={loader ? true : false}
                            type="submit"
                            className={`py-2 px-4 w-fit bg-blue-500 hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md mb-3 ${loader && 'bg-blue-400'} `}>
                            {
                                loader ? <Loader loadingText={'Adding Product...'} /> : 'Add Product'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;