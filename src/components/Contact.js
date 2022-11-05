import { useState, useEffect } from "react";
import '../utils/IntersecObs';

export default function Contact() {
    const [sectionData, setSectionData] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/contactData.json");
            const data = await response.json();
            setSectionData(data);             
        }       
        getData();        
    }, []);

        // Intersection observer
        let secObserverOptions = {
            threshold: 0.2
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
            <section className="contact-cntr section sec" key={data.id}>
                <h2 id="contact" className="elem">{data.title}</h2>
                <p className="elem">{data.desc}</p>
                {data.cta.map((cta) => (
                    <a key={cta.id} href={cta.link} className="elem">{cta.linkTxt}</a>
                ))}      
            </section>
        ))}           
        </>
    )
};