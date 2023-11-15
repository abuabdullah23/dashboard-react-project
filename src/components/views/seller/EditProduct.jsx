import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { categoryGet } from '../../../redux/Reducers/category/categoryReducer';
import { getProduct, messageClear, updateProduct, updateProductImage } from '../../../redux/Reducers/product/productReducer';
import Loader from '../../Loader/Loader';
import toast from 'react-hot-toast';

const EditProduct = () => {
    const [catShow, setCatShow] = useState(false);
    const [category, setCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [imageShow, setImageShow] = useState([]);
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { loader, product, successMessage, errorMessage } = useSelector(state => state.products);
    const { categories } = useSelector(state => state.category);
    const [allCategory, setAllCategory] = useState([]);

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

    // get one product (with ID) using useEffect by redux
    useEffect(() => {
        dispatch(getProduct(productId))
    }, [productId])

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

    // change image when select add product image
    const changeImage = (img, files) => {
        if (files.length > 0) {
            dispatch(updateProductImage({
                oldImage: img,
                newImage: files[0],
                productId
            }))
                .then((res) => {
                    if (res.meta.requestStatus === 'fulfilled') {
                        toast.success(successMessage || 'Image update successful');
                        dispatch(messageClear());
                    } else {
                        if (res.meta.requestStatus === 'rejected') {
                            toast.error(errorMessage || 'not image updated');
                            dispatch(messageClear());
                        }
                    }
                })
        }
    }

    // handle edit product form value
    const handleUpdateProductForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const stock = form.stock.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const description = form.description.value;
        const productData = {
            productId,
            name,
            brand,
            category,
            stock: parseInt(stock),
            price: parseInt(price),
            discount: parseInt(discount),
            description,
            images: imageShow
        }
        dispatch(updateProduct(productData))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    toast.success(successMessage || 'Product has been updated');
                    dispatch(messageClear());
                } else {
                    if (res.meta.requestStatus === 'rejected') {
                        toast.error(errorMessage || 'Not updated');
                        dispatch(messageClear());
                    }
                }
            })
    }

    useEffect(() => {
        setImageShow(product.images);
        setCategory(product.category)
    }, [product])

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h2 className='text-xl font-semibold'>Edit Product</h2>
                    <Link className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg rounded-sm px-7 py-2 my-2' to='/seller/dashboard/products'>
                        Products
                    </Link>
                </div>
                {/* form */}
                <div>
                    <form onSubmit={handleUpdateProductForm}>
                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name">Product name</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='name' type="text" placeholder='product name' defaultValue={product.name} />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="brand">Product brand</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='brand' type="text" placeholder='product brand' defaultValue={product.brand} />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            {/* select category option */}
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor="category">Category</label>
                                <input readOnly value={category} onClick={() => setCatShow(!catShow)} className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' id='category' placeholder='--select category--' type="text" />
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
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='stock' type="number" placeholder='stock' defaultValue={product.stock} min={0} />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="price">Price</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='price' type="number" min={0} placeholder='Price' defaultValue={product.price} />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="discount">discount</label>
                                <input className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='discount' type="number" min={0} placeholder='%discount%' defaultValue={product.discount} />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="description">Description</label>
                                <textarea className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' name='description' type="text" min={0} placeholder='Description' defaultValue={product.description} />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 xs:gap-4 md:gap-4 w-full mb-4'>
                            {
                                imageShow && imageShow.map((img, i) =>
                                    <div key={i} className='h-[180px]'>
                                        <label htmlFor={i}>
                                            <img src={img} className='w-full h-full rounded-sm object-cover' alt="image" />
                                        </label>
                                        <input onChange={(e) => changeImage(img, e.target.files)} type="file" id={i} className='hidden' />
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            {/* submit button */}
                            <button
                                disabled={loader ? true : false}
                                type="submit"
                                className={`py-2 px-6 w-fit bg-blue-500 hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md mb-3 ${loader && 'bg-blue-400'} `}>
                                {
                                    loader ? <Loader loadingText={'Updating...'} /> : 'Update Product'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;