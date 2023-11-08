import React, { Children, createContext, useEffect, useState } from 'react';
import auth from '../firebaseConfig';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const[user, setUser] = useState(null)
    const[loading, setLoading] =useState(true)

    //create new user
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    //signinuser
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //google signin
    const googleSignin = ()=>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }

    //userTracer
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoading(false)
        })
    },[])

    //logout
    const logOut = ()=>{
       return signOut(auth)
    }

    //updateUser
    const handleUpdateProfile= (name,photo)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo})
    }


    const authentaication ={
        user,
        loading,
        createUser,
        signIn,
        googleSignin,
        logOut,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authentaication}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;