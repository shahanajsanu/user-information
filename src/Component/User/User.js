import React, { useState } from 'react';
import fakeData from '../../Data';
import './User.css';
import Userinfo from '../Userinfo/Userinfo';
import Cart from '../Cart/Cart';


const User = () => {
    const all = fakeData.slice(0, 15);
    const [users, setUsers] = useState(all);
    const [cart, setCart] = useState([]);

    const handleAdd = (user) =>{
        const newCart = [...cart, user]
        setCart(newCart);
    }
    return (
        <div className="users-list-container">
            <div className="user-container">
                {
                    users.map(user => <Userinfo
                        handleAdd = {handleAdd}
                        user ={user}
                        ></Userinfo>)
                }
            </div>
            <div>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;