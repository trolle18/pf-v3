import { useNavigate } from 'react-router-dom';


export default function Post( {post} ) {
    const navigate = useNavigate();

    // Fetch post imgs from JSON - If there is more than one, display only the first one
    function getImg(post) {
        if (post.imgs?.length >= 1) {
            return post.imgs[0]?.imgSrc;
        } 
    };

    // Navigate to article page 
    function handleClick() {
        navigate(`/posts/${post.id}`)
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
            rootMargin: "100px",
            // threshold: .5,
        }        
    )
    cards.forEach(card => {
        observer.observe(card)
    })

   
    return (
        <>
            <article key={post.id} className="article post" onClick={handleClick}>
                <div className="article-img-cntr">
                    <div className='article-img'>
                        <img src={getImg(post)} alt={post.title}/>  
                    </div>
                    
                </div>

                <div className="article-txt"> 
                    <div className="article-header">

                        <div className="article-title">
                            <h3>{post.title}</h3>
                            <div className="article-links">
                                <span>{post.date}</span>
                            </div>
                        </div>
                        
                        <div className="article-build">
                            <span>{post.subtitle}</span>
                            {post.tags.map((tags, i) => {
                                return( <span key={i}>{tags.tag}</span> )
                            })}
                        </div> 
                    </div>
        
                    <div className="article-desc">
                        <span>{post.short}</span>
                    </div>
                </div>
            </article>
        </>
    )
};