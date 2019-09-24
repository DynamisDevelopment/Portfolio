import React from 'react'
import './About.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const About = () => {
    return (
        <div id="About">
            <div className="about">
                <SectionTitle title={'About'} subtitle={''} />
                <p>I am a history buff and currently a paramedic student.</p>
            </div>
        </div>
    )
}

export default About