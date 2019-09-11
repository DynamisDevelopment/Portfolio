import React from 'react'
import './Navbar.sass'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="../assets/icons/joshua-hall.jpg" alt="Joshua Hall" className='profile-pic' />
            <img src="../assets/icons/burger.svg" alt="Navigation Burger" className="burger" />
        </div>
    )
}
export default Navbar