import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { m } from "framer-motion";
import { articleFramer, element } from "../utils/framerMotion";

export default function WorkArticle({ article }) {

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
          <span key={build?.id}>{build?.text}</span>
        ))
      )
    }
  }

  // Check gallery
  function getGallery(article) {
    const isImgs = article?.imgs;
    
    if(isImgs) {
      return (
        <m.div className="article__gallery-cntr" variants={element}>
          <div className="gallery">
            {article?.imgs.map((img) =>  ( 
                <div className="img-cntr" key={img?.id}>
                  <img src={img?.src} alt={img?.alt}/> 
                </div>
              ))}
          </div>
        </m.div>
      )
    }
  }
   
  return (
    <>
      <m.article
      key={article?.id}
      className="article"
      variants={articleFramer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      >
        {getGallery(article)}
        <div className="article__txt"> 
          <div className="article-header">
            <div className="article-title">
              <m.h3 variants={element}>{article?.title}</m.h3>
              <m.div className="article-links" variants={element}>
                {getLink(article)}
                {getRepo(article)} 
              </m.div>
            </div>

            <m.div className="article-build" variants={element}>
              {getBuild(article)}
            </m.div> 
          </div>

          <m.div className="article-desc" variants={element} >
            {article?.descText?.map((text, i) => (
              <span key={i}> {text} </span>
            ))}
          </m.div>
        </div>
      </m.article>
    </>
  )
};
