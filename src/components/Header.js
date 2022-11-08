import { useState, useEffect } from "react";

export default function Header() {
    const [sectionData, setSectionData] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/headerData.json");
            const data = await response.json();
            setSectionData(data);             
        }       
        getData();        
    }, []);

    // Intersection observer
    let secObserverOptions = {
        threshold: 0
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
    document.querySelectorAll(".sec").forEach((i) => {
        if (i) {
            secObserver.observe(i);
        }
    });


    return (
        <>
        {sectionData.map((data) => (
            <section className="header-cntr sec" key={data.id}>
                <div className="header-txt">
                    <span>{data.introDesc}</span>
                    <h1>{data.title}</h1>
                    <span>{data.desc}</span>
                </div>
            </section>
        ))}   
        </>
    )
};