import React from 'react'
import './Navbar.sass'
import { useSpring, animated, useTrail } from 'react-spring'

const Navbar = () => {
    const links: { name: string, }[] = [{ name: 'Skills' }, { name: 'Portfolio' }, { name: 'Articles' }, { name: 'About' }, { name: 'Contact' },]

    const swoop = useTrail(links.length, { // * Have each link swoop in from the upper right
        from: { transform: 'translate(10px, -50px)' },
        to: { transform: 'translate(0, 0)' }
    })
    return (
        <div className='navbar'>
            <img src="../assets/icons/joshua-hall.jpg" alt="Joshua Hall" className='profile-pic' />
            <img src="../assets/icons/burger.svg" alt="Navigation Burger" className="burger" />
            <ul className="links">
                {/* Add swoop animation to each item in links */}
                {swoop.map((animation, index) => <animated.a href={`#${links[index].name}`} style={animation} key={index}><li>{links[index].name}</li></animated.a>)}
            </ul>
        </div>
    )
}
export default Navbar