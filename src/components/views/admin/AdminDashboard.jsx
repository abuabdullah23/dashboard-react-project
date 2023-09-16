import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { RiProductHuntLine } from 'react-icons/ri';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    // for chart
    const state = {
        series: [
            {
                name: "Orders",
                data: [34, 43, 12, 70, 44, 50, 85, 67, 26, 92, 69, 100]
            },
            {
                name: "Revenue",
                data: [12, 20, 98, 50, 85, 54, 44, 92, 67, 56, 69, 91]
            },
            {
                name: "Sellers",
                data: [77, 98, 64, 12, 44, 67, 50, 85, 99, 69, 92, 19]
            },
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            // ========= Responsive chart ===========
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '550px'
                        },
                    }
                }
            ]
            // ========= Responsive ===========
        }
    }

    return (
        <div className='px-2 md:px-7 py-5'>
            {/* Total Overview */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {/* Total Sales */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>$5948</h2>
                        <span>Total Sales</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#28c76f] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Total Products */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>24</h2>
                        <span>Products</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
                        <RiProductHuntLine className='text-[#cd00d8] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Total Sellers */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span>Sellers</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
                        <FaUsers className='text-[#00cfe8] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Total Orders */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>8</h2>
                        <span>Orders</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
                        <AiOutlineShoppingCart className='text-[#7367f0] shadow-lg font-semibold' />
                    </div>
                </div>
            </div>

            {/* Statistics chart and message section */}
            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#283046] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series} type='bar' height={350} />
                    </div>
                </div>

                {/* messaging chat */}
                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0 text-[#d0d2d6]'>
                    <div className='w-full bg-[#283046] p-4 rounded-md'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold text-lg pb-3'>Recent seller message</h2>
                            <Link className='font-semibold text-sm'>View All</Link>
                        </div>
                        <div className='flex flex-col gap-2 pt-6'>
                            <ol className='relative border-l border-slate-600 ml-4'>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                                        <img className='h-8 w-8 rounded-full' src="../../../../public/images/admin.jpg" alt="admin image" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-base font-normal'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>how are you</div>

                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                                        <img className='h-8 w-8 rounded-full' src="../../../../public/images/admin.jpg" alt="admin image" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-base font-normal'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>how are you</div>

                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                                        <img className='h-8 w-8 rounded-full' src="../../../../public/images/admin.jpg" alt="admin image" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-base font-normal'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>how are you</div>

                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>

            {/* Recent Order Section */}
            <div className='w-full p-4  bg-[#283046] rounded-md mt-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
                    <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((item, i) => <tr key={i}>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#sdjf3298u923</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>145</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><span>Pending</span></td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><span>Running</span></td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><Link>View</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default AdminDashboard;