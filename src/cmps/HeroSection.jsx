import React from 'react';
import { NavLink } from 'react-router-dom';

function HeroSection() {
    return (
        <section className="humanizing">
            <div className="top"></div>
            <div className="grid container">
            <div className="text-section flex column">
                    <div className="section-border"> <span></span></div>
                    <h1 className="flex column">  Exquisite dining since 1989</h1>
                    <p> Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
                        the comfort of our farmhouse.</p>

          




                    <button className="top-button"><NavLink to="/">Book a table</NavLink></button>
                </div>
                <div className="image-container"></div>

            </div>
        </section>

    )
}

export default HeroSection; 