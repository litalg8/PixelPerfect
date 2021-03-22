import React from 'react';
import CompanyInfo from '../cmps/CompanyInfo';
import Cta from '../cmps/Cta'
import HeroSection from '../cmps/HeroSection'
import {Highlights} from '../cmps/Highlights';

function MainApp(){
    return(
        <React.Fragment>
            <HeroSection/>
            <CompanyInfo/>
            <Highlights/>
            <Cta/>
        </React.Fragment>
    )
}
export default MainApp; 