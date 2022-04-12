import './App.css';
import React, { useEffect, useState } from 'react'
import News from './Components/news';
import Navbar from './Components/Navbar/Navbar';
const axios = require('axios');


function App() {
  const [article, setarticle] = useState("")
  const [category , setCategory] = useState("general")
  
  const options = {
    method: 'GET',
    url: 'https://cricket-live-score4.p.rapidapi.com/apis/series',
    headers: {
      'X-RapidAPI-Host': 'cricket-live-score4.p.rapidapi.com',
      'X-RapidAPI-Key': 'a0be6d7951msh2b7b58e6879482fp1677b5jsncda4e4c95179'
    }
  };
  useEffect(()=> {
    axios.request(options).then(function (response) {
    }).catch(function (error) {
      console.error(error);
    });
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  useEffect(()=> {
    const getNews = async ()=> {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=bb9dcd9a7bf94f97b4983ff01c97a942`)
        setarticle(res.data.articles)
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
