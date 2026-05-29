import React from 'react'
import './Stack.css'
import html from '../../assets/Html.png'
import css from '../../assets/Css.png'
import js from '../../assets/Js.png'
import react from '../../assets/React.png'
import tailwind from '../../assets/Tailwind.png'

const Stack = () => {
  return (
    <>
        <div className="stack">
            <h2>Experience</h2>
            <p>I have experience working with various technologies and frameworks for over 2 years.</p>
            <div className="stackcontainer">

                <div className="stackitem">
                    <img src={html} alt="HTML" />
                    <span>HTML</span>
                </div>
                <div className="stackitem">
                    <img src={css} alt="CSS" />
                    <span>CSS</span>
                </div>
                <div className="stackitem">
                    <img src={js} alt="JavaScript" />
                    <span>JavaScript</span>
                </div>
                <div className="stackitem">
                    <img src={react} alt="React" />
                    <span>React</span>
                </div>
                <div className="stackitem">
                    <img src={tailwind} alt="Tailwind CSS" />
                    <span>Tailwind CSS</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Stack