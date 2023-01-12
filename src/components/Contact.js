import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

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
                <section key={data.id}>
                    <motion.div
                    className="contact-cntr section" 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    >
                        <motion.h2 id="contact" className="elem" variants={element}>
                            {data.title}
                        </motion.h2>

                        <motion.p className="elem" variants={element}>
                            {data.desc}
                        </motion.p>

                        {data.link.map((link) => (
                            <motion.a key={link.id} href={link.url} className="elem" variants={element}>
                                {link.text}
                            </motion.a>
                        ))}  
                    </motion.div>
                        
                </section>
            ))}           
        </>
    )
};