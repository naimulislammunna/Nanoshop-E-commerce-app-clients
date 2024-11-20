import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import axios from "axios";
import GoogleSignIn from "../Components/GoogleSignIn";

const Register = () => {
    const { handleRegisterUser, updateUserProfile } = useContext(AuthContext);
    const imgKey = import.meta.env.VITE_imgBB_key;
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, password, confirmPassword, role } = data;

        if (password === confirmPassword) {
           handleRegisterUser(email, password)
                .then(async () => {
                    toast.success('Register Successfull')
                    navigate(location?.state || '/');
                    const photo = { image: data.photo[0] }
                    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imgKey}`, photo, {
                        headers: {
                            "content-type": "multipart/form-data"
                        }
                    })
                    updateUserProfile(name, response.data.data.display_url)
                    const user = {
                        name,
                        email,
                        role,
                        photo: response.data.data.display_url,
                        status: role === 'seller' ? 'pending' : 'approved'
                    }

                    const res = await axiosPublic.post('/users', user);
                    console.log("server res", res);
                }
                )
                .catch(err => toast.error(err.message.split('/')[1])
                )
        }
        else{
            toast.error('Password does not match with Confirm Password')
        }

    }
    return (
        <div className="my-5">
            <div className="mx-auto w-full max-w-3xl space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">
                <h1 className="text-3xl font-semibold text-cyan-600">Register</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-5"
                >
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                        <label htmlFor="username_2" className="block font-medium">
                            Name
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="name"
                            type="text"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className="text-red-700">This field is required</p>}
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="photoUrl" className="block font-medium">
                            Photo
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="photoUrl"
                            placeholder="Enter Url"
                            name="photo"
                            type="file"
                            {...register("photo", { required: true })}
                        />
                        {errors.photo && <p className="text-red-700">This field is required</p>}
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="email" className="block font-medium">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="email"
                            placeholder="Enter username"
                            name="email"
                            type="email"
                            {...register("email", { required: "Email is required", maxLength: { value: 20, message: 'max length 20' } })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p role="alert" className="text-red-700">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="email" className="block font-medium">
                            Role
                        </label>
                        <select
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            name=""
                            id=""
                            {...register("role")}
                        >
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>

                        </select>
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                            {...register("password", {
                                required: "Password is require", pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#\$%\^&\*])[A-Za-z\d@!#\$%\^&\*]{8,}$/,
                                    message: "At least 8 characters &  uppercase & lowercase & one number & one special character"
                            }
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p role="alert" className="text-red-700">{errors.password.message}</p>}
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Confirm Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="confirm-password"
                            type="password"
                            {...register("confirmPassword")}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer"
                    />
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    I have an account?
                    <Link to="/sign-in">
                        <a className="ml-3 font-semibold underline">Sign In</a>
                    </Link>
                </p>
                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>
                <GoogleSignIn/>
            </div>
        </div>
    );
};

export default Register;
