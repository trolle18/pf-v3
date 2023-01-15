import { useState, useEffect } from "react";
import WorkArticle from "./WorkArticle";
// import HeaderWText from "./HeaderWText";

export default function ArticlesCntr() {
  const [articles, setArticles] = useState([]);

  // Fetch projects from JSON
  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setArticles(data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="flex-rows-cntr">
        {articles
        ?.filter((article) => article?.online.includes("y" || "Y"))
        ?.sort ((a, b) => a.value > b.value ? 1 : -1)
        ?.map((article) => (
          <WorkArticle key={article?.id} article={article}/>
        ))}
      </div>
    </>
  )
};