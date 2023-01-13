import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function List({ list }) {

  return (
    <>
      <motion.div
      className="list-cntr"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      >
        <motion.span variants={element}> {list?.title} </motion.span>

        <motion.ul
        className="list"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        >

          {list?.items
          ?.filter((items) => items?.online.includes('y'))
          ?.map((item) => (
            <motion.li key={item?.id} variants={element} className="list__item"> <span>{item?.text}</span> </motion.li>
          ))}

        </motion.ul>
      </motion.div>
    </>
  )
};