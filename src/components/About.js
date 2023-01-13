import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";
import HeaderWText from "./HeaderWText";
import List from "./List";

export default function About({ data }) {

  return (
    <>
      {data?.about?.map((data) => (
        <section className="section-cntr row section" id="about" key={data?.id}>
          <div className="section-cntr__content">

            <div className="flex-cntr">
              <HeaderWText data={data} key={data.id}/>

              <motion.div className="mob-img-cntr"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              >
                <motion.div className="mob-img-cntr__img-inner-cntr" variants={element}>
                  {data.img.map((img) => (
                    <img key={img.id} src={img.url} className="img" alt={img.alt}/>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {data?.list?.map((list) => (
              <List list={list} key={data?.id}/>
              ))}
          </div>

          <motion.div
          className="section-cntr__img-cntr"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          >
            <motion.div className="img-inner-cntr" variants={element}>
              {data?.img?.map((img) => (
                <img key={img?.id} src={img?.url} className="img-inner-cntr__img" alt={img?.alt}/>
              ))}
            </motion.div>
          </motion.div>

        </section>
      ))}
    </>
  )
};