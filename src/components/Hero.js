import { m } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function Hero({ data }) {

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
      <section key={data?.id} className="hero-cntr">
        {data?.hero.map((data) => (
        <m.div
        key={data?.id}
        className="hero-cntr__txt"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        >
          {data?.text.map((data) => (
            <m.div variants={element} key={data?.id}>
              {TextType(data)}
            </m.div>
          ))}
        </m.div>
        ))}
      </section>
    </>
  )
};
