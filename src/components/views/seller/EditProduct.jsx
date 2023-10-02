import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EditProduct = () => {
    const [catShow, setCatShow] = useState(false);
    const [category, setCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [imageShow, setImageShow] = useState([]);

    const categories = [
        { id: 1, name: 'Sports' },
        { id: 2, name: 'T-Shirt' },
        { id: 3, name: 'Pant' },
        { id: 4, name: 'Watch' },
        { id: 5, name: 'Mobile' },
    ]

    const [allCategory, setAllCategory] = useState(categories);

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
            console.log(img);
            console.log(files[0]);
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
            name,
            brand,
            category,
            stock: parseInt(stock),
            price: parseInt(price),
            discount: parseInt(discount),
            description,
            imageShow
        }
    }

    useEffect(() => {
        setImageShow([
            "blob:http://localhost:5173/482afe69-09c9-4fdc-94b7-f7df2a10d64e",
            "blob:http://localhost:5173/482afe69-09c9-4fdc-94b7-f7df2a10d64e",
        ])
    }, [])



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
                                imageShow.map((img, i) => <div key={i}>
                                    <label htmlFor={i}>
                                        <img src={img} alt="image" />
                                    </label>
                                    <input onChange={(e) => changeImage(img, e.target.files)} type="file" id={i} className='hidden' />
                                </div>)
                            }

                        </div>
                        <div>
                            <button className='bg-blue-500 
                            hover:shadow-blue-500/50 shadow-lg text-white rounded-md px-7 py-2 my-2'>Update Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;