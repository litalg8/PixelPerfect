import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg'


function AppHeader() {
    return (
        <div>
            <header className="app-header">
                <nav className="main-nav container flex justify-between">
                    <div className="logo nav-item"><img className="logo" src={logo} alt="logo"/></div>
                    <ul className="route-nav flex align-center">
                        <li className="item nav-item"><NavLink to="/about" target="_blank"> how we work</NavLink></li>
                        <li className="item nav-item"><NavLink to="/blog"  target="_blank">blog</NavLink></li>
                        <li className="item nav-item"><NavLink to="/account"  target="_blank">account</NavLink></li>
                        <li className="item nav-item"><button className="header-button" >view plans</button></li>
                    </ul>
                </nav>
                {/* <nav className="mobile-nav">
                    <div className="burger-nav">☰</div>
                    <div className="close-nav">x</div>
                </nav> */}

            </header>
               
        </div>

    )
}

export default AppHeader; 