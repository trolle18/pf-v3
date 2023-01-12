import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function About({ data }) {

  return (
    <>
      {data?.about?.map((data) => (
        <section className="about-cntr section" id="about" key={data?.id}>
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
                  {data?.title}
                </motion.h2>

                {data?.desc?.map((desc) => (
                  <motion.p key={desc?.id} className="elem" variants={element}>
                    {desc?.text}
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
                    <img key={img.id} src={img.url} className="mob-img" alt={img.alt}/>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {data?.list?.map((list) => (
              <motion.div
              className="skills"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              >
                <motion.span className="elem" variants={element}>
                  {list?.title}
                </motion.span>

                <motion.ul
                className="skills__list elem"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                >
                  {list?.items
                  ?.filter((items) => items?.online.includes('y'))
                  ?.map((item) => (
                    <motion.li key={item?.id} className="elem" variants={element}>
                      <span>{item?.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              ))}
          </div>

          <motion.div
          className="about-cntr__img-cntr elem"
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