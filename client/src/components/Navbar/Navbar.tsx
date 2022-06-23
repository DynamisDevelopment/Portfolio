import React, { useState, useEffect } from 'react'
import './Navbar.sass'
import { animated, useTrail, useSpring, config } from 'react-spring'
import withSizes from 'react-sizes'
import { Button } from '@chakra-ui/core'

// @ts-ignore
const Navbar = ({ show, isMobile }: any) => {
  const links: { name: string }[] = [
    { name: 'Services' },
    { name: 'Portfolio' },
    { name: 'Articles' },
    { name: 'About' },
    { name: 'Contact' },
  ]

  // * Set Mobile Navigation behavior
  const [mobile, toggle] = useState(false)

  // * Have each link swoop in from the upper right
  const swoop = useTrail(links.length, {
    from: { transform: 'translate(10px, -50px)' },
    to: { transform: 'translate(0, 0)' },
  })

  // * Set navbar state based on screen position
  const full = useSpring({
    to: {
      backgroundColor: show || mobile ? '#fff' : 'rgba(0,0,0,0)',
      color: show || mobile ? 'black' : '#fff',
    },
    config: config.slow,
  })

  // * Use mobile behavior on mobile, else use an empty spring and show links. Inelegant but effective ¯\_(ツ)_/¯
  const hide = useSpring({ to: { display: mobile ? 'flex' : 'none' } })
  const noHide = useSpring({ to: { color: show ? 'rgba(0,0,0,1)' : '#fff' } })

  // * Turn off remove mobile nav if resized to desktop
  useEffect(() => {
    if (!isMobile) toggle(false)
  })

  const btnHover = {
    bg: show || mobile ? '#6628D5' : '#fff',
    color: show || mobile ? '#fff' : '#6628D5',
  }
  return (
    <animated.div className="navbar" style={full}>
      <div className="row">
        <a
          href="https://www.dynamisdevelopment.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="../assets/icons/dynamis-logo-white.svg"
            alt="Dynamis Development Logo"
            className="profile-pic"
          />
        </a>
        <img
          src="../assets/icons/burger.svg"
          alt="Navigation Burger"
          className="burger"
          onClick={() => toggle(!mobile)}
        />
      </div>

      <animated.ul className="links" style={isMobile ? hide : noHide}>
        {/* //* Add swoop animation to each item in links */}
        {swoop.map((animation, index) => (
          <animated.li
            style={animation}
            key={index}
            onClick={() => toggle(!mobile)}
          >
            <a href={`#${links[index].name}`}> {links[index].name} </a>
          </animated.li>
        ))}
        <animated.li onClick={() => toggle(!mobile)}>
          {' '}
          <a href={'../assets/resume.pdf'} download>
            <Button
              onClick={() => {}}
              bg={show || mobile ? '#6628D5' : '#fff'}
              color={show || mobile ? '#fff' : '#6628D5'}
              _hover={btnHover}
              _active={btnHover}
              _focus={btnHover}
              w={['90vw', '90vw', 'auto']}
            >
              {' '}
              Resume
            </Button>
          </a>
        </animated.li>
      </animated.ul>
    </animated.div>
  )
}

const mapSizesToProps = ({ width }) => ({ isMobile: width < 950 })

export default withSizes(mapSizesToProps)(Navbar)
