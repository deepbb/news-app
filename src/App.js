import './App.css';
import React, { useEffect, useState } from 'react'
import News from './Components/news';
import Navbar from './Components/Navbar/Navbar';
const axios = require('axios');


function App() {
  const [article, setarticle] = useState("")
  const [category , setCategory] = useState("general")
  
  // const options = {
  //   method: 'GET',
  //   url: 'https://indian-news-live.p.rapidapi.com/news',
  //   headers: {
  //     'X-RapidAPI-Host': 'indian-news-live.p.rapidapi.com',
  //     'X-RapidAPI-Key': 'a0be6d7951msh2b7b58e6879482fp1677b5jsncda4e4c95179'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  //   setarticle(response.data)
  // }).catch(function (error) {
  //   console.error(error);
  // });


  useEffect(()=> {
    const getNews = async ()=> {
      try {
        const res = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
        setarticle(res.data.articles)
      } catch (err) {
        console.log(err);
      }
        
    }
    getNews()
},[category])
  return (
    <div className="App">
    <Navbar setCategory={setCategory} />
    <News article={article} />
    </div>
  );
}

export default App;
