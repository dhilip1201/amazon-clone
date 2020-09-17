import React,{useState, useEffect} from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    
    const [{basket, user}, dispatch]=useStateValue();
    const history=useHistory();
    
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        const getClientSecret = async ()=>{
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies sub-units
                url:`/payments/create?total=${getBasketTotal(basket) * 100 }`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS>>>', clientSecret);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);
        const payload =await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntent = payment confimation

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })

    }
    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout <Link to="/checkout">{basket?.length} items</Link> </h1>
                <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Palaghat main road,</p>
                        <p>Pollachi, Coimbatore.</p>
                        </div>
                </div>
                <div className="payment__section">
                        <div className="payment__title">
                        <h3>Reviews Items and Delivery</h3>
                        </div>
                        <div className="payment__items">
                        {basket?.map(item => (
                        <CheckoutProduct
                        id= {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating ={item.rating}
                        />

                    ))}
                        </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                        
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                        
                            <CardElement onChange={handleChange} />
                            
                            <div className="payment__priceContainer">
                            <CurrencyFormat 
                                renderText= {(value) => (
                                    
                                    <h3>Order Total: {value}</h3>
                                   
                                     )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} 
                                    displayType={"text"} 
                                    thousandSeparator={true} 
                                    prefix={"र"}
                                />
                                <button disabled={ processing || disabled || succeeded }>
                                    <span>{processing ?<p>Processing</p>:"Buy Now" }</span>
                                </button>
                                <p className="payment__dummyCard">try this dummy card:(4242 4242 4242 4242 04/24 242 42424) </p>
                            </div>
                            {error && <div>{error}</div> }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
