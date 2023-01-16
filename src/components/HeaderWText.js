import { m } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function HeaderWText({ data }) {

  return (
    <>
      <m.div
      key={data?.id}
      className="text-cntr"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      >
        <m.h2 variants={element} className="text-cntr__header">
          {data?.title}
        </m.h2>

        {data?.descText?.map((text, i) => (
          <m.p key={i} variants={element}  className="text-cntr__text">
            {text}
          </m.p>
        ))}

        {/* {data?.desc
        ?.filter((desc) => desc?.online.includes("y" || "Y"))
        ?.map((desc) => (
          <m.p key={desc?.id} variants={element} className="text-cntr__text">
            {desc?.text}
          </m.p> */}
        {/* ))} */}
      </m.div>
    </>
  )
};