import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"
// import '../scss/ArticlePage.scss';

export default function ArticlePage() {
    const [article, setArticle] = useState({});
    const params = useParams();
    const articleId = parseInt(params.id);
    

    // Fetch and set article data
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/projects.json"); // Fetch data from JSON
            const data = await response.json();

            const articleData = data.find(item => item.id === articleId); // Get matching article id
            setArticle(articleData);
        }
        if (articleId) { // If article id is found, set article data
            getData();
        }
    }, [articleId])

    function getImg(article) {
        if (article.imgs?.length >= 1) {
            return article.imgs[0]?.imgSrc;
        } 
    };


    return (
        <>
            <section className="page">
                <div className="page-header">
                    <h2>Article Page</h2>
                    <span className="sub-title">Here is a subtitle</span>
                </div>

                <article  key={article?.id} className="article">
                    <div className="article-header">
                        <div className='header-img'>
                            <img src={getImg(article)} alt="" />
                        </div>  
                        <div className="article-title">
                            <h1>{article?.title}</h1>
                            <div className="article-links">
                                <a href={article.link}> <AiOutlineLink/> </a>
                                <a href={article.repo}> <AiOutlineGithub/> </a>
                            </div>
                        </div>                       
                    </div>

                    <div className="article-content">
                        <span>{article?.desc} </span>                       
                    </div>
                   
                </article>

            </section>
        </>
    );
};
