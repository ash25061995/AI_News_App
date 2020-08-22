import React from 'react';

const NewsCard = ({article,index,activeArticle}) => {
    console.log("active article",activeArticle)
    console.log(index)
    return (
            <div className="cards" key={index} style={activeArticle===index?{borderBottom:"2px solid blue"}:null}>
                <img src={article.urlToImage} alt="News Article"/>
                <div style={{display:"flex",justifyContent:"space-between"}}> 
                    <p>{(new Date(article.publishedAt)).toDateString()}</p>
                    <p>{article.source.name}</p>
                </div>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <button><a href={article.url} style={{display:"flex",justifyContent:"space-between",textDecoration:"none",color:"purple"}}><p>Learn More</p> <p>{index+1}</p></a></button>
            </div>
    );
};

export default NewsCard;