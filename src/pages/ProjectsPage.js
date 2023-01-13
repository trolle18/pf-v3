import { useEffect, useState } from 'react';
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
                    <Work data={data}/>
                </section>
            ))}
        </>
    );
};
