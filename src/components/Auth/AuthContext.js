import React, { useState, useEffect, useContext } from 'react';
import { useAuth, signup, login, logout } from '../../firebase';

const AuthContext = React.createContext();

export const useAuthorization = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    // const [currUser, setCurrUser] = useState();
    const [loading, setLoading] = useState(false);
    const currUser = useAuth();

    // const signup = (email, password) => {
    //     return auth.createUserWithEmailAndPassword(email, password);
    // }


    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrUser(user);
    //         setLoading(false);
    //     })
    //     return unsubscribe;
    // }, [])


    const value = {
        currUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
