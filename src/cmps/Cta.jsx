import React from 'react'; 
import {NavLink} from 'react-router-dom'

function Cta(){
    return(
        <section className="cta container align-center">
        <div className="cta-pattern-desktop flex padding justify-between">
          <h2 className="flex column">Ready to make a reservation?</h2>
          <button><NavLink to="/">Book a table</NavLink></button>
        </div>
      </section>
    )
}

export default Cta; 