import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import {alanKey} from './alanKey'
import NewsCards from './components/NewsCards/NewsCards';
import alan from './assets/images/alan.jpg'

const App = () => {
    const [newsArticles,setNewsArticles]=useState([])
    const [activeArticle,setActiveArticle]=useState(-1)
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,data})=>{
                if(command==='sourceNews'){
                    console.log(data)
                        setNewsArticles(data)
                }else if(command==='highlight'){
                
                    setActiveArticle((prevState)=>prevState+1)
                }else if(command==='back'){
                    setNewsArticles(data)
                    setActiveArticle(-1)
                }
            }
        })
    },[])
    return (
        <div>
            <div className="alan-logo">
                <img src={alan} alt="alan logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
};

export default App;