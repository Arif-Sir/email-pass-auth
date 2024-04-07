// import React from 'react';

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Resister = () => {
    const[resiterSuccess,setResisterSucess]=useState('');
    const[resisterError,setResisterError]=useState('');
    const[showPass,setShowPass]=useState(false);

    const handelRegister = e =>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        console.log(email,password,accepted);

        // reset value
        setResisterError('');
        setResisterSucess('');

        if(password.length<6){
            setResisterError('put Atleat 6 chaharter');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setResisterError('1 ta hoileo de uppercase');
            return;
        }
        else if(!accepted){
            setResisterError('Please accept koren age');
            return;
        }

        
        
        // craet user
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user);
            setResisterSucess('USer Resister Success');
        })
        .catch(error => {
            console.error(error);
            setResisterError(error.message);
        })
    }
    return (
        <div>
        <div className="mx-auto md: w-1/2 bg-gray-400 px-10">
        <h3 className="text-3xl mb-8">Please Resester</h3>
            <form onSubmit={handelRegister}>
                <input className="mb-4 py-2 px-4 w-3/4" type="email" name="email" placeholder="input email" id="" />
                <br />
                <div className="relative">
                <input className="mb-4 py-2 px-4 w-3/4" 
                type= {showPass ? "text" :"password" }
                name="password"
                 placeholder="password" 
                 />
                <button className="absolute -ml-10 mt-2" onClick={()=> setShowPass(!showPass)}>Show
                {/* if want to use pic {
                    showPass? <eye> : <close eye></close>
                } */}
                </button>
                </div>
                
                <div>
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="" htmlFor="terms">Accept terms and Conditions</label>
                </div>
                <br />
                <input className="btn btn-primary w-3/4 mb-4" type="submit" value="Register" />
            </form>
            {
                resiterSuccess && <p className="text-green-700">{resiterSuccess}</p>
            }
            {
                resisterError && <p className="text-red-700">{resisterError}</p>
            }
            <p>Alraedy have a Account? Please <Link to="/daisyform" >Login</Link></p>
        </div>
        </div>
    );
};

export default Resister;