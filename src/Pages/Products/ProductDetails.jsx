import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const data = useLoaderData();

    return (
        <div className="container my-10">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="w-96"
                        src={data?.img}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.title}</h2>
                    <p>Brand: {data?.brand}</p>
                    <p>Category: {data?.category}</p>
                    <div>
                        <ul>
                            <li>Display: {data.description?.display}</li>
                            <li>camera: {data.description?.camera}</li>
                            <li>processor: {data.description?.processor}</li>
                            <li>ram: {data.description?.ram} <span>Rom: {data.description?.rom}</span></li>
                        </ul>
                    </div>
                    <div className="card-actions justify-end">
                        <p className="text-lg font-semibold text-red-800">$ {data?.price}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;