import React, { useState } from 'react'
import './Navbar.sass'
import { animated, useTrail, useSpring, config } from 'react-spring'

// @ts-ignore
const Navbar = ({ show }: any) => {
    const links: { name: string, }[] = [{ name: 'Skills' }, { name: 'Portfolio' }, { name: 'Articles' }, { name: 'About' }, { name: 'Contact' },]

    // * Have each link swoop in from the upper right
    const swoop = useTrail(links.length, {
        from: { transform: 'translate(10px, -50px)' },
        to: { transform: 'translate(0, 0)' }
    })

    // * Set navbar state based on screen position
    const full = useSpring({
        to: { backgroundColor: show ? '#fff' : 'rgba(0,0,0,0)', color: show ? 'black' : '#fff' },
        config: config.slow
    })
    return (
        <animated.div className='navbar' style={full}>
            <img src="../assets/icons/dynamis-logo-white.svg" alt="Joshua Hall" className='profile-pic' />
            <img src="../assets/icons/burger.svg" alt="Navigation Burger" className="burger" />
            <ul className="links">
                {/* //* Add swoop animation to each item in links */}
                {swoop.map((animation, index) => <animated.a href={`#${links[index].name}`} style={animation} key={index}><li>{links[index].name}</li></animated.a>)}
            </ul>
        </animated.div>
    )
}
export default Navbar