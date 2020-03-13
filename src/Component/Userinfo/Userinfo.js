import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Userinfo.css';

const Userinfo = (props) => {
    const {img, name, email, phone, address, website, annualincome} = props.user;

    return (
        <div className="user">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="userinfo">
                <h3>Name: {name}</h3>
                <p><small>Email: {email}</small></p>
                <p><small>Phone: {phone}</small></p>
                <p><small>Address: {address.street} .{address.suite} .{address.city}</small></p>
                <p><small>Website: {website}</small></p>
                <h4>Annual-Income: ${annualincome}</h4>
                <button className="main-btn"
                    onClick={() => props.handleAdd(props.user)}
                    ><FontAwesomeIcon icon={faPlus} /> Add Now</button>
            </div>
        </div>
    );
};

export default Userinfo;