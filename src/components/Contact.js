import { useState, useEffect } from "react";
import '../scss/Contact.scss';

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

    return (
        <>
        {sectionData.map((data) => (
            <section className="contact-cntr section" key={data.id}>
                <h2 id="contact">{data.title}</h2>
                <p>{data.desc}</p>
                {data.cta.map((cta) => (
                    <a key={cta.id} href={cta.link}>{cta.linkTxt}</a>
                ))}      
            </section>
        ))}           
        </>
    )
};