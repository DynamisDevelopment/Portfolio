import React, { useState } from 'react'
import './Portfolio.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Project from '../../components/Project/Project'
import { frontend, backend, defi } from './data'
import { useTrail, animated, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Portfolio = () => {
    const [showFE, toggleFE] = useState(false)
    const revealFE = useTrail(frontend.length, { to: { opacity: showFE ? 1 : 0 }, config: config.slow })

    const [showBE, toggleBE] = useState(false)
    const revealBE = useTrail(backend.length, { to: { opacity: showBE ? 1 : 0 }, config: config.slow })

    const [showDE, toggleDE] = useState(false)
    const revealDE = useTrail(defi.length, { to: { opacity: showDE ? 1 : 0 }, config: config.slow })
    return (
        <div className='center' id="Portfolio">
            <SectionTitle title={'FrontEnd'} subtitle={'Learning frontend I\'ve done in the past and some that I\'m currently working on.'} />
            <div className="responsive-grid">
                {revealFE.map((animation, i) => <animated.div style={animation} key={i}>
                    <Waypoint onEnter={() => { if (!showFE) toggleFE(true) }} bottomOffset='30%' />
                    <Project
                        image={frontend[i].image}
                        name={frontend[i].name}
                        desc={frontend[i].desc}
                        link={frontend[i].link}
                        git={frontend[i].git}
                        tech={frontend[i].tech}
                        designBy={frontend[i].designBy}
                        complete={frontend[i].complete}
                        id={i} />
                </animated.div>)}
            </div>

            {/* <SectionTitle title={'BackEnd'} subtitle={'Learning frontend I\'ve done in the past and some that I\'m currently working on.'} noLine />
            <div className="responsive-grid">
                {revealBE.map((animation, i) => <animated.div style={animation} key={i}>
                    <Waypoint onEnter={() => { if (!showBE) toggleBE(true) }} bottomOffset='30%' />
                    <Project
                        image={backend[i].image}
                        name={backend[i].name}
                        desc={backend[i].desc}
                        link={backend[i].link}
                        git={backend[i].git}
                        tech={backend[i].tech}
                        designBy={backend[i].designBy}
                        complete={backend[i].complete}
                        id={i} />
                </animated.div>)}
            </div> */}

            {/* <SectionTitle title={'Crypto and Backend'} subtitle={'Learning frontend I\'ve done in the past and some that I\'m currently working on.'} noLine />
            <div className="responsive-grid">
                {revealDE.map((animation, i) => <animated.div style={animation} key={i}>
                    <Waypoint onEnter={() => { if (!showDE) toggleDE(true) }} bottomOffset='30%' />
                    <Project
                        image={defi[i].image}
                        name={defi[i].name}
                        desc={defi[i].desc}
                        link={defi[i].link}
                        git={defi[i].git}
                        tech={defi[i].tech}
                        designBy={defi[i].designBy}
                        complete={defi[i].complete}
                        id={i} />
                </animated.div>)}
            </div> */}
        </div>
    )
}

export default Portfolio