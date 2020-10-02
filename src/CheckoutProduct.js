import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, title,image, price,rating, hideButton}) {
    const [{basket}, dispatch]=useStateValue();
    const removeFromBasket =()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        });
    }
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProduct__image" src={image} alt=""/>
            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <p className="CheckoutProduct__price">
                    <small>र</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <p className="product__star"> ☆ </p>
                    ))
                }
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove Product</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
