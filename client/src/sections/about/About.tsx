import React from 'react'
import './About.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const About = () => {
    return (
        <div id="About">
            <div className="about">
                <SectionTitle title={'About'} subtitle={''} />
                <p>I'm currently in the middle of getting my paramedic degree over at Jackson College.</p>
                <p> I'm also in the process of building my own agency, Dynamis Development, to start having more oportunities to work with other great developers and designers on more interesting projects.</p>
                <button className="btn"><a href="https://www.dynamisdevelopment.com/" target="_blank" rel="noreferrer">See Agency</a></button>
            </div>
        </div>
    )
}

const Reviews = () => {
    return (
        <div id="About">
            <div className="reviews">
                <SectionTitle title={'Reviews'} subtitle={''} />
                <p>"Josh was just perfect to work with. I'm so glad I went with his suggestion to use Gatsby over Wordpress Like I originally intended. Will definitely like to work with him again in the future."</p>
            </div>
        </div>
    )
}

export {
    About,
    Reviews
}