import React, { forwardRef } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY);
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
))

const Payments = () => {

    // this function use for react-window
    const Row = ({ index, style }) => {
        return (
            <div
                style={style}
                className="flex text-sm">
                <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
                <div className="w-[25%] p-2 whitespace-nowrap">$54452</div>
                <div className="w-[25%] p-2 whitespace-nowrap">
                    <span className="py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs">pending</span>
                </div>
                <div className="w-[25%] p-2 whitespace-nowrap">12 oct 2023</div>
            </div>
        )
    }

    return (
        <div className='px-2 md:px-7 py-5'>
            {/* Total Overview */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {/* Total Sales */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-lg font-bold'>$5948</h2>
                        <span className='text-sm font-normal'>Total Sales</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#28c76f] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Available Amount */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-lg font-bold'>$524</h2>
                        <span className='text-sm font-normal'>Available Amount</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#cd00d8] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Withdrawal Amount */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-lg font-bold'>$250</h2>
                        <span className='text-sm font-normal'>Withdrawal Amount</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#00cfe8] shadow-lg font-semibold' />
                    </div>
                </div>

                {/* Pending Amount */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-lg font-bold'>$438</h2>
                        <span className='text-sm font-normal'>Pending Amount</span>
                    </div>
                    <div className='w-[46px] h-[46px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#7367f0] shadow-lg font-semibold' />
                    </div>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 pb-4 pt-5'>
                {/* Send request section */}
                <div className='bg-[#283046] rounded-md p-5'>
                    <h2 className='text-lg'>Send Request</h2>
                    <div className='py-5'>
                        <form>
                            <div className='flex flex-wrap gap-3'>
                                <input min={0} className='md:w-[79%] px-3 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-[#d0d2d6]' type="number" name="amount" id="amount" placeholder='$0' />
                                <button className='bg-indigo-500 w-fit hover:shadow-indigo-500/50 shadow-lg text-white rounded-sm px-3 py-2'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className='text-lg pb-4'>Pending Request</h2>
                        <div className='w-full overflow-x-auto'>
                            {/* Table Header */}
                            <div className='flex bg-[#161d31] uppercase text-xs min-w-[340px]'>
                                <div className='w-[25%] p-2'>No</div>
                                <div className='w-[25%] p-2'>Amount</div>
                                <div className='w-[25%] p-2'>Status</div>
                                <div className='w-[25%] p-2'>Date</div>
                            </div>
                            {/* Table Content */}
                            {
                                <List
                                    style={{ minWidth: '340px', overflowX: 'hidden' }}
                                    className="List"
                                    height={350}
                                    itemCount={111}
                                    itemSize={35}
                                    outerElementType={outerElementType}
                                >
                                    {Row}
                                </List>
                            }

                        </div>
                    </div>
                </div>

                {/* success withdraw section */}
                <div className='bg-[#283046] rounded-md p-5'>
                    <div>
                        <h2 className='text-lg pb-4'>Success Withdraw</h2>
                        <div className='w-full overflow-x-auto'>
                            {/* Table Header */}
                            <div className='flex bg-[#161d31] uppercase text-xs min-w-[340px]'>
                                <div className='w-[25%] p-2'>No</div>
                                <div className='w-[25%] p-2'>Amount</div>
                                <div className='w-[25%] p-2'>Status</div>
                                <div className='w-[25%] p-2'>Date</div>
                            </div>
                            {/* Table Content */}
                            {
                                <List
                                    style={{ minWidth: '340px', overflowX: 'hidden' }}
                                    className="List"
                                    height={350}
                                    itemCount={111}
                                    itemSize={35}
                                    outerElementType={outerElementType}
                                >
                                    {Row}
                                </List>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payments;