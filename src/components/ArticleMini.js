import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { m } from "framer-motion";
import { articleFramer, element } from "../utils/framerMotion";
import { useEffect, useState } from "react";

export default function ArticleMini() {
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

  // Check link
  function getLink(article) {
    const isLink = article?.link;
    if(isLink) {
      return (
        <a  href={article?.link} target="_blank" rel="noreferrer">
          <AiOutlineLink/>
        </a>
      )
    }
  }

  // Check repo
  function getRepo(article) {
    const isRepo = article?.repo;
    if(isRepo) {
      return (
        <a href={article?.repo} target="_blank" rel="noreferrer">
          <AiOutlineGithub/>
        </a>
      )
    }
  }

  // Check Build
  function getBuild(article) {
    const isBuild = article?.build;
    if(isBuild) {
      return (
        article?.build?.map((build) => ( 
          <h3 key={build?.id} className="article-mini-build__text">{build?.text}</h3>
        ))
      )
    }
  }

   
  return (
    <>
      <div className="flex-rows-cntr">
        {articles
        ?.filter((article) => article?.online.includes("y" || "Y"))
        ?.sort ((a, b) => a.value > b.value ? 1 : -1)
        ?.map((article) => (

          <m.article
          key={article?.id}
          className="article-mini article"
          variants={articleFramer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          >
            <div className="article-mini__txt"> 
              <div className="article-mini-header">
                <div className="article-mini-title">
                  <m.h3 variants={element}>{article?.title}</m.h3>
                  <m.div className="article-links" variants={element}>
                    {getLink(article)}
                    {getRepo(article)} 
                  </m.div>
                </div>
                <m.div className="article-mini-build" variants={element}>
                  {getBuild(article)}
                </m.div> 
              </div>

              <m.div className="article-mini-desc" variants={element} >
                {article?.shortText?.map((text, i) => (
                  <span key={i}> {text}</span>
                ))}
              </m.div>

            </div>
          </m.article>

        ))}
      </div>
    </>
  )
};
