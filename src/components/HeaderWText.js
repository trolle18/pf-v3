import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function HeaderWText({ data }) {

  return (
    <>

      <motion.div
      key={data?.id}
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
    </>
  )
};