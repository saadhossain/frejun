import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true)
    //Set Logged in user to a state
    const [user, setUser] = useState()
    //User Registration using email and password
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //User Login using email and password
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //User logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //Find logged in user from auth
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [auth])
    const userInfo = { userRegister, userLogin, user, logOut, loading, setLoading }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;