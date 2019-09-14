import React from 'react'
import './Navbar.sass'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="../assets/icons/joshua-hall.jpg" alt="Joshua Hall" className='profile-pic' />
            <img src="../assets/icons/burger.svg" alt="Navigation Burger" className="burger" />
            <ul className="links">
                <a href=""><li>Skills</li></a>
                <a href=""><li>Portfolio</li></a>
                <a href=""><li>Articles</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact</li></a>
            </ul>
        </div>
    )
}
export default Navbar