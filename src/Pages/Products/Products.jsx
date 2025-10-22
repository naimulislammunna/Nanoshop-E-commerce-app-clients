import { useQuery } from "react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Loader from "../../Components/Loader";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = () => {
    const axiosPublic = useAxiosPublic();

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['produtct', search, sort, brand, category],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-products?search=${search}&sort=${sort}&brand=${brand}&category=${category}`)
            return res.data;
        }
    })


    const handleReset = () => {
        setBrand('')
        setSearch('')
        setCategory('')
        setSort('')
    }

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`mx-1 px-4 py-2 text-[0.9rem] sm:text-[1rem] rounded-full transform transition-all duration-300 ${currentPage === i
                        ? "bg-[#3B9DF8] text-white scale-110 shadow-md"
                        : "bg-transparent text-blue-600 hover:bg-blue-100"
                        }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    if (isLoading) return <Loader />

    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-3 my-10">
                <SearchBar setSearchValue={(e) => setSearch(e)} />
                <SortBar setSortValue={(e) => setSort(e)} />
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-3">
                    <FilterBar setBrandValue={(e) => setBrand(e)} setCategoryValue={(e) => setCategory(e)} products={products} />
                    <div>
                        <button onClick={handleReset} className="btn bg-sky-950 text-white border-none w-full mx-auto my-4 hover:bg-primary">Reset</button>
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                        {
                            products?.result.length ? <>{products?.result?.map(product => <ProductCard key={product._id} item={product}></ProductCard>)} </> : <div className="min-h-full min-w-full col-span-10 justify-center items-center"><h1 className="text-xl text-center font-bold">No Products Found</h1></div>
                        }
                    </div>
                    <div className="flex items-center flex-wrap justify-center mt-8 space-x-1 sm:space-x-2">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            <FaChevronLeft />
                        </button>
                        {renderPageNumbers()}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Products;

