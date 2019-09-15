import React from 'react'
import './Contact.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
// import Rain from './Rain'

const Contact = () => {
    const getYear = (): number => new Date().getFullYear()
    return (
        <div className='contact'>
            <SectionTitle title={"Contact"} subtitle={'Got something interesting?'} />
            {/* <Rain /> */}
            <form className='contact-form'>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea name="message" placeholder="Message" />
                <button type="submit" className='btn' >Submit</button>
            </form>
            <div className="social">
                <a href="#" className="circle" target="_blanck"><img src="../assets/icons/linkedin-logo.svg" alt="Github Logo" /></a>
                <a href="#" className="circle" target="_blanck"><img src="../assets/icons/upwork-logo.svg" alt="Github Logo" /></a>
                <a href="#" className="circle" target="_blanck"><img src="../assets/icons/codepen-logo.svg" alt="Github Logo" /></a>
                <a href="#" className="circle" target="_blanck"><img src="../assets/icons/github-logo.svg" alt="Github Logo" /></a>
            </div>
            <div className="copyright">Made by yours truly © {getYear()}</div>
        </div>
    )
}

export default Contact