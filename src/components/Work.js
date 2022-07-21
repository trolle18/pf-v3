import { useState, useEffect } from "react";
// import { BiLink } from "react-icons/bi";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"


export default function Work() {
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


    // function getBuild(project, id) {
    //     if (project.imgs?.length >= 0) {
    //         return (
    //             project.build?.tech((tech) => (
    //                 <span>{tech}</span>
    //             ))
                
    //         );
    //     }; 
        // if (project.imgs?.length === 2) {
        //     return (
        //         <>
        //             <span>{project.build[0]?.tech}</span>
        //             <span>{project.build[1]?.tech}</span>
        //         </>
        //     );
        // };
        // if (project.imgs?.length === 3) {
        //     return (
        //         <>
        //             <span>{project.build[0]?.tech}</span>
        //             <span>{project.build[1]?.tech}</span>
        //             <span>{project.build[3]?.tech}</span>
        //         </>
        //     );
        // };
    //     console.log(getBuild(project))
    // };



    // function getBuild(project) {
    //     if (project.build?.length >0) {
    //         return project.build?.map((tech) => (
    //             project.build?.tech
    //         ))
    //     }
    // }

    return (
        <>
            <section className="work-cntr">
                <h2>Work</h2>
                {projects.map((project, id) => (
                    <article className="project" key={id}>
                        <div className="project-img-cntr"><img src={getImg(project)} alt={project.title}/>  </div>
                        <div className="project-txt"> 
                            <h3>{project.title}</h3>

                            <div>
                                {/* {getBuild(project)} */}
                                {/* {project.build} */}

                            </div> 
                            <div>
                                <a href={project.link}> <AiOutlineLink/> </a>
                                <a href={project.repo}> <AiOutlineGithub/> </a>
                            </div>

                            <span>{project.short}</span>
                        </div>

                    </article>
                ))}
            </section>
        
        </>
    )
};