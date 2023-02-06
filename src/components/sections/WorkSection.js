import { useState, useEffect } from "react";
import WorkArticle from "../WorkArticle";
import ArticleMini from "../ArticleMini";
import HeaderWText from "../HeaderWText";

export default function WorkSection({ data }) {
  const [articles, setArticles] = useState([]);

  // Fetch projects from JSON
  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/EN/projects.json");
      const data = await response.json();
      setArticles(data);
    }
    getData();
  }, []);

  return (
    <> 
      {data?.work?.map((data) => (
        <section className="section-cntr section" id={data.tag} key={data?.id}>

          <div className="section-cntr__content">
            <div className="flex-cntr">              
              <HeaderWText data={data} key={data.id}/>            
            </div>
          </div>     

          <div className="flex-col-cntr">
            {articles
            ?.filter((article) => article?.online.includes("y" || "Y"))
            ?.filter((article) => article?.type.includes("feature"))
            ?.sort ((a, b) => a.value > b.value ? 1 : -1)
            ?.map((article) => (
              <WorkArticle key={article?.id} article={article}/>
            ))}
          </div>    

          <div className="flex-rows">
            {articles
            ?.filter((article) => article?.online.includes("y" || "Y"))
            ?.filter((article) => article?.type !== ("feature"))
            ?.sort ((a, b) => a.value > b.value ? 1 : -1)
            ?.map((article) => (
              <ArticleMini key={article.id} article={article} />
            ))}
          </div>

        </section>
      ))}
    </>
  )
};
