import { FaUser } from "react-icons/fa6";
import { MdAdminPanelSettings, MdDelete } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UserCard = ({user, refetch}) => {
    const axiosSecure = useAxiosSecure();

    const handleRole = async (id)=>{
        const res = await axiosSecure.patch(`/users-role/${id}`);

        if (res.data?.modifiedCount > 0) {
            toast.success('Make Seller Succesfully',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            refetch();
        }
    }
    const handleCencel = async (id) => {
        const res = await axiosSecure.delete(`/users/${id}`);
        if (res.data?.deletedCount) {
            toast.success("Users Deleted")
            refetch();
        }
    }
    return (
        <>
          <tr>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                        <div className="flex items-center gap-x-2">
                            <img className="object-cover w-10 h-10 rounded-full" src={user?.photo} alt="" />
                            <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">{user?.name}</h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className={`${user.status === 'Blocked' ? 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800' : 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800'}`}>
                        {
                            user.status === 'Blocked' ? '' : <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        }

                        <h2 className={`${user.status === 'Blocked' ? 'text-red-500' : 'text-sm font-normal text-emerald-500'}`}>{user?.status}</h2>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <div className="cursor-pointer">
                        {
                            user?.role === 'admin' ? <>
                                <p className="flex justify-center text-xl text-emerald-600"><MdAdminPanelSettings /></p>
                                <p className="text-center"><span>Admin</span></p>
                            </>
                                : <>
                                    {
                                        user?.role === 'seller' ? <><p className="flex justify-center"><FaUser /> </p>
                                        <p className="text-center"><span>Seller</span></p></> : <><p className="flex justify-center text-lg"><IoPeople /></p>
                                        <p  onClick={() => handleRole(user._id)} className="text-center"><span>Make Seller</span></p></>
                                    }
                                </>
                        }
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center">
                    <div className="inline-flex items-center px-3 py-3 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                    {
                                        user?.role === 'admin' ? '' : <button onClick={() => handleCencel(user._id)} className="text-red-500 text-2xl"><MdDelete /></button>
                                    }
                                    </div>
                    </div>
                </td>
            </tr>  
        </>
    );
};

export default UserCard;