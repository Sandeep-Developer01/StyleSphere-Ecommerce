import React, { useContext } from "react";
import "./CartItems.css";
import {ShopContext} from "../../Context/ShopContext.jsx";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
    return (
        <div className="cartItems">
           <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div>
           <hr></hr>
           {all_product.map((e)=>{
             if(cartItems[e.id] > 0){
                return <div>
                <div className="cartItems-format cartItems-format-main">
                    <img src={e.image} alt="" className="cartIcon-product-icon"/>
                    <p>{e.name}</p>
                    <p>&#8377;{e.new_price}</p>
                    <button className="cartItems-quantity">{cartItems[e.id]}</button>
                    <p>&#8377;{e.new_price*cartItems[e.id]}</p>
                    <img className="cartItems-remove-icon" src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
                </div>
                <hr></hr>
               </div>
             }
             return null;
           })}
           <div className="cartItems-down">
            <div className="cartItems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartItems-total-item">
                        <p>Subtotal</p>
                        <p>&#8377;{getTotalCartAmount()}</p>
                    </div>
                    <hr></hr>
                    <div className="cartItems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr></hr>
                    <div className="cartItems-total-item">
                        <h3>Total</h3>
                        <h3>&#8377;{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className="cartItems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartItems-promobox">
                    <input type="text" placeholder="promo code"></input>
                    <button>Submit</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default CartItems;