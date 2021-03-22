import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.svg'


function AppFooter() {
  return (

    <footer className="footer-container">
      <div className="main-footer ">
        <nav className="browse-container container">
          <ul className="browse-list flex ">
          <span className="logo"><img src={logo} alt="logo" /></span>
            <ul className="footer-item margin-r">
              <div className="item-title">Our company</div>
              <li> How we work</li>
              <li> Why Insure?</li>
              <li> View plans</li>
              <li> Reviews </li>
            </ul>
            <ul className="footer-item margin-r">
              <div className="item-title">Help me</div>
              <li> FAQ</li>
              <li> Terms of use</li>
              <li> Privacy policy</li>
              <li> Cookies</li>
            </ul>


          </ul>
        </nav>
      </div>
    </footer>

  )
}

export default AppFooter;