// import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../scss/App.scss';

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

    // function getImg(article) {
    //     if (article.imgs?.length >= 1) {
    //         return article.imgs[0]?.img;
    //     } 
    // };


    return (
        <>
            <section className="page">
                <div>
                    <h2>Article Page</h2>
                    <span className="sub-title">Here is a subtitle</span>
                </div>

                <article  key={article?.id} className="article">
                    <div className='article-img-cntr'>
                        {/* <img src={getImg(article)} alt={article?.title}/> */}

                        {article.imgs?.map((img) => (

                                    <img 
                                     alt="" src={img.imgSrc}/>
                            ))}
                            
                    </div>

                    <h1>{article?.title}</h1>
                    <span>{article?.desc}</span>

                </article>

            </section>
        </>
    );
};
