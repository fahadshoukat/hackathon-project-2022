import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, createContext, useEffect } from "react";
import {auth} from '../../config/firebase'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState("");

  function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function Login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={{user, signUp, Login}}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;