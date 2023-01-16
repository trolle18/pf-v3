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
      viewport={{ once: true, amount: 0.1 }}     
      >
        <m.span variants={element}> {list?.title} </m.span>

        <m.ul
        className="list"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        >
          {list?.listItems?.map((item, i) => (
            <m.li key={i} variants={element}   className="list__item">
              <span>{item}</span>
            </m.li>
          ))}
        </m.ul>
      </m.div>
    </>
  )
};
