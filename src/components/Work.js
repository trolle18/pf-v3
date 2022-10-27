import { useState, useEffect } from "react";
import '../scss/Work.scss';
import WorkArticle from "./WorkArticle";

export default function Work() {
    const [sectionData, setSectionData] = useState([]);
    const [articles, setArticles] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/workData.json");
            const data = await response.json();
            setSectionData(data);             
        }       
        getData();        
    }, []);

    // Fetch projects from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/projects.json");
            const data = await response.json();
            setArticles(data);             
        }       
        getData();        
    }, []);

    // Intersection observer
    let cardObserverOptions = {
        threshold: 0.25
    };
    var cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);
    function cardObserverCallback(entries, observer) {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
            }
        });
    };
    let cardTarget = '.card';
    document.querySelectorAll(cardTarget).forEach((i) => {
        if (i) {
            cardObserver.observe(i);
        }
    });

    // Intersection observer
    let secObserverOptions = {
        threshold: 0.25
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
    let secTarget = '.sec';
    document.querySelectorAll(secTarget).forEach((i) => {
        if (i) {
            secObserver.observe(i);
        }
    });

    return (
        <>
            <section className="work-cntr section" id="work">
                {sectionData.map((data) => (
                    <div className="work-cntr-title sec" key={data.id}>
                        <h2>{data.title}</h2>
                        <p className="sub-title">{data.desc}</p>
                    </div>
                ))} 

                {articles
                .sort ((a, b) => a.value > b.value ? 1 : -1)
                .map((article) => (
                    <WorkArticle article={article} key={article.id}/>
                ))}                
            </section>
        
        </>
    )
};