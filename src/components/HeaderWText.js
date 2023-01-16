import { m } from "framer-motion";
import { container } from "../utils/framerMotion";

export default function HeaderWText({ data }) {
  return (
    <>
      <div key={data?.id} className="text-cntr">
        <m.h2 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-cntr__header"
        >
          {data?.title}
        </m.h2>

        {data?.descText?.map((text, i) => (
          <m.p key={i} 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="text-cntr__text"
          >
            {text}
          </m.p>
        ))}
      </div>
    </>
  )
};
