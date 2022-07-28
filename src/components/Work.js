// import WorkArticles from "./WorkArticles";
import { useState, useEffect } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"
import { Link } from "react-router-dom";
import WorkArticle from "./WorkArticle";


export default function Work() {
    const [articles, setArticles] = useState([]);


    // Fetch projects from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/projects.json");
            const data = await response.json();
            setArticles(data);
        }
        getData();
        
    }, []);

    // Fetch project imgs from JSON - If there is more than one, display only the first one
    // function getImg(article) {
    //     if (article.imgs?.length >= 1) {
    //         return article.imgs[0]?.img;
    //     } 
    // };


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
            <section className="work-cntr section" id="work">
                <div className="work-cntr-title">
                    <h2>Work</h2>
                    <span className="sub-title">Here is a few of the projects I have been working on</span>
                    <Link to="/projects">Se all ...</Link>
                </div>

                {articles.map( (article ) => (
                    <>
                        <WorkArticle article={article} key={article.id}/>
                    </>
                ))}
                

                {/* {projects.map((project, index) => {
                    return (
                        <article key={index} className="project card">
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
                })} */}

            </section>
        
        </>
    )
};