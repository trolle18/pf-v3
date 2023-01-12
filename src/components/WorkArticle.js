import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import { container, element } from "../utils/framerMotion";

export default function WorkArticle({ article }) {

  // Check link
  function getLink(article) {
    const isLink = article?.link;
    if(isLink) {
      return (
        <a 
        href={article?.link} 
        className="elem" 
        target="_blank" 
        rel="noreferrer" 
        >
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
        <a
        href={article?.repo}
        className="elem"
        target="_blank"
        rel="noreferrer"
        >
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
        <motion.div className="project__gallery-cntr" variants={element}>
          <div className="gallery">
            {article?.imgs.map((img) => {
              return ( 
                <div className="img-cntr" key={img?.id}>
                  <img src={img?.src} alt={img?.alt} className="elem"/> 
                </div>
              )
            })}
          </div>
        </motion.div>
      )
    }
  }
   
  return (
    <>
      <motion.article
      key={article?.id}
      className="project"
      variants={container}
      initial="hidden"
      whileInView="show"
      >
        {getGallery(article)}
        <div className="project__txt"> 
          <div className="project-header">
            <div className="project-title">
              <motion.h3 className="elem" variants={element}>{article?.title}</motion.h3>
              <motion.div className="project-links" variants={element}>
                {getLink(article)}
                {getRepo(article)} 
              </motion.div>
            </div>

            <motion.div className="project-build" variants={element}>
              {getBuild(article)}
            </motion.div> 
          </div>

          <motion.div className="project-desc elem" variants={element} dangerouslySetInnerHTML={ {__html: article?.descHtml} }></motion.div>
        </div>
      </motion.article>
    </>
  )
};
