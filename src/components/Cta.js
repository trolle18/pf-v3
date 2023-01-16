import { m } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function Cta({ data }) {

  return (
    <>
      <m.div
      key={data?.id}
      className="cta-cntr center-spaced"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      >
        {data?.link.map((link) => (
          <m.a
          key={link?.id}
          className="cta center-spaced"
          aria-label={link.title}
          href={link?.url}
          variants={element}
          >
            {link?.text}
          </m.a>
        ))}
      </m.div>
    </>
  )
};
