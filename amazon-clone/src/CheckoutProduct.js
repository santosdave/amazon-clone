import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider"
function CheckoutProduct({id,title,image,rating,price}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}></img>
            <div className="checkoutProduct_info">
                
                <p className="checkoutProduct_title">{title}</p>
            
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_,i)=>{
                        return(<p>⭐</p>);
                    })}
                
                
                </div> 
                <p className="checkoutProduct_price">
                    <>Price: <small>$</small></>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
                
        </div>
    )
}

export default CheckoutProduct
