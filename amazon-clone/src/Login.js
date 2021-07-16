import {Link} from "react-router-dom";
import React, {useState} from "react";
import "../src/Login.css";
import {auth} from "../src/firebase";
function Login() {
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const signIn=e=>{
        e.PreventDefault();
        //firebase stuff
    }
    return (
        <div className="login">
            <Link to="./">
            <div>
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </div>
            </Link>
            <div className="login_details">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input className="login_input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required></input>
                    <h5>Password</h5>
                    <input className="login_input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required></input>
                    <button className="login_signin_btn" type="submit" onClick={signIn}>SignIn</button>
                    <p>By sign-In you have agreed to the Amazon's clone terms and conditions and You have accepted to abide by them</p>
                    <Link to="/createaccount">
                        <button className="login_account">Create an account</button>
                    </Link>
                </form>
                
            </div>
            
        </div>
    )
}

export default Login
