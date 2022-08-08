// import { useNavigate } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"


export default function WorkArticle( {article} ) {
    // const navigate = useNavigate();

    // // Fetch project imgs from JSON - If there is more than one, display only the first one
    // function getImg(article) {
    //     if (article.imgs?.length >= 1) {
    //         return article.imgs[0]?.imgSrc;
    //     } 
    // };

    // Only render link, if the article link excists
    function getLink(article) {
        const isLink = article.link;
        if(isLink) {
            return(
                <a href={article.link}> <AiOutlineLink/> </a>
            )
        }
        else{
            return(
                null
            )
        }
    }

    // Only render repo, if the article link excists
    function getRepo(article) {
        const isRepo = article.repo;
        if(isRepo) {
            return(
                <a href={article.repo}> <AiOutlineGithub/> </a>
            )
        }
        else{
            return(
                null
            )
        }
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
        else{
            return(
                null
            )
        }
    }

    // // Navigate to article page 
    // function handleClick() {
    //     navigate(`/projects/${article.id}`)
    // }


    // Intersection observer
    const cards = document.querySelectorAll(".card")
    const observer = new IntersectionObserver( 
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        }, 
        {
            // rootMargin: "100px",
            threshold: .5,
        }        
    )
    cards.forEach(card => {
        observer.observe(card)
    })

   
    return (
        <>
            <article key={article.id} className="project card" 
            // onClick={handleClick}
            >
                <div className="project-gallery-cntr">
                    <div className="project-gallery">
                        {article.imgs.map((imgs, imgId) => {
                            return( 
                                <img key={imgId} src={imgs.imgSrc} alt={imgs.ImgAlt}/> 
                                )
                        })}
                    </div>
                </div>
                
                {/* <div className="project-img-cntr">
                    <img src={getImg(article)} alt={article.title}/>  
                </div> 
                */}

                <div className="project-txt"> 
                    <div className="project-header">

                        <div className="project-title item">
                            <h3>{article.title}</h3>
                            <div className="project-links">
                                {getLink(article)}
                                {getRepo(article)}
                            </div>
                        </div>

                        <div className="project-build item">
                            {getBuild(article)}
                        </div> 
                    </div>
        
                    <div className="project-desc item">
                        <span dangerouslySetInnerHTML={ {__html: article.descHtml} }></span>
                    </div>
                </div>
            </article>
        </>
    )
};