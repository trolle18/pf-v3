import { useEffect, useState } from 'react';
import WorkArticle from '../components/WorkArticle';

export default function ProjectsPage() {
    const [articles, setArticles] = useState([]);

    // Fetch projects from JSON
    useEffect(() => {      
        async function getData() {
            const response = await fetch("/data/projects.json");
            const data = await response.json();
            setArticles(data); 
            
        }       
        getData();        
    }, []);

    return (
        <>
            <section className="page">
                <section className="work-cntr section">
                    <div className="work-cntr-title">
                        <h2>Work</h2>
                        <span className="sub-title">Here is a few of the projects I have been working on</span>
                    </div>

                    {articles.map( (article ) => (
                        <WorkArticle article={article} key={article.id}/>
                    ))}
                </section>
            </section>
        </>
    );
};
