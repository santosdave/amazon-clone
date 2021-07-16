import React from 'react';
import "../src/Checkout.css";
import Subtotal from "../src/Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"


function Checkout() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZBBtsqzdEBPX3qnLzR4gizYD4EGKzX2Zg&usqp=CAU" alt=""></img>
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                       <div>
                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price} 
                               
                            />
                            ))}    
                        </div>
                       
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
                
            </div>
        </div>
    )
}

export default Checkout
