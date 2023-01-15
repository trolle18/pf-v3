import Cta from "../Cta";
import HeaderWText from "../HeaderWText";

export default function ContactSection({ data }) {
  
  return (
    <>
      {data?.contact.map((data) => (
        <section className="section-cntr section" id={data.tag} key={data?.id}>

          <div className="section-cntr__content w80">
            <div className="flex-cntr center-text">
              <HeaderWText data={data} key={data.id}/>
            </div>
            <Cta data={data}/>
          </div>

      </section>
      ))}
    </>
  )
};
