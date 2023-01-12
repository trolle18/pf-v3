import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function Header({ data }) {

  function TextType(data, i) {
    const type = data?.type
    if(type) {
      if(type === "title") {
        return <h1 variants={element}>{data?.text}</h1>
      } else {
        return <span>{data?.text}</span>
      }
    }
  }

  return (
    <>
      <section key={data?.id} className="header-cntr sec">
        {data?.header.map((data) => (
        <motion.div
        key={data?.id}
        className="header-cntr__txt"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        >
          {data?.text.map((data) => (
            <motion.div variants={element} key={data?.id}>
              {TextType(data)}
            </motion.div>
          ))}
        </motion.div>
        ))}
      </section>
    </>
  )
};
