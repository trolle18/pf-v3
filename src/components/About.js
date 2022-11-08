import { useEffect, useState } from "react";
import '../utils/IntersecObs';

export default function About() {
    const [sectionData, setSectionData] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/aboutData.json");
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
            <section className="about-cntr section sec" id="about" key={data.id}>
               
                <div className="about-content">
                    <div className="about-txt">
                        <div className="txt-cnt">
                            <h2 className="elem">{data.title}</h2>
                            {data.desc.map((descData) => (
                                <p key={descData.id} className="elem">
                                    {descData.txt}
                                </p>
                            ))}
                        </div>

                        <div className="mob-img-cntr elem">
                            <div className="mob-img-box">
                                {data.img.map((img) => (
                                    <img key={img.imgId} src={img.imgUrl} className="mob-img" alt={img.imgAlt}/>
                                ))}                                    
                            </div>
                        </div>
                    </div>

                    <div className="skill-box">
                        <span className="elem">{data.listTitle}</span>
                        <ul className="skill-list elem">
                            {data.listItems
                            .filter((listItem) => listItem.online.includes('y'))
                            .map((listItem) => (                                
                                <li key={listItem.id} className="elem"><span>{listItem.item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="img-cntr elem">
                    <div className="img-box">
                        {data.img.map((img) => (
                            <img key={img.imgId} src={img.imgUrl} className="pf-img" alt={img.imgAlt}/>
                        ))}                        
                    </div>
                </div>
        
            </section>
        ))}           
    </>
    )
};