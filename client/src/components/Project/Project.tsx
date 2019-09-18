import React from 'react'
import './Project.sass'
import { Props } from '../../sections/portfolio/data'
import { useSpring, animated } from 'react-spring'


const Project = (props: Props) => {
    // * Swivel Animation
    const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x: number, y: number, s: number) => `perspective(3000px) rotateX(${x}deg) rotateY(${y}deg)`
    const [move, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <animated.div className='project'
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            // @ts-ignore
            style={{ transform: move.xys.interpolate(trans) }}>
            <a href={props.link} target="_blanck"><img src={props.image} alt={props.name} /></a>
            {!props.complete && <p className='not-complete'>-- Work in Progress --</p>}
        </animated.div >
    )
}


export default Project