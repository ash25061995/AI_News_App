import React, { useRef, useEffect } from "react";

const NewsCard = ({ article, index, activeArticle }) => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop+ref.current.offsetHeight/2);
  const myRef = useRef(null);
  useEffect(() => {
    if (activeArticle === index) {
      scrollToRef(myRef);
    }
  }, [activeArticle, index]);

  return (
    <div
      ref={activeArticle === index ? myRef : null}
      className="cards"
      key={index}
      style={
        activeArticle === index ? { borderBottom: "2px solid blue",opacity:"1" } : null
      }
    >
      <img src={article.urlToImage} alt="News Article" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{new Date(article.publishedAt).toDateString()}</p>
        <p>{article.source.name}</p>
      </div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <button>
        <a
          href={article.url}
          style={{
            display: "flex",
            justifyContent: "space-between",
            textDecoration: "none",
            color: "purple",
          }}
        >
          <p>Learn More</p> <p>{index + 1}</p>
        </a>
      </button>
    </div>
  );
};

export default NewsCard;
