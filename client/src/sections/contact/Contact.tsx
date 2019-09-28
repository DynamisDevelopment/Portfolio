import React from 'react'
import './Contact.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import 'axios'
import axios from 'axios'
// import Rain from './Rain'

const Contact = () => {
    // * Set copyright date dynamically
    const getYear = (): number => new Date().getFullYear()

    const Send = e => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const message = e.target[2].value
        axios({
            method: 'post',
            url: '/send',
            data: {
                name,
                email,
                message
            }
        })
            .then(res => console.log(res))
            .catch(e => console.log(e))
    }

    return (
        <div className='contact' id="Contact">
            <SectionTitle title={"Contact"} subtitle={'Got something interesting?'} />
            {/* <Rain /> */}
            <form className='contact-form' onSubmit={Send} action="send">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea name="message" placeholder="Message" />
                <button type="submit" className='btn'>Submit</button>
            </form>
            <div className="social">
                <a href="https://www.linkedin.com/in/joshua-hall-51b182185/" className="circle" target="_blanck"><img src="../assets/icons/linkedin-logo.svg" alt="Linkedin Logo" /></a>
                <a href="https://www.upwork.com/o/profiles/users/_~013e4465c7ba054054/" className="circle" target="_blanck"><img src="../assets/icons/upwork-logo.svg" alt="Upwork Logo" /></a>
                <a href="https://codepen.io/dynamisdevelopment" className="circle" target="_blanck"><img src="../assets/icons/codepen-logo.svg" alt="Codepen Logo" /></a>
                <a href="https://github.com/DynamisDevelopment" className="circle" target="_blanck"><img src="../assets/icons/github-logo.svg" alt="Github Logo" /></a>
            </div>
            <div className="copyright">Made by yours truly © {getYear()}</div>
        </div>
    )
}

export default Contact