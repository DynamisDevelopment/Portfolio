import React, { useState } from 'react'
import './Project.sass'
import { Props } from '../../sections/portfolio/data'
import { useSpring, animated } from 'react-spring'


const Project = (props: Props) => {
    // * Swivel Animation
    const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x: number, y: number, s: number) => `perspective(3000px) rotateX(${x / 2}deg) rotateY(${y / 2}deg)`
    const [move, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    // * Show More Animation 
    const [more, toggle] = useState(false)
    const fade = useSpring({
        to: {
            opacity: more ? 1 : 0,
            backgroundColor: more ? '#293347' : 'rgba(0,0,0,0)'
        }
    })
    const fadeReverse = useSpring({ to: { opacity: more ? 0 : 1 } })

    return (
        <animated.div className='project'
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            // @ts-ignore
            style={{ transform: move.xys.interpolate(trans) }}>
            <div onMouseEnter={() => toggle(true)} onMouseLeave={() => toggle(false)} onClick={() => toggle(!more)}>

                {/* // * Either show the thumbnail or the details with a fade animation between them. */}
                {!more ? <animated.img className="thumnail" src={props.image} alt={props.name} style={fadeReverse} /> :
                    <animated.div className="details" style={fade}>
                        <h2>{props.desc}</h2>
                        <div className="more-links">
                            {/* // @ts-ignore */}
                            {props.complete && <a href={props.link}><button className='visit-btn'>Visit Website</button></a>}
                            <a href={props.git} className='github-link'><img className='git-link' src="./assets/icons/github-logo.svg" alt="Github logo" /></a>
                        </div>
                        <div className="extras">
                            {props.designBy ? <p className="design-by">Design By: {props.designBy}</p> : <p></p>}
                            <p>{props.tech.join('/')}</p>
                        </div>
                    </animated.div>}
            </div>
            {!props.complete && <p className='not-complete'>-- Work in Progress --</p>}
        </animated.div >

    )
}


export default Project