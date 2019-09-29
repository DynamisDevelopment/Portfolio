import React from 'react'
import './About.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const About = () => {
    return (
        <div id="About">
            <div className="about">
                <SectionTitle title={'About'} subtitle={''} />
                <p>I'm currently in the process of building my own agency, Dynamis Development, to start having more oportunities
                to work with other great developers and designers on more intersting projects.</p>
                <button className="btn"><a href="https://www.dynamisdevelopment.com/" target="_blank">See Agency</a></button>
            </div>
        </div>
    )
}

export default About