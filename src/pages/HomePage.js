import { useEffect, useState } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Work from '../components/Work';

export default function HomePage() {
    const [pageData, setPageData] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/pages/homepageData.json");
            const data = await response.json();
            setPageData(data);
        }
        getData();
    }, []);

    return (
        <>
            {pageData?.map((data) => (
                <section className="page" key={data?.id}>
                    <Header data={data}/>
                    <About data={data}/>
                    <Work data={data}/>
                    <Contact data={data}/>
                </section>
            ))}
        </>
    );
};
