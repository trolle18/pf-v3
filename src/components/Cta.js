import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function Cta({ data }) {

  return (
    <>
      <motion.div
      key={data?.id}
      className="cta-cntr center-spaced"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      >
        {data?.link.map((link) => (
          <motion.a
          key={link?.id}
          className="cta center-spaced"
          aria-label={link.title}
          href={link?.url}
          variants={element}
          >
            {link?.text}
          </motion.a>
        ))}
      </motion.div>
    </>
  )
};
