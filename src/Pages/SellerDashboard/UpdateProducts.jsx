import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const { title, photo, brand, category, display, camera, processor, ram, rom, price } = data;

        const productInfo = {
            title,
            img: photo,
            brand,
            category,
            description: {
                display,
                camera,
                processor,
                ram,
                rom,
            },
            price,
            sellerEmail: user.email
        }


        const res = await axiosSecure.put(`/update-product/${id}`, productInfo);
        console.log('add-product', res.data);
        if (res.data.modifiedCount) {
            toast.success("Product Updated")
        }
    }
    return (
        <div>
            <div className="my-5 px-10">
                <div className="mx-auto w-full  space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">
                    <h1 className="text-3xl font-semibold text-cyan-600">Update Products</h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-5"
                    >
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                Title
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                Photo Link
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("photo", { required: true })}
                            />
                            {errors.photo && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                brand
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("brand", { required: true })}
                            />
                            {errors.brand && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                category
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("category", { required: true })}
                            />
                            {errors.category && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                display
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("display", { required: true })}
                            />
                            {errors.display && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                camera
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("camera", { required: true })}
                            />
                            {errors.camera && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                processor
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("processor", { required: true })}
                            />
                            {errors.processor && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                ram
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("ram", { required: true })}
                            />
                            {errors.ram && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                rom
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("rom", { required: true })}
                            />
                            {errors.rom && <p className="text-red-700">This field is required</p>}
                        </div>
                        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                            <label htmlFor="username_2" className="block font-medium">
                                price
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="name"
                                type="text"
                                {...register("price", { required: true })}
                            />
                            {errors.price && <p className="text-red-700">This field is required</p>}
                        </div>
                        <input
                            type="submit"
                            value="Add Product"
                            className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProducts;