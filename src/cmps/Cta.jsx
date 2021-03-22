import React from 'react'; 
import {NavLink} from 'react-router-dom'

function Cta(){
    return(
        <section className="cta container align-center">
        <div className="cta-pattern-desktop flex padding justify-between">
          <h2 className="flex column">Find out more <span>about how we work </span></h2>
          <button><NavLink to="/">How we work</NavLink></button>
        </div>
      </section>
    )
}

export default Cta; 