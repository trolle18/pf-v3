import { m } from "framer-motion";
import { container } from "../utils/framerMotion";
// import useWindowDimensions from "../utils/useWindowDimentions";
import HeaderWText from "./HeaderWText";
import List from "./List";

export default function TextImageList({ data }) {
  // const { height, width } = useWindowDimensions();
  // function MobileImg({data}) {
  //   if(width < 600) {
  //     return (  )
  //   }
  // }

  return (
    <>
      {data?.about?.map((data) => (
        <section className="section-cntr row section" id="about" key={data?.id}>
          <div className="section-cntr__content">

            <div className="flex-cntr">
              <HeaderWText data={data} key={data.id}/>

              <m.div className="mob-img-cntr"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              >
                <div className="mob-img-cntr__img-inner-cntr">
                  {data?.img.map((img) => (
                    <img key={img.id} src={img?.url} className="img" alt={img?.alt}/>
                  ))}
                </div>

              </m.div>
            </div>

            {data?.list?.map((list) => (
              <List list={list} key={data?.id}/>
              ))}
          </div>

        <m.div
        className="section-cntr__img-cntr"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        >
          <div className="img-inner-cntr">
            {data?.img?.map((img) => (
              <img key={img?.id} src={img?.url} className="img-inner-cntr__img" alt={img?.alt}/>
            ))}
          </div>          
        </m.div>

        </section>
      ))}
    </>
  )
};
