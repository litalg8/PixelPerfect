import React from 'react';
import { NavLink } from 'react-router-dom';

function HeroSection() {
    return (
        <section className="humanizing">
            <div className="top"></div>
            <div className="grid container">
            <div className="text-section flex column">
                    <div className="section-border"> <span></span></div>
                    <h1 className="flex column">Humanizing <span>your insurance.</span></h1>
                    <p> Get your life insurance coverage easier and faster. We blend our expertise
                    and technology to help you find the plan that’s right for you. Ensure you
            and your loved ones are protected.</p>
                    <button className="top-button"><NavLink to="/">View plans</NavLink></button>
                </div>
                <div className="image-container"></div>

            </div>
        </section>

    )
}

export default HeroSection; 