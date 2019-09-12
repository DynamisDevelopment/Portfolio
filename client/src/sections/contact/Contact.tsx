import React from 'react'
import './Contact.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const Contact = () => {
    const getYear = (): number => new Date().getFullYear()
    return (
        <div className='contact'>
            <SectionTitle title={"Contact"} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <form className='contact-form'>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea name="message" placeholder="Message" />
                <button type="submit">Submit</button>
            </form>
            <div className="social">
                <a href="#" className="circle"><img src="../assets/icons/github-logo.svg" alt="Github Logo" /></a>
                <a href="#" className="circle"><img src="../assets/icons/github-logo.svg" alt="Github Logo" /></a>
                <a href="#" className="circle"><img src="../assets/icons/github-logo.svg" alt="Github Logo" /></a>
                <a href="#" className="circle"><img src="../assets/icons/github-logo.svg" alt="Github Logo" /></a>
                <a href="#" className="circle"><img src="../assets/icons/github-logo.svg" alt="Github Logo" /></a>
            </div>
            <div className="copyright">Made by yours truly © {getYear()}</div>
        </div>
    )
}

export default Contact