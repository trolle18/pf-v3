import { useNavigate } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"


export default function WorkArticle( {article} ) {
    const navigate = useNavigate();

    // Fetch project imgs from JSON - If there is more than one, display only the first one
    function getImg(article) {
        if (article.imgs?.length >= 1) {
            return article.imgs[0]?.img;
        } 
    };

    // Navigate to article page 
    function handleClick() {
        navigate(`/projects/${article.id}`)
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
            <article key={article.id} className="project card" onClick={handleClick}>
                <div className="project-img-cntr">
                    <img src={getImg(article)} alt={article.title}/>  
                </div>

                <div className="project-txt"> 
                    <div className="project-header">

                        <div className="project-title item">
                            <h3>{article.title}</h3>
                            <div className="project-links">
                                <a href={article.link}> <AiOutlineLink/> </a>
                                <a href={article.repo}> <AiOutlineGithub/> </a>
                            </div>
                        </div>

                        <div className="project-build item">
                            {article.build.map((build, i) => {
                                return( <span key={i}>{build.tech}</span> )
                            })}
                        </div> 
                    </div>
        
                    <div className="project-desc item">
                        <span>{article.short}</span>
                    </div>
                </div>
            </article>
        </>
    )
};