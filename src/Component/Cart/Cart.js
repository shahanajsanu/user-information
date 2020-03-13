import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart= props.cart;
    const totalCount = cart.reduce((total, user) => total + Math.round(user.annualincome), 0);
    return (
        <div className="cart-container">
            <h1>User Summary</h1>
            <h4>User Count: {cart.length}</h4>
            <h3>Total User-Income: ${totalCount} </h3>
            <button className="main-btn">Add</button>
        </div>
    );
};

export default Cart;