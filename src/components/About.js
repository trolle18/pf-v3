import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";
import List from "./List";

export default function About({ data }) {

  return (
    <>
      {data?.about?.map((data) => (
        <section className="section-cntr section" id="about" key={data?.id}>
          <div className="section-cntr__content">

            <div className="flex-cntr">
              <motion.div
              className="text-cntr"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              >
                <motion.h2 variants={element} className="text-cntr__header">
                  {data?.title}
                </motion.h2>

                {data?.desc?.map((desc) => (
                  <motion.p key={desc?.id} variants={element} className="text-cntr__text">
                    {desc?.text}
                  </motion.p>
                ))}
              </motion.div>

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