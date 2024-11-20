import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";

const GoogleSignIn = () => {
    const { handleGoogleSignIn } = useAuth();
    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(res => {
                console.log(res)
                toast.success("Google Sign In Successfull")
            }
            )
            .catch(err => toast.error(err.message.split('/')[1]))
        
    }

    return (
        <div className="flex justify-center">
            <button onClick={handleGoogle} className="text-2xl p-3 rounded-full border"><FaGoogle /></button>
        </div>
    );
};

export default GoogleSignIn;