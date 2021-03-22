import React from 'react';
import { NavLink } from 'react-router-dom'
// import iconListA from '../assets/imgs/icon-snappy-process.svg'; 
// import iconListB from '../assets/imgs/icon-affordable-prices.svg'


function CompanyInfo() {
  return (
    <section className="company container">
      <div className="first-img">
        <div className="top"></div>
        <div className="grid container">
          <div className="placeholder-first"></div>
          <div className="text-section-1 flex column">
            <div className="section-border"> <span></span></div>
            <h1 className="flex column">
              Enjoyable place for all the family</h1>
            <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
               a tour of the farm before your meal.</p>
            <button className="top-button"><NavLink to="/">View plans</NavLink></button>
          </div>
        </div>
      </div>
      <div className="second-img">
        <div className="top"></div>
        <div className="grid container">
          <div className="text-section flex column">
            <div className="section-border"> <span></span></div>
            <h1 className="flex column">The most locally sourced food</h1>
            <p>  All our ingredients come directly from our farm or local fishery. So you can be sure that you’re 
                  eating the freshest, most sustainable food.</p>
            <button className="top-button"><NavLink to="/">View plans</NavLink></button>
          </div>
          <div className="placeholder"></div>
        </div>


      </div>
    </section>
  )
}

export default CompanyInfo;