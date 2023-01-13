import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";
import HeaderWText from "./HeaderWText";

export default function Contact({ data }) {

  return (
    <>  {data?.contact.map((data) => (
    <section className="section-cntr section" key={data?.id} id="contact">
          <div className="section-cntr__content w100">
           
            <div className="flex-cntr center-text">
              <HeaderWText data={data} key={data.id}/>
            </div>

            <motion.div
            key={data?.id}
            className="cta-cntr center-spaced"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            >
              {data?.link.map((link) => (
                <motion.a key={link?.id} className="cta center-spaced" href={link?.url} variants={element}>
                  {link?.text}
                </motion.a>
              ))}
            </motion.div>

          </div>      
      </section>
      ))}
    </>
  )
};
