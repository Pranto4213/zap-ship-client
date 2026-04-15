import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);



 const resisterUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 }

    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{ 
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const logOut = ()=>{
        setLoading(false)
        return signOut(auth)
    }
      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
        }, [])

   const authInfo = {
        user,
        loading,
        signInUser,
        resisterUser,
        googleSignIn,
        logOut
        }

  
    return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
            
        
    );
};

export default AuthProvider;