import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { m } from "framer-motion";
import { articleFramer, element } from "../utils/framerMotion";

export default function WorkArticle({ article }) {

  // Check link
  function getLink(article) {
    const isLink = article?.link;
    if(isLink) {
      return (
        <a  href={article?.link} className="elem" target="_blank" rel="noreferrer">
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
        <a href={article?.repo} className="elem" target="_blank" rel="noreferrer">
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
        article?.build?.map((build) => {
          return( <span key={build?.id} className="elem">{build?.text}</span> )
        })
      )
    }
  }

  // Check gallery
  function getGallery(article) {
    const isImgs = article?.imgs;
    if(isImgs) {
      return (
        <m.div className="project__gallery-cntr" variants={element}>
          <div className="gallery">
            {article?.imgs.map((img) => {
              return ( 
                <div className="img-cntr" key={img?.id}>
                  <img src={img?.src} alt={img?.alt} className="elem"/> 
                </div>
              )
            })}
          </div>
        </m.div>
      )
    }
  }
   
  return (
    <>
      <m.article
      key={article?.id}
      className="project"
      variants={articleFramer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      >
        {getGallery(article)}
        <div className="project__txt"> 
          <div className="project-header">
            <div className="project-title">
              <m.h3 className="elem" variants={element}>{article?.title}</m.h3>
              <m.div className="project-links" variants={element}>
                {getLink(article)}
                {getRepo(article)} 
              </m.div>
            </div>

            <m.div className="project-build" variants={element}>
              {getBuild(article)}
            </m.div> 
          </div>

          <m.div className="project-desc elem" variants={element} dangerouslySetInnerHTML={ {__html: article?.descHtml} }></m.div>
        </div>
      </m.article>
    </>
  )
};
