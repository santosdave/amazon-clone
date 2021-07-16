import React from 'react';
import "../src/Subtotal.css";
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    
    return (
        <div >
            <div className="subtotal">
            <CurrencyFormat renderText={(value) =>(
                <>
                <p> Subtotal (<b>{basket?.length}</b> items):<strong>{value}</strong></p>
                <small className="subtotal_gift">
                    <input type="checkbox"></input>This order contains a gift.
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
               <p><button>Proceed to checkout</button></p>
            </div>
        </div>
    )
}

export default Subtotal
