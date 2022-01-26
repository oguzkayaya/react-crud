import React from 'react'
import logo from '../logo.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    Posts
                </div>
            </div>
            <div className="login-button">
                <button className="btn-login">Login</button>
            </div>
        </div>
    )
}

export default Navbar
