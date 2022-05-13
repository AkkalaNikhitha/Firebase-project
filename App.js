import React, { useState, useRef } from  "react";

import{signup,login,logout,useAuth} from './firebase.js';

function App(){

const[loading,setloading]=useState(false);

const currentUser=useAuth();

const emailRef=useRef();
const passwordRef=useRef();

async function handleSignup(){
    setloading(true);
    await signup(emailRef.current.value,passwordRef.current.value)
    setloading(false);
}
async function handlelogin(){
    setloading(true);
    try{
        await login(emailRef.current.value,passwordRef.current.value) 
    }
   catch{
       alert('Error');
   }
   setloading(false);
}
async function handlelogout(){
    setloading(true);
    try{
        await logout() 
    }
   catch{
       alert('Error..!');
   }
   setloading(false);
}
return(
    <div>
        <h3>current User:{currentUser?.email}</h3>
        <input ref={emailRef} type='text'placeholder="Email"></input><br></br>
        <input ref={passwordRef} type='password'placeholder="password"></input><br></br>
    <button disabled={loading || currentUser} onClick={handleSignup}>signup</button>
    <button disabled={loading || currentUser} onClick={handlelogin}>login</button>
    <button disabled={loading || currentUser} onClick={handlelogout}>logout</button>
    </div>
)
}
export default App;


