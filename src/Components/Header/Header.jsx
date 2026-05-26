import React from 'react'
import './Header.css'

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
    </>
  )
}

export default Header