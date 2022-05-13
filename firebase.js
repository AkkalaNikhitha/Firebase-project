import React, { useEffect ,useState} from "react";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signinWithEmailAndPassword,getAuth,signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAKognLow4j32ZQdZVOhj-Pd3zwp1cssDc",
  authDomain: "authentication-384db.firebaseapp.com",
  projectId: "authentication-384db",
  storageBucket: "authentication-384db.appspot.com",
  messagingSenderId: "1093717474975",
  appId: "1:1093717474975:web:ad8649bb12b4663a73acaa",
  measurementId: "G-B0QQFW0F0H"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}
export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}
export function logout(email,password){
    return signOut(auth)
}
export function useAuth(){
    const[currentUser,setcurrentUser]=useState();

    useEffect(()=>{
        const x= onAuthStateChanged(auth,user=>setcurrentUser(user))
        return x;
    },[])
return currentUser;
}
