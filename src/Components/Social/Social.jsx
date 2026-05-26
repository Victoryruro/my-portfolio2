import React from 'react'
import './Social.css'

const Social = () => {
  return (
    <>
        <div className="container" id='contact'>

            <h2>My Socials</h2>
            <div className="Socialcontainer">
                
                <div className="social-links">
                    <div className="user">
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            <span className="username">VictoryRuro</span>
                        </a>
                        
                    </div>
                    <div className="user">
                        <a href="https://github.com/VicRuro" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                            <span className="username">VicRuro</span>
                        </a>
                        
                    </div>  
                    <div className="user">
                        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                            <span className="username">VictoryRuro</span>
                        </a>
                        
                    </div>

                </div>
            </div>
            <div className="HireContainer">
                <div className="mail">
                    <a href="mailto:victorydiemuodeke@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>
                        <span className="mailname">victorydiemuodeke@gmail.com</span>
                    </a>
                    
                </div>
                <div className="cv">
                    <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-pdf fa-5x"></i>
                    </a>
                    <span className="username" download>Download CV</span>
                </div>
            </div>
        </div>
    </>
  )
}


export default Social