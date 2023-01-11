import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

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
            <section key={data.id} className="header-cntr sec">
                <motion.div 
                className="header-cntr__txt"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                >
                    <motion.span variants={element}>
                        {data.introDesc}
                    </motion.span>

                    <motion.h1 variants={element}>
                        {data.title}
                    </motion.h1>

                    <motion.span variants={element}>
                        {data.desc}
                    </motion.span>

                </motion.div>
            </section>
        ))}   
        </>
    )
};