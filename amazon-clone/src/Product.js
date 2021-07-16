import React from 'react'
import "../src/Product.css"
import {useStateValue} from "./StateProvider"
function Product({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();
    
    const addToBasket=()=>{
        //dispatch some action into the dataLayer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }
    return (
        <div className="product">
            <img src={image} alt="" ></img>
            <div className="product_info">
                <p>{title}</p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i)=>{
                        return(<p>⭐</p>);
                    })}
                
                
                </div> 
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                  
            </div>
            
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
