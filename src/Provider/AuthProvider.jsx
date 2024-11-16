import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleRegisterUser = (email, password) =>{
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

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }
        })
        return  unsubscribe();
    }, [])

    const information = {
        handleRegisterUser,
        updateUserProfile,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.element
}

export default AuthProvider;