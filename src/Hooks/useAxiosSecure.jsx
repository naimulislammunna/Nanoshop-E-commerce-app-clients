import axios from "axios";

const token = localStorage.getItem('access-token');
// console.log(token);

const axiosInstance = axios.create({
    // baseURL: 'https://nano-shop-server.vercel.app',
    baseURL: 'http://localhost:4000',
    headers:  {authorization: `Bearer ${token}`},
    withCredentials: true
})
const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;