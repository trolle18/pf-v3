import { m } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function List({ list }) {

  return (
    <>
      <m.div
      className="list-cntr"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      >
        <m.span variants={element}> {list?.title} </m.span>

        <m.ul
        className="list"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        >

          {list?.items
          ?.filter((items) => items?.online.includes('y'))
          ?.map((item) => (
            <m.li key={item?.id} variants={element} className="list__item"> <span>{item?.text}</span> </m.li>
          ))}

        </m.ul>
      </m.div>
    </>
  )
};