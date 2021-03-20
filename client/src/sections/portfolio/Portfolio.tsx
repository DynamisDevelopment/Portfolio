import React, { useState } from 'react'
import './Portfolio.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Project from '../../components/Project/Project'
import { projects } from './data'
import { useTrail, animated, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Portfolio = () => {
    const [show, toggle] = useState(false)
    const reveal = useTrail(projects.length, { to: { opacity: show ? 1 : 0 }, config: config.slow })
    return (
        <div className='center' id="Portfolio">
            <SectionTitle title={'Projects'} subtitle={'Learning projects I\'ve done in the past and some that I\'m currently working on.'} />
            <div className="responsive-grid">
                {reveal.map((animation, i) => <animated.div style={animation} key={i}>
                    <Waypoint onEnter={() => { if (!show) toggle(true) }} bottomOffset='30%' />
                    <Project
                        image={projects[i].image}
                        name={projects[i].name}
                        desc={projects[i].desc}
                        link={projects[i].link}
                        git={projects[i].git}
                        tech={projects[i].tech}
                        designBy={projects[i].designBy}
                        complete={projects[i].complete}
                        id={projects[i].id} />
                </animated.div>)}
            </div>
        </div>
    )
}

export default Portfolio