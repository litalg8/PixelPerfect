import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../assets/imgs/logo.svg'


function AppFooter(){
    return(
    
  <footer className="footer-container">
    <div className="main-footer ">
      <nav className="social-container container flex justify-between">
        <span className="logo"><img src={logo} alt="logo" /></span>
        <ul className="social-list flex align-center">
          <li>
            <NavLink to="https://www.facebook.com/lital.gottlieb" target="_blank"></NavLink>
            <div className="fab fa-facebook-f">
            </div>
          </li>
          <li>
            <NavLink to="https://twitter.com/litalgottlieb" target="_blank"> </NavLink>
            <div className="fab fa-twitter"></div>
          </li>
          <li>
            <NavLink to="https://www.instagram.com/lital_go/?hl=en" target="_blank"> </NavLink>
            <div className="fab fa-instagram"></div>
          </li>
          <li>
            <NavLink to="https://www.pinterest.com/gottlieb1028/_saved/" target="_blank"> </NavLink>
            <div className="fab fa-pinterest"></div>
          </li>
        </ul>
        </nav>
      <nav className="browse-container container">
        <ul className="browse-list flex ">
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
          <ul className="footer-item margin-r">
            <div className="item-title">Contact </div>
            <li> Sales</li>
            <li> Support</li>
            <li> Live chat</li>
          </ul>
          <ul className="footer-item margin-r">
            <div className="item-title">Others </div>
            <li> Careers</li>
            <li> Press</li>
            <li> Licenses</li>
          </ul>
        </ul>
      </nav>
    </div>
  </footer>
        
    )
}

export default AppFooter; 