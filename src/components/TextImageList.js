import { m } from "framer-motion";
import { container, element } from "../utils/framerMotion";
// import useWindowDimensions from "../utils/useWindowDimentions";
import HeaderWText from "./HeaderWText";
import List from "./List";

export default function TextImageList({ data }) {
  // const { height, width } = useWindowDimensions();


  // function MobileImg({data}) {
  //   if(width < 600) {
  //     return (
  //      <m.div className="mob-img-cntr__img-inner-cntr" variants={element}>
  //       {data?.img.map((img) => (
  //         <img key={img.id} src={img?.url} className="img" alt={img?.alt}/>
  //       ))}
  //     </m.div>
  //     )
  //   }
  // }

  // function DeskImg({data}) {
  //   if(width > 600) {
  //     return (
  //        <m.div className="img-inner-cntr" variants={element}>
  //         {data?.img?.map((img) => (
  //           <img key={img?.id} src={img?.url} className="img-inner-cntr__img" alt={img?.alt}/>
  //         ))}
  //       </m.div>
  //     )
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
                {/* <MobileImg data={data} /> */}
                <m.div className="mob-img-cntr__img-inner-cntr" variants={element}>
                  {data?.img.map((img) => (
                    <img key={img.id} src={img?.url} className="img" alt={img?.alt}/>
                  ))}
                </m.div>

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
          {/* <DeskImg data={data} /> */}
          <m.div className="img-inner-cntr" variants={element}>
            {data?.img?.map((img) => (
              <img key={img?.id} src={img?.url} className="img-inner-cntr__img" alt={img?.alt}/>
            ))}
          </m.div>
          
        </m.div>

        </section>
      ))}
    </>
  )
};