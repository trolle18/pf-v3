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
            console.log(articleData);
        }
        if (articleId) { // If article id is found, set article data
            getData();
        }
    }, [articleId])
    console.log(article)



    return (
        <>
            <section className="page">
                <section className="work-cntr section">
                    <div className="work-cntr-title">
                        <h2>Article Page</h2>
                        <span className="sub-title">Here is a subtitle</span>
                    </div>
                </section>

                <section key={article?.id}>
                    <h1>{article?.title}</h1>
                </section>

            </section>
        </>
    );
};
