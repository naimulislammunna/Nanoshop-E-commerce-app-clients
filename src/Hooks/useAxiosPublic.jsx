import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://nano-shop-server.vercel.app',
    baseURL: 'http://localhost:4000',
    withCredentials: true
})
const useAxiosPublic = () => {
    return axiosInstance;
};

export default useAxiosPublic;