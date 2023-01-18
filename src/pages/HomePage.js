import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import WorkSection from '../components/sections/WorkSection';

export default function HomePage() {
    const [pageData, setPageData] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/EN/homepageData.json");
            const data = await response.json();
            setPageData(data);
        }
        getData();
    }, []);

    return (
        <>
            {pageData?.map((data) => (
                <section className="page" key={data?.id}>
                    <Hero data={data}/>
                    <AboutSection data={data}/>
                    <WorkSection data={data} />
                    <ContactSection data={data}/>
                </section>
            ))}
        </>
    );
};
