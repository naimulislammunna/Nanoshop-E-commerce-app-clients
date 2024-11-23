import { useQuery } from "react-query";
import Loader from "../../Components/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCard from "../Products/ProductCard";

const FeatureProducts = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products, isLoading } = useQuery({
        queryKey: ['produtct'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-products`)
            return res.data;
        }
    })
    if(isLoading) return <Loader/>
    return (
        <div className="my-20  container">
            <h1 className="text-2xl font-bold text-center my-5">Feature Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 col-span-9">
                    {
                      products?.result?.slice(0, 4).map(product => <ProductCard key={product._id} item={product}></ProductCard>)
                    }
                </div>
        </div>
    );
};

export default FeatureProducts;