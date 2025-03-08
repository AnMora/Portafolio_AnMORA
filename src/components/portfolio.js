import React, { Component } from 'react';
import '../CSS/general.css';


// Develop Parts
import Loading from '../loading';
import Nav from './nav';
import Options from './options';
import About from './about';
import Experience from './experience';
import Education from './education';
import Skills from './skills';
import Study from './study';
import Projects from './projects';
import Certifications from './certifications';
import Workshops from './workshops';

// Data
import Data from '../Utils/DataInformation';

class Portfolio extends Component {
    state = {
        productData: Data
    }

    render() {
        return (
            <>
                <Loading />
                <video className='videoTag' loop autoPlay muted>
                    <source src="./multimedia/xllx.mp4" type='video/mp4' />
                </video>
                <div className="bg-dark-one">
                    <Nav data={this.state.productData}/>
                    <About data={this.state.productData}/>
                    <Study data={this.state.productData}/>
                    <Education data={this.state.productData}/>
                    <Certifications data={this.state.productData}/>
                    <Workshops data={this.state.productData}/>
                    <Experience data={this.state.productData}/>
                    <Skills data={this.state.productData}/>
                    <Projects data={this.state.productData}/>
                    <Options data={this.state.productData}/>
                </div>
            </>
        )
    }
}

export default Portfolio;