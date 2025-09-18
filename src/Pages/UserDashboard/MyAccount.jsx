import useUserData from "../../Hooks/useUserData";

const MyAccount = () => {
    const {userData} = useUserData();
    const {email, name} = userData;
    
    return (
        <div className="mt-10">
            <h1 className="text-lg font-semibold text-sky-900 my-4">Manage My Account</h1>
            <div className="flex gap-5 w-full">
                <div className="bg-slate-100 p-5 rounded-lg w-1/2">
                    <p className="text-md font-semibold text-sky-900">Name</p>
                    <h4>{name}</h4>
                </div>
                <div className="bg-slate-100 p-5 rounded-lg w-1/2">
                    <p className="text-md font-semibold text-sky-900">Email</p>
                    <h4>{email}</h4>
                </div>
            </div>
            <div className="bg-slate-100 p-5 rounded-lg my-5">
                <h1>Address</h1>
            </div>
        </div>
    );
};

export default MyAccount;