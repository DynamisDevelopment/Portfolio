import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './global.sass'
import { Waypoint } from 'react-waypoint'
import { Helmet } from "react-helmet"

// * Components 
import Navbar from './components/Navbar/Navbar'

// * Sections
import Jumbotron from './sections/jumbotron/Jumbotron'
import Skills from './sections/skills/Skills'
import Tools from './sections/tools/Tools'
import Portfolio from './sections/portfolio/Portfolio'
import Articles from './sections/articles/Articles'
import { About, Reviews } from './sections/about/About'
import Contact from './sections/contact/Contact'

const HomePage = () => {
    // @ts-ignore
    const [show, toggle] = useState(false)
    return (
        <div>
            <Helmet>
                <title>Joshua Hall - Web Extraordinaire</title>
                <link rel="icon" href="../assets/icons/dynamis-logo.ico" sizes="16x16" />
                <meta charSet="utf-8" name="description" content="A freelance fullstack web and mobile app developer." />
            </Helmet>
            <Jumbotron />
            {/* // @ts-ignore */}
            <Navbar show={show} />
            <Waypoint onEnter={() => toggle(!show)} bottomOffset='80%' />
            <Skills />
            <Tools />
            <Portfolio />
            <Reviews />
            <Articles />
            <About />
            <Contact />
        </div>
    )
}

ReactDOM.render(<HomePage />, document.getElementById('root'))

