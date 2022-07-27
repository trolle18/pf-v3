import { useState, useEffect } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"


export default function WorkArticles() {
    const [projects, setProjects] = useState([]);

    // Fetch projects from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/projects.json");
            const data = await response.json();
            setProjects(data);
        }
        getData();
        
    }, []);

    // Fetch project imgs from JSON - If there is more than one, display only the first one
    function getImg(project) {
        if (project.imgs?.length >= 1) {
            return project.imgs[0]?.img;
        } 
    };

    // const cards = document.querySelectorAll(".card")
    // const observer = new IntersectionObserver( 
    //     entries => {
    //         entries.forEach(entry => {
    //             entry.target.classList.toggle("show", entry.isIntersecting)
    //             if (entry.isIntersecting) observer.unobserve(entry.target)
    //         })
    //     }, 
    //     {
    //         // rootMargin: "100px",
    //         threshold: .5,
    //     }        
    // )
    // cards.forEach(card => {
    //     observer.observe(card)
    // })

   
    return (
        <>
            {projects.map((project, index) => {
                return (
                    <article key={index} className="project">
                        <div className="project-img-cntr">
                            <img src={getImg(project)} alt={project.title}/>  
                        </div>

                        <div className="project-txt"> 
                            <div className="project-header">
                                <div className="project-title item">
                                    <h3>{project.title}</h3>

                                    <div className="project-links">
                                        <a href={project.link}> <AiOutlineLink/> </a>
                                        <a href={project.repo}> <AiOutlineGithub/> </a>
                                    </div>
                                </div>

                                <div className="project-build item">
                                    {project.build.map((build, i) => {
                                        return(
                                            <span key={i}>{build.tech}</span>
                                        )
                                    })}
                                </div> 
                            </div>
                
                            <div className="project-desc item">
                                <span>{project.short}</span>
                            </div>
                            
                        </div>
                    </article>
                )
            })}
        </>
    )
};