import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NEWS_API } from '../Constants'
import './styles.css'

const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            const newsData = await axios.get(NEWS_API)
            setNews(newsData.data.articles)
            console.log(newsData.data.articles[0])
        }
        getNews()
    }, [])
  return (
    <>
      {news.map((item, index) => (
        <div  className='news-div'>
            <h1 key={index}>{item.source.name}</h1>
            <img width='500px' src={item.urlToImage} />
        </div>
      ))}
    </>
  )
}

export default News
