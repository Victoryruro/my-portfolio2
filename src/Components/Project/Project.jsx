import React from 'react'
import './Project.css'
import { projectData } from '../../projectData'
import SliderPackage from "react-slick";
const Slider = SliderPackage.default || SliderPackage;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Project = () => {
    const settings = {

        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow:2,
        speed: 300,
        rows:2,
        slidesPerRow:1,
        dots: true,
        
        responsive: [
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
            }
        },

        ]
  };  
  return (
    <>
        <section className="project" id='projects'>
            <div className="heading">
                <h2>My Works </h2>
                <p>Here are some of the projects I've worked on, spanning a period of 4 years showcasing my skills and experience.</p>
            </div>
            
            <Slider {...settings}>
                {projectData.map((project) => (
                    
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-built">
                                <strong>Built with:</strong> {project.built}
                            </div>
                            <div className="project-links">
                            
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <i className="fa-solid fa-link"></i>
                                </a>
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <i className="fas fa-code-branch"></i>
                                </a>
                                <span className="project-date">
                                    <strong>Date Created:</strong> {project.date}
                                </span>
                            </div>
                            <p className="project-description">{project.description}</p>



                        </div>
                    ))
                }
            </Slider>
        </section>
    </>
  )
}

export default Project