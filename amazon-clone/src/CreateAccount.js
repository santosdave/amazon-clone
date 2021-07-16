import {Link} from "react-router-dom";
import React, {useState} from 'react';
import "../src/CreateAccount.css";
import {auth} from "../src/firebase";
function CreateAccount() {
    /* const [name, setName]=useState(""); */
    const [email, setEmail]=useState("");
    
    const [password, setPassword]=useState("");
    
    /* const [password2, setPassword2]=useState("") ; */
    const createAccount=(e)=>{
        e.PreventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        
        
        .then((auth)=>{
            const user= auth().currentUser;
            console.log(user);
            /* if (auth) {
                history.push('/')
            } */
        })
        .catch(error =>alert(error.message))
    }
    
    
    return (
        <div className="account">
            <Link to="./">
            <div>
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </div>
            </Link>
            <div className="account_details">
                <h1>Create Account</h1>
                <form>
                   {/*  <h5>Your name</h5>
                    <input className="account_input" type="text" value={name} onChange={e=>setName(e.target.value)} required></input> */}
                    <h5>Email</h5>
                    <input className="account_input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required></input>
                    <h5>Password</h5>
                    <input className="account_input" type="password" value={password} onChange={e=>setPassword(e.target.value)}  required></input>
                    {/* <h5>Re-enter Password</h5>
                    <input className="account_input" type="password" value={password2}  onChange={e=>setPassword2(e.target.value)}  required></input> */}
                    {/* <p>
                        <input type="checkbox" required></input>
                         By sign-In you have agreed to the Amazon's clone terms and conditions and You have accepted to abide by them.
                    </p> */}
                    <button className="createAccount_btn" type="submit" onClick={createAccount}>Create an account</button>
                    
                    {/* <p className="account_signin">Already have an account?<Link to="./login"><a href="#"> Sign-In</a></Link> </p> */}
                </form>

            </div>
        </div>
    )
}

export default CreateAccount

