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
      viewport={{once: true}}
      >
        <m.h2 variants={element} className="text-cntr__header">
          {data?.title}
        </m.h2>

        {data?.desc?.map((desc) => (
          <m.p key={desc?.id} variants={element} className="text-cntr__text">
            {desc?.text}
          </m.p>
        ))}

      </m.div>
    </>
  )
};