import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    <Link to="/">
                        Posts
                    </Link>
                </div>
            </div>
            <div className="login-button">
                <button className="btn btn-login">Login</button>
            </div>
        </div>
    )
}

export default Navbar
