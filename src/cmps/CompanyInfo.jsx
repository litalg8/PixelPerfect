import React from 'react'; 
import iconListA from '../assets/imgs/icon-snappy-process.svg'; 
import iconListB from '../assets/imgs/icon-affordable-prices.svg'
import iconListC from '../assets/imgs/icon-people-first.svg'


function CompanyInfo(){
    return(
        <section className="company container">
        <div className="section-border g"></div>
        <h1>We’re different</h1>
        <div className="company-info flex">
          <ul className="info-1">
            <li>
              <div className="icon-list icon-1"><img src={iconListA} /></div>
            </li>
            <li>
              <h2>Snappy Process </h2>
            </li>
            <li>
              <p>Our application process can be completed in minutes, not hours. Don’t get
                stuck filling in tedious forms.</p>
            </li>
          </ul>
          <ul className="info-2">
            <li>
              <div className="icon-list icon-2"><img src={iconListB} /></div>
            </li>
            <li>
              <h2>Affordable Prices</h2>
            </li>
            <li>
              <p>
                We don’t want you worrying about high monthly costs. Our prices may be low,
                but we still offer the best coverage possible.
              </p>
            </li>
          </ul>
          <ul className="info-3">
            <li>
              <div className="icon-list icon-3">
                <div className="icon-list icon-2"><img src={iconListC} /></div>
              </div>
            </li>
            <li>
              <h2>People First</h2>
            </li>
            <li>
              <p> Our plans aren’t full of conditions and clauses to prevent payouts. We make
                sure you’re covered when you need it.</p>
            </li>
          </ul>
        </div>
      </section>
    )
}

export default CompanyInfo; 