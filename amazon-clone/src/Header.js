import React from 'react'
import "../src/Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider"
function Header() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>
            
            <div className="header_search">
              <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_nav">
                <Link to="/login">
                <div className="header_option">
                    <span className="header_optionLineOne"> Hello Guest</span>
                    <span className="header_optionLineTwo">SignIn</span>

                </div>
                </Link>
                <div className="header_option">
                     <span className="header_optionLineOne">Returns</span>
                     <span className="header_optionLineTwo">&orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            
                <Link to="/Checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                


            </div>
        </div>
    )
}

export default Header
