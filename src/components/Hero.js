import { m } from "framer-motion";
import { container, element, hero } from "../utils/framerMotion";

export default function Hero({ data }) {

  function TextType(data) {
    const type = data?.type
    if(type) {
      if(type === "title") {
        return <h1 className="title">{data?.text}</h1>
      } else {
        return (
          <h2 className="text">{data?.text}</h2>
        )
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
        variants={hero}
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
