import React, { Component } from 'react';
import '../CSS/general.css';

// Develop Parts
import Loading from '../loading';
import Nav from './nav';
import About from './about';
import Experience from './experience';
import Education from './education';
import Skills from './skills';
import Projects from './projects';
import Certifications from './certifications';

// Data
import Data from '../Utils/DataInformation'; 

export class Portfolio extends Component {
    state = {
        productData: Data
    }

    render() {
        return (
            <>
                <Loading />
                <Nav data={this.state.productData}/>
                <About data={this.state.productData}/>
                <Education data={this.state.productData}/>
                <Certifications data={this.state.productData}/>
                <Experience data={this.state.productData}/>
                <Skills data={this.state.productData}/>
                <Projects data={this.state.productData}/>
            </>
        )
    }
}

export default Portfolio;

{/*

    Mark Zuckerberg que decidió, como lo hacia Steve Jobs años antes, no gastar energía mental en decidir qué vestir cada mañana y usar esa energía para tomar mejores decisiones, con el tiempo y su participación en foros y presentaciones, la gente lo reconoció por su vestimenta casi tanto como por sus logros profesionales.

*/}