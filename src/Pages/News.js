import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NEWS_API } from '../Constants'
import './styles.css'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import error404 from '../assets/error404.png'
import Header from '../Components/HomePage/Header/Header';
const News = ({ header }) => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const getNews = async () => {
      const newsData = await axios.get(NEWS_API, {crossDomain: true})
      setNews(newsData.data.articles)
      console.log(newsData.data.articles)
    }
    getNews()
  }, [])
  return (
    <>
      {!header && <Header />}
      <div className='news-page-div'>
        {/* <div className='news-heading'>
          <NewspaperIcon />
          <h2>News</h2>
        </div> */}
        <div className='news-page'>
          {news.map((item, index) => (
            <div key={index} className='news-div' >
              <img width='300px' height='200px' src={item?.urlToImage ? item.urlToImage : error404} alt='logo' />
              <p key={index}>{item.source.name}</p>
              <p className='hidden-page'>{item.title}</p>
              <a href={`${item.url}`}>
                 <button className='btn'>Know more</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default News
