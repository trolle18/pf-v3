import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function List({ list }) {

  return (
    <>
      <motion.div
      className="skills"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      >
        <motion.span className="elem" variants={element}> {list?.title} </motion.span>

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
            <motion.li key={item?.id} className="elem" variants={element}> <span>{item?.text}</span> </motion.li>
          ))}

        </motion.ul>
      </motion.div>
    </>
  )
};