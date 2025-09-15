import { useQuery } from "react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Loader from "../../Components/Loader";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";

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
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 col-span-9 mx-auto">
                    {
                        products?.result.length ? <>{products?.result?.map(product => <ProductCard key={product._id} item={product}></ProductCard>)} </> : <div className="min-h-full min-w-full col-span-10 justify-center items-center"><h1 className="text-xl text-center font-bold">No Products Found</h1></div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;