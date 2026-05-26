import React from 'react'
import Logo from '../../assets/Logo .png'
import './Header.css'

const Head = () => {
  return (
    <>
        <div className="logocontainer">
            <div className="logo">
                <img className='logoName' src={Logo} alt="Logo"  />
            </div>
            <div className="hireme">
                <a href="#contact" className="btn">Hire Me</a>
            </div>
        </div>
    </>
  )
}

export default Head