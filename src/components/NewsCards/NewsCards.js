import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles,activeArticle }) => {
  const infoCards = [
    { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
    {
      color: "#1565c0",
      title: "News by Categories",
      info:
        "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me the latest Technology news",
    },
    {
      color: "#4527a0",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
      text: "What's up with PlayStation 5",
    },
    {
      color: "#283593",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
      text: "Give me the news from CNN",
    },
  ];
  let displayCards;
  if (!articles.length) {
    displayCards = (
      <div  style={{ display: "flex",flexFlow:"row wrap", justifyContent: "space-around" }}>
        {infoCards.map((info) => (
          <div className="instructions" style={{ background: `${info.color}`, boxShadow:`1px 2px 22px 9px ${info.color}` }}>
            <p>{info.title}</p>
            {info.info?<div><strong>{info.title.split(" ")[2]}:</strong><br/>{info.info}</div>:null}
            
            <div><strong>Try saying:</strong><br/>{info.text}</div>
          </div>
        ))}
      </div>
    );
  } else {
    displayCards = (
      <div className="container">
        {articles.map((article, i) => (
          <NewsCard article={article} index={i} activeArticle={activeArticle}/>
        ))}
      </div>
    );
  }
  return <>{displayCards}</>;
};

export default NewsCards;
