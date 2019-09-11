import React from 'react'
import ReactDOM from 'react-dom'
import './global.sass'

// * Components 
import Navbar from './components/Navbar/Navbar'

// * Sections
import Jumbotron from './sections/jumbotron/Jumbotron'
import Skills from './sections/skills/Skills'
import Tools from './sections/tools/Tools'
import Portfolio from './sections/portfolio/Portfolio'
import Articles from './sections/articles/Articles'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'

const HomePage = () => {
    return (
        <div>
            <Jumbotron />
            <Navbar />
            <Skills />
            <Tools />
            <Portfolio />
            <Articles />
            <About />
            <Contact />
        </div>
    )
}

ReactDOM.render(<HomePage />, document.getElementById('root'))

