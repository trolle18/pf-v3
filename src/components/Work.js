import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { container, elemFast } from "../utils/framerMotion";
import WorkArticle from "./WorkArticle";


export default function Work() {
    const [sectionData, setSectionData] = useState([]);
    const [articles, setArticles] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/workData.json");
            const data = await response.json();
            setSectionData(data);             
        }       
        getData();        
    }, []);

    // Fetch projects from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/projects.json");
            const data = await response.json();
            setArticles(data);             
        }       
        getData();        
    }, []);



    return (
        <>
            <section className="work-cntr section" id="work">
                {sectionData.map((data) => (
                    <motion.div 
                    key={data.id}
                    className="work-cntr__title"                    
                    variants={container}
                    initial="hidden"
                    whileInView="showFast"
                    viewport={{once: true}}
                    >
                        <motion.h2 variants={elemFast}>{data.title}</motion.h2>
                        <motion.p variants={elemFast}>{data.desc}</motion.p>
                    </motion.div>
                ))} 

                <div className="projects-cntr">
                    {articles
                    .filter((article) => article.online.includes("y" || "Y"))
                    .sort ((a, b) => a.value > b.value ? 1 : -1)
                    .map((article) => (
                        <WorkArticle key={article.id} article={article}/>
                    ))}
                </div>

                
            </section>
        </>
    )
};