import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"

export default function WorkArticle( {article} ) {

    // Only render link, if the article link excists
    function getLink(article) {
        const isLink = article.link;
        if(isLink) {
            return(
                <a href={article.link}> <AiOutlineLink/> </a>
            )
        }
        else{ return(null) }
    }

    // Only render repo, if the article link excists
    function getRepo(article) {
        const isRepo = article.repo;
        if(isRepo) {
            return(
                <a href={article.repo}> <AiOutlineGithub/> </a>
            )
        }
        else{ return(null) }
    }

    // Only render build, if the article link excists
    function getBuild(article) {
        const isBuild = article.build;
        if(isBuild) {
            return(
                article.build.map((build, i) => {
                    return( <span key={i}>{build.tech}</span> )
                })
            )
        }
        else{ return(null) }
    }

    // Intersection observer
    const cards = document.querySelectorAll(".card")
    const observer = new IntersectionObserver( 
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        }, 
        { threshold: 0.5 }        
    )
    cards.forEach(card => { observer.observe(card) })

   
    return (
        <>
            <article key={article.id} className="project card">
                <div className="project-gallery-cntr">
                    <div className="project-gallery">
                        {article.imgs.map((imgs, imgId) => {
                            return( 
                                <div className="img-cntr" key={imgId}>
                                    <img src={imgs.imgSrc} alt={imgs.ImgAlt}/> 
                                </div>
                                )
                        })}
                    </div>
                </div>

                <div className="project-txt"> 
                    <div className="project-header">

                        <div className="project-title">
                            <h3>{article.title}</h3>
                            <div className="project-links">
                                {getLink(article)}
                                {getRepo(article)} 
                            </div>
                        </div>

                        <div className="project-build">
                            {getBuild(article)}
                        </div> 
                    </div>
        
                    <div className="project-desc">
                        <span dangerouslySetInnerHTML={ {__html: article.descHtml} }></span>
                    </div>
                </div>
            </article>
        </>
    )
};