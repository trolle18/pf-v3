import { useEffect, useState } from "react";
import '../scss/About.scss';

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

    return (
        <>
        {sectionData.map((data) => (
            <section className="about-cntr section" id="about" key={data.id}>
               
                <div className="about-content">
                    <div className="about-txt">
                        <div className="txt-cnt">
                            <h2>{data.title}</h2>
                            {data.desc.map((descData) => (
                                <p key={descData.id}>{descData.txt}</p>
                            ))}
                        </div>

                        <div className="mob-img-cntr">
                            <div className="mob-img-box">
                                {data.img.map((img) => (
                                    <img key={img.imgId} src={img.imgUrl} className="mob-img" alt={img.imgAlt}/>
                                ))}                                    
                            </div>
                        </div>
                    </div>

                    <div className="skill-box">
                        <span>{data.listTitle}</span>
                        <ul className="skill-list">
                            {data.listItems.map((listItem) => (
                                <li key={listItem.id}><span>{listItem.item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="img-cntr ">
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