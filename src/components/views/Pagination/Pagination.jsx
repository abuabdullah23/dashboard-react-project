import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = ({ pageNumber, setPageNumber, totalItem, perPage, showItem }) => {

    let totalPage = Math.ceil(totalItem / perPage);
    let startPage = pageNumber;

    let dif = totalPage - pageNumber;

    if (dif <= showItem) {
        startPage = totalPage - showItem;
    }

    let endPage = startPage < 0 ? showItem : showItem + startPage;

    if (startPage <= 0) {
        startPage = 1
    }

    const createBtn = () => {
        const buttons = [];
        for (let i = startPage; i < endPage; i++) {
            buttons.push(
                <li
                    onClick={() => setPageNumber(i)}
                    className={`
                    ${pageNumber === i ? 'bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white' : 'bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 text-[#d0d2d6] hover:text-white'} w-8 h-8 rounded-full flex justify-center items-center cursor-pointer`
                    }>
                    {i}
                </li>
            )
        }
        return buttons;
    }
    return (
        <ul className="flex gap-3">
            {
                pageNumber > 1 && <li onClick={() => setPageNumber(pageNumber - 1)} className="w-8 h-8 rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer">
                    <BsChevronLeft />
                </li>
            }
            {
                createBtn()
            }
            {
                pageNumber < totalPage-1 && <li onClick={() => setPageNumber(pageNumber + 1)} className="w-8 h-8 rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer">
                    <BsChevronRight />
                </li>
            }

        </ul>
    );
};

export default Pagination;