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

    const handleReset=()=>{
        setBrand('')
        setSearch('')
        setCategory('')
        setSort('')
        window.location.reload()
    }
    // console.log(search, sort, brand, category);

    return (
        <div className="container">
            <div className="flex justify-between items-center my-10">
                <SearchBar setSearchValue={(e) => setSearch(e)} />
                <SortBar setSortValue={(e) => setSort(e)} />
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                    <FilterBar setBrandValue={(e) => setBrand(e)} setCategoryValue={(e) => setCategory(e)} products={products}/>
                    <div>
                    <button onClick={handleReset} className="btn btn-primary w-full mx-auto my-4">Reset</button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5 col-span-9">
                    {
                        isLoading ? <Loader/> : products.result.map(product => <ProductCard key={product._id} item={product}></ProductCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;