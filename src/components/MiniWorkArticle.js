import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"

export default function MiniWorkArticle( {article} ) {
    // Only render link, if the article link excists
    function getLink(article) {
        const isLink = article.link;
        if(isLink) {
            return(
                <a href={article.link} className="elem" target="_blank" rel="noreferrer"> <AiOutlineLink/> </a>
            )
        }
        else{ return(null) }
    }

    // Only render repo, if the article link excists
    function getRepo(article) {
        const isRepo = article.repo;
        if(isRepo) {
            return(
                <a href={article.repo} className="elem" target="_blank" rel="noreferrer"> <AiOutlineGithub/> </a>
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

   
    return (
        <>
            <article key={article.id} className="project card">

                <div className="project__txt"> 
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
        
                    <div className="project-desc elem" dangerouslySetInnerHTML={ {__html: article.descHtml} }></div>
                </div>
            </article>
        </>
    )
};