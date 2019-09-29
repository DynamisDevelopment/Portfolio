import React, { useState, useEffect } from 'react'
import './Navbar.sass'
import { animated, useTrail, useSpring, config } from 'react-spring'
import withSizes from 'react-sizes'

// @ts-ignore
const Navbar = ({ show, isMobile }: any) => {
    const links: { name: string, }[] = [{ name: 'Services' }, { name: 'Portfolio' }, { name: 'Articles' }, { name: 'About' }, { name: 'Contact' },]

    // * Set Mobile Navigation behavior
    const [mobile, toggle] = useState(false)

    // * Have each link swoop in from the upper right
    const swoop = useTrail(links.length, {
        from: { transform: 'translate(10px, -50px)' },
        to: { transform: 'translate(0, 0)' }
    })

    // * Set navbar state based on screen position
    const full = useSpring({
        to: {
            backgroundColor: show || mobile ? '#fff' : 'rgba(0,0,0,0)',
            color: show || mobile ? 'black' : '#fff',
        },
        config: config.slow
    })

    // * Use mobile behavior on mobile, else use an empty spring and show links. Inelegant but effective ¯\_(ツ)_/¯
    const hide = useSpring({ to: { display: mobile ? 'flex' : 'none' } })
    const noHide = useSpring({ to: { color: show ? 'rgba(0,0,0,1)' : '#fff' } })

    // * Turn off remove mobile nav if resized to desktop
    useEffect(() => { if (!isMobile) toggle(false) })
    return (
        <animated.div className='navbar' style={full}>
            <a href="https://www.dynamisdevelopment.com/" target="_blank"><img src="../assets/icons/dynamis-logo-white.svg" alt="Dynamis Development Logo" className='profile-pic' /></a>
            <img src="../assets/icons/burger.svg" alt="Navigation Burger" className="burger" onClick={() => toggle(!mobile)} />
            <animated.ul className="links" style={isMobile ? hide : noHide}>
                {/* //* Add swoop animation to each item in links */}
                {swoop.map((animation, index) => <animated.a
                    href={`#${links[index].name}`}
                    style={animation}
                    key={index}
                    onClick={() => toggle(!mobile)}>
                    <li>{links[index].name}</li></animated.a>)}
            </animated.ul>
        </animated.div >
    )
}

const mapSizesToProps = ({ width }) => ({ isMobile: width < 650 })

export default withSizes(mapSizesToProps)(Navbar)