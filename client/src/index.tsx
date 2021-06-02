import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './global.sass'
import { Waypoint } from 'react-waypoint'
import { Helmet } from "react-helmet"
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core"

// * Components 
import Navbar from './components/Navbar/Navbar'
import { hotjar } from 'react-hotjar'

// * Sections
import Jumbotron from './sections/jumbotron/Jumbotron'
import Skills from './sections/skills/Skills'
import Tools from './sections/tools/Tools'
import Koverai from './sections/koverai/Koverai'
import Portfolio from './sections/portfolio/Portfolio'
import Articles from './sections/articles/Articles'
import { About, Reviews } from './sections/about/About'
import Contact from './sections/contact/Contact'

const HomePage = () => {
    // @ts-ignore
    const [show, toggle] = useState(false)
    hotjar.initialize(1627097, 6)
    return (
        <div>
            <Helmet>
                <title>Joshua Hall - Web Extraordinaire</title>
                <link rel="icon" href="../assets/icons/dynamis-logo.ico" sizes="16x16" />
                <meta charSet="utf-8" name="description" content="A freelance fullstack web and blockchain developer." />
            </Helmet>
            <Jumbotron />
            {/* // @ts-ignore */}
            <Navbar show={show} />
            <Waypoint onEnter={() => toggle(!show)} bottomOffset='80%' />
            <Skills />
            <Tools />
            {/* <Koverai /> */}
            <Portfolio />
            <Reviews />
            <Articles />
            <About />
            <Contact />
        </div>
    )
}

const ThemedSite = () => {
    return (
        <ThemeProvider>
            <ColorModeProvider>
                <HomePage />
            </ColorModeProvider>
        </ThemeProvider>
    )
}
ReactDOM.render(<ThemedSite />, document.getElementById('root'))

