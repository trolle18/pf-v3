import ArticlesCntr from "../ArticlesCntr";
import HeaderWText from "../HeaderWText";

export default function WorkSection({ data }) {
  return (
    <> 
      {data?.work?.map((data) => (
        <section className="section-cntr section" id={data.tag} key={data?.id}>

           <div className="section-cntr__content">
            <div className="flex-cntr">              
                <HeaderWText data={data} key={data.id}/>            
            </div>
          </div>         
          <ArticlesCntr/>
          
        </section>
      ))}
    </>
  )
};
