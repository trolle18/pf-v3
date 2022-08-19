import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import '../scss/ArticlePage.scss';

export default function PostArticlePage() {
    const [post, setPost] = useState({});
    const params = useParams();
    const postId = parseInt(params.id);
    

    // Fetch and set article data
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/posts.json"); // Fetch data from JSON
            const data = await response.json();

            const postData = data.find(item => item.id === postId); // Get matching id
            setPost(postData);
        }
        if (postId) { // If id is found, set data
            getData();
        }
    }, [postId])


    function getImg(post) {
        if (post.imgs?.length >= 1) {
            return post.imgs[0]?.imgSrc;
        } 
    };

    // Only render build, if the article link excists
    function getTags(post) {
        const isTag = post.tags;
        if(isTag) {
            return(
                post.tags.map((tag, i) => {
                    return( <span key={i}>{post.tag}</span> )
                })
            )
        }
        else{
            return(
                null
            )
        }
    }


    return (
        <>
            <section className="page">
                <div className="page-header">
                    {/* <UseBackListener/> */}
                    <h2>Article Page</h2>
                    {/* <span className="sub-title">Here is a subtitle</span> */}
                </div>

                <article  key={post?.id} className="article">
                    <div className="article-header">
                        <div className='header-img'>
                            <img src={getImg(post)} alt="" />
                        </div>  
                        <div className="article-title">
                            <h1>{post?.title}</h1>
                            <div className="article-links">
                                <span>{post.date}</span>
                            </div>
                        </div>    
                        <div className='subtitle'><h3>{post?.subtitle}</h3></div>
                        <div className='tags'>{getTags(post)}</div>            
                        {/* <div>{post?.week}</div>        */}
                    </div>

                    <div className="article-content">
                        {/* <span dangerouslySetInnerHTML={ {__html: post.descHtml} }></span> */}
                        <p>
                            Mandag d. 8 august kunne jeg endelig skyde min praktikperiode i gang, hos AKQA. Jeg skulle oprindeligt først starte d. 15 august, men fik lov til at starte en uge før med selvstudie, for at få ugerne til at gå mest muligt op.<br/>
                        {/* </p>
                        <p> */}
                            Til mit selvstudie havde jeg forberedt lidt forskelligt materiale som jeg ville kigge på, i form af nogle kurser på Linkedin Learning og Skillshare, samt nogle anbefalede videoer på youtube.
                        </p> 

                        <div className='article-section'>
                            <div className='article-box'>                                            
                                <p><span>MAN - </span> React.js + Sass/SCSS</p>
                                <p><span>TIR - </span> Next.js</p>
                                <p><span>ONS - </span> Next.js fortsat</p>
                                <p><span>TOR - </span> Vue.js</p>
                                <p><span>FRE - </span> Vue.js fortsat</p>
                            </div> 

                            <h4>Selvstudie</h4>
                            <p>Jeg startede ugen ud med noget React, som jeg har et godt kendskab til i forvejen, samt noget Sass, som jeg kendte lidt til i forvejen. </p>
                            <p> Derefter brugte jeg tirsdag og onsdag på Next, som jeg ikke havde nogen kendskab til i forvejen, men da det ligner React rigtigt meget, føler jeg hurtigt at jeg forstod det.</p>
                            <p>Torsdag og Fredag brugte jeg på Vue, som ikke ligner noget programmerings sprog jeg har brugt før, dog virker det umiddelbart simpelt, og jeg føler at jeg let forstod de basale dele af det.</p>    
                        </div>

                        <p>
                            Mandag d. 15 august skulle jeg endeligt møde op på kontoret klokken 0830, til min første dag.                       
                        </p>

                    </div>
                   
                </article>

            </section>
        </>
    );
};
