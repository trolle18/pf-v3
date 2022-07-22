import { useState, useEffect } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"


export default function WorkArticle() {
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
                                <h3>{project.title}</h3>

                                <div className="project-links">
                                    <a href={project.link}> <AiOutlineLink/> </a>
                                    <a href={project.repo}> <AiOutlineGithub/> </a>
                                </div>
                            </div>

                                    <div className="project-build">
                                        {project.build.map((build, i) => {
                                            return(
                                                <span>{build.tech}</span>
                                            )
                                        })}
                                    </div> 
                                    

                                    <span>{project.short}</span>
                                </div>
                    </article>
                )
            })}
        </>
    )
};