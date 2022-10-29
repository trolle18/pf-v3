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
    return (
        <>
        {sectionData.map((data) => (
            <section className="header-cntr" key={data.id}>
                <div className="header-txt">
                    <span>{data.introDesc}</span>
                    <h1 id="test">{data.title}</h1>
                    <span>
                        {data.desc}
                        
                    </span>
                </div>
            </section>
        ))}   
        </>
    )
};