import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"

export default function WorkArticle( {article} ) {
    // Only render link, if the article link excists
    function getLink(article) {
        const isLink = article.link;
        if(isLink) {
            return(
                <a href={article.link} className="elem"> <AiOutlineLink/> </a>
            )
        }
        else{ return(null) }
    }

    // Only render repo, if the article link excists
    function getRepo(article) {
        const isRepo = article.repo;
        if(isRepo) {
            return(
                <a href={article.repo} className="elem"> <AiOutlineGithub/> </a>
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
                    return( <span key={i} className="elem">{build.tech}</span> )
                })
            )
        }
        else{ return(null) }
    }

        // Intersection observer
        let secObserverOptions = {
            threshold: 0.2
        };
        var secObserver = new IntersectionObserver(secObserverCallback, secObserverOptions);
        function secObserverCallback(entries, observer) {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target)
                }
            });
        };
        document.querySelectorAll(".card").forEach((i) => {
            if (i) {
                secObserver.observe(i);
            }
        });
   
    return (
        <>
            <article key={article.id} className="project card">
                <div className="project-gallery-cntr">
                    <div className="project-gallery">
                        {article.imgs.map((imgs, imgId) => {
                            return( 
                                <div className="img-cntr" key={imgId}>
                                    <img src={imgs.imgSrc} alt={imgs.ImgAlt} className="elem"/> 
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="project-txt"> 
                    <div className="project-header">
                        <div className="project-title">
                            <h3 className="elem">{article.title}</h3>
                            <div className="project-links">
                                {getLink(article)}
                                {getRepo(article)} 
                            </div>
                        </div>

                        <div className="project-build">
                            {getBuild(article)}
                        </div> 
                    </div>
        
                    <div className="project-desc elem" dangerouslySetInnerHTML={ {__html: article.descHtml} }>
                        {/* <span className="elem" dangerouslySetInnerHTML={ {__html: article.descHtml} }></span> */}
                    </div>
                </div>
            </article>
        </>
    )
};