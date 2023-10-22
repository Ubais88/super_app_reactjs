import React, { useEffect } from 'react'
import Style from "./News.module.scss"
import { useState } from 'react'

const News = () => {
      const [news , setNews] = useState({
        title:"",
        desc:"",
        imagerUrl:""
      })
      const [showDate , setShowDate] = useState({
        date:"",
        time:"",
      })

      useEffect(() => {
        const fetchData = async () => {
          try{
            const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a4741b142c01468786c5f377fe7cf9c9`);
            const news = await data.json();

            console.log(news.articles[0])
            const date1 = news.articles[0].publishedAt; 

            const date = date1.split("T")[0];
            let formatdate = date.split("-")
            const updatedDate = `${formatdate[1]}-${formatdate[2]}-${formatdate[0]}`
            // console.log(updatedDate);

            let time = date1.split("T")[1];
            const index = time.lastIndexOf(":")
            time = time.substring(0 , index)
            // console.log(time);

            setShowDate({
              date:updatedDate,
              time:time
            })
            setNews({
              title:news.articles[0].title,
              desc:news.articles[0].description,
              imagerUrl:news.articles[0].urlToImage,
            })
          }

          catch(error){
            console.log("error while fetching news: ", error);
          }
        }

        fetchData();

      },[])

  return (
    <div className={Style.main}>
      <img src={news.imagerUrl} alt="image" className={Style.img} />
      <div className={Style.headingbox}>
      <div className={Style.datecontainer}>
        <h2 className={Style.heading}>{news.title}</h2>
          <span className={Style.datetime}>{showDate.date} | {showDate.time}</span>
        </div>
      </div>
      <p className={Style.para}>{news.desc}</p>
    </div>
  )
}

export default News