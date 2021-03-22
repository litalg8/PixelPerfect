import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg'


function AppHeader() {
    return (
        <div>
            <header className="app-header">
                <nav className="main-nav container flex justify-between">
                    <div className="logo nav-item"><img className="logo" src={logo} alt="logo"/></div>
                </nav>
            </header>
               
        </div>

    )
}

export default AppHeader; 