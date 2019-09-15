import React from 'react'
import './Article.sass'
import { Props } from '../../sections/articles/data'
import { useSpring, animated } from 'react-spring'

const Article = (props: Props) => {
    // * Swivel Animation
    const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x: number, y: number, s: number) => `perspective(2000px) rotateX(${x / 1.5}deg) rotateY(${y / 1.5}deg)`
    const [move, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension: 350, friction: 40 } }))
    return (
        <animated.div className='post'
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            // @ts-ignore
            style={{ transform: move.xys.interpolate(trans) }}>
            <a href={props.link}><img src={props.thumb} alt={`${props.title} thumbnail`} /></a>
            <p className="desc">{props.desc}</p>
        </animated.div>
    )
}

export default Article