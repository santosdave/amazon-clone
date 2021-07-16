import React from "react";
import "../src/App.css";
import Header from "../src/Header";
import Home from "../src/Home";
import Checkout from "../src/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/Login";
import CreateAccount from "../src/CreateAccount";
function App() {
    return ( 
    <Router>
        <div className="App"> 
        
            <Switch>
            <Route path="/login">
                <Login/> 
            </Route>
            <Route path="/createaccount">
                <CreateAccount/> 
            </Route>
            

            <Route path="/checkout">
                <Header/>
                <Checkout/>
                
            </Route>
            <Route path="/">
                <Header/> 
                <Home/>
            </Route>
               
            </Switch>
        </div>
    </Router>
    );
    }
    export default App;