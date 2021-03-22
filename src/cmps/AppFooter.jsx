import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.svg'


function AppFooter() {
  return (

    <footer className="footer-container">
      <div className="main-footer ">
        <nav className="browse-container container">
          <ul className="footer-list flex ">
          <div className="logo margin-r"><img src={logo} alt="logo" /></div>
            <ul className="footer-item margin-r">
              <li>  Marthwaite, Sedbergh </li>
              <li>  Cumbria</li>
              <li> +00 44 123 4567</li>
            </ul>
            <ul className="footer-item margin-r">
              <li> Open Times</li>
              <li> Mon - Fri: 09:00 AM - 10:00 PM</li>
              <li> Sat - Sun: 09:00 AM - 11:30 PM</li>
            </ul>


          </ul>
        </nav>
      </div>
    </footer>

  )
}

export default AppFooter;