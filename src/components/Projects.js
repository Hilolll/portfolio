import React from 'react';


const projects = [
    { id: 1, title: "Project 1", description: "Description of Project 1", image: "/img/card1.jpg", link: "#" },
    { id: 1, title: "Project 2", description: "Description of Project 2", image: "/img/card2.jpg", link: "#" },
    { id: 1, title: "Project 3", description: "Description of Project 3", image: "/img/card3.jpg", link: "#" },
    { id: 1, title: "Project 4", description: "Description of Project 4", image: "/img/card4.jpg", link: "#" },
    { id: 1, title: "Project 5", description: "Description of Project 5", image: "/img/card5.jpg", link: "#" },
    { id: 1, title: "Project 6", description: "Description of Project 6", image: "/img/card6.jpg", link: "#" }
    
];

const Projects = () => {
    return (
        <div className='projects__title'>
            <h2 id='projects'>Pet-Projects</h2>
            <section className='projects'>
                <div className='projects__items'>
                    {projects.map(project => (
                        <div className='projects__item' key={project.id}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>View Project</a>
                            <img className='projects__item_img' src={project.image} alt={project.title} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;