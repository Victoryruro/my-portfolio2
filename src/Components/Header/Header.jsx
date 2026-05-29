import React from 'react'
import './Header.css'
import ThemeToggle from '../context/ThemeToggle'


const Header = () => {
  return (
    <>
        <nav>
            <ul className="page">
                <li><a href='#'>Home</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Socials</a></li>
                

            </ul>
        </nav>
        <ThemeToggle/>
    </>
  )
}

export default Header