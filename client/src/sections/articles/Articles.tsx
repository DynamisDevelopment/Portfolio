import React, { useState } from 'react'
import './Articles.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Article from '../../components/Article/Article'
import { articles } from './data'
import { useTrail, animated, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Articles = () => {
  const [show, toggle] = useState(false)
  const reveal = useTrail(articles.length, {
    to: { opacity: show ? 1 : 0 },
    config: config.slow,
  })

  return (
    <div className="bg center" id="Articles">
      <SectionTitle
        title={'Articles'}
        subtitle={
          'I was a long-term technical writer for Alligator.io and DropInBlog.'
        }
      />

      <div className="responsive-grid">
        {reveal.map((animation, i) => (
          <animated.div style={animation} key={i}>
            <Waypoint
              onEnter={() => {
                if (!show) toggle(true)
              }}
              bottomOffset="30%"
            />
            <Article
              thumb={articles[i].thumb}
              title={articles[i].title}
              desc={articles[i].desc}
              quote={articles[i].quote}
              link={articles[i].link}
            />
          </animated.div>
        ))}
      </div>
      <a href="https://alligator.io/author/joshua-hall" target="_blanck">
        <button className="btn">See All</button>
      </a>
    </div>
  )
}

export default Articles
