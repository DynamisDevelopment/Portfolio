import React, { useState } from 'react'
import './Portfolio.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Project from '../../components/Project/Project'
import { frontend, defi } from './data'
import { useTrail, animated, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Portfolio = () => {
  const [showFE, toggleFE] = useState(false)
  const revealFE = useTrail(frontend.length, {
    to: { opacity: showFE ? 1 : 0 },
    config: config.slow,
  })

  return (
    <div className="center" id="Portfolio">
      <SectionTitle
        title={'FrontEnd'}
        subtitle={'Past frontend projects both professional and for fun.'}
      />
      <div className="responsive-grid">
        {revealFE.map((animation, i) => (
          <animated.div style={animation} key={i}>
            <Waypoint
              onEnter={() => {
                if (!showFE) toggleFE(true)
              }}
              bottomOffset="30%"
            />
            <Project
              image={frontend[i].image}
              name={frontend[i].name}
              desc={frontend[i].desc}
              link={frontend[i].link}
              git={frontend[i].git}
              tech={frontend[i].tech}
              designBy={frontend[i].designBy}
              complete={frontend[i].complete}
              id={i}
            />
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
