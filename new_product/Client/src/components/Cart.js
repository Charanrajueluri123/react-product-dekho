// Cart.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
    const [cost, setCost] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ));
        setCost(ans);
    };

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);

    return (
        <article>
            {cart?.map((item) => (
                
                <div className='cart-box' key={item.id}>
                    <div className='cart_img'>
                        <img src={item.img1} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
                
            ))}
            <div className='total'>
                <span>Total Prices of your cart</span>
                <span>Rs - {cost}</span>
            </div>

            <div className='total'>
                {/* Pass cost as state */}
                {/* <Link to={{ pathname: '/payment', state: { cost: cost } }}>
                    <button className='proceed'>Proceed to Checkout</button>
                </Link> */}

            <Link to={`/payment/${cost}`}><button className='proceed'>Proceed to Checkout</button></Link>  
            </div>
        </article>
    );
};

export default Cart;
