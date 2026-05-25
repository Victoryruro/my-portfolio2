import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <nav>
            <ul className="page">
                <li><link to='/' />Home</li>
                <li><link to='#projects' />Projects</li>
                <li><link to='#about' />Socials</li>
               

            </ul>
        </nav>
    </>
  )
}

export default Header