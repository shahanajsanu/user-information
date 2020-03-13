import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <h1>USER INFORMATION</h1>
            <nav>
                <a href="/users">User List</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage User</a>
            </nav>
        </div>
    );
};

export default Header;