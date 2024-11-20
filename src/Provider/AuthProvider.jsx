import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const handleRegisterUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userlogOut = () => {
        setLoading(true);
        setUser(null)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const res = await axiosPublic.post('/jwt', { email: currentUser.email })
                localStorage.setItem('access-token', res?.data?.token)
                setLoading(false);
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false)
            }
        })
        return () => {
            unsubscribe()
        };
    }, [])



    const information = {
        handleRegisterUser,
        updateUserProfile,
        user,
        loading,
        userSignIn,
        userlogOut
    }

    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element
}

export default AuthProvider;