import React, {useState, useEffect} from 'react';

export default function Footer() {
    const [sectionData, setSectionData] = useState([]);
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())
    useEffect(() => { getYear() }, [])


    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/footerData.json");
            const data = await response.json();
            setSectionData(data);             
        }       
        getData();        
    }, []);

    return (
        <>
            {sectionData.map((data) => (
                <footer className="footer-cntr" key={data.id}>

                    <div className="footer-top">
                        <div className="footer-top__l-col">
                            <div className="footer-logo"> 
                                <a href="/" className='logo-link'>{data.title}</a> 
                            </div>
                            {data.link.map((link) => (
                                <a key={link.id} className='mailto' href={link.url}>
                                    {link.text}
                                </a>
                            ))}    
                            
                        </div>
                        <div className="footer-top__links">
                            {data.some.map((some) => (
                                <a key={some.id} href={some.url} target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{__html: some.svg}}></a>
                            ))}    
                        </div>
                    </div>

                    <div className="footer-btm">
                        <span dangerouslySetInnerHTML={{__html: data.copy}}></span>
                        <span className="copy"><span dangerouslySetInnerHTML={{__html: data.copyIcon}}></span> {date}</span>
                    </div>
                    
                </footer>
            ))}                  
        </>
    )
};
