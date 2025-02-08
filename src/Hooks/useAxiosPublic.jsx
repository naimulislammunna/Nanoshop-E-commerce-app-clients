import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://nano-shop-server.vercel.app',
    withCredentials: true
})
const useAxiosPublic = () => {
    return axiosInstance;
};

export default useAxiosPublic;