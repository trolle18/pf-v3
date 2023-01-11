import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

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
                <div className="about-cntr__content">
                    <div className="about-txt">

                        <motion.div
                        className="about-txt__txt"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                        >
                            <motion.h2 className="elem" variants={element}>
                                {data.title}
                            </motion.h2>

                            {data.desc.map((descData) => (
                                <motion.p key={descData.id} className="elem" variants={element}>
                                    {descData.txt}
                                </motion.p>
                            ))}
                        </motion.div>

                        <motion.div className="mob-img-cntr elem"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                        >
                            <motion.div className="mob-img-cntr__img-inner-cntr" variants={element}>
                                {data.img.map((img) => (
                                    <img key={img.imgId} src={img.imgUrl} className="mob-img" alt={img.imgAlt}/>
                                ))}                                    
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                    className="skills"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    >
                        <motion.span className="elem" variants={element} >
                            {data.listTitle}
                        </motion.span>

                        <motion.ul
                        className="skills__list elem"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                        >
                            {data.listItems
                            .filter((listItem) => listItem.online.includes('y'))
                            .map((listItem) => (                                
                                <motion.li key={listItem.id} className="elem" variants={element}>
                                    <span>{listItem.item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>

                <motion.div 
                className="about-cntr__img-cntr elem"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                >
                    <motion.div className="img-inner-cntr" variants={element}>
                        {data.img.map((img) => (
                            <img key={img.imgId} src={img.imgUrl} className="img-inner-cntr__img" alt={img.imgAlt}/>
                        ))}                        
                    </motion.div>
                </motion.div>
        
            </section>
        ))}           
    </>
    )
};