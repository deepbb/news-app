import React, { useEffect, useState } from 'react'
import "./News.css"
import Paginate from './Pagination/Paginate';
import PaginateNews from './Pagination/NewsPaginate/PaginateNews';
import Singlenews from './singlenews/Singlenews';
import Singlestock from './singlestock/Singlestock';
import Weather from './weather/Weather';
const axios = require('axios');




function News({article}) {
  const [stocks,setStocks] = useState("")
  const [currentPage , setCurrentPage] = useState(1)
  const [currentNewsPage , setCurrentNewsPage] = useState(1)
  const [postPerPage] = useState(10)
  const [newsPerPage] = useState(6)
  // const [search,setSearch] = useState("")
  const options = {
    method: 'GET',
    url: 'https://latest-stock-price.p.rapidapi.com/price',
    params: {Indices: 'NIFTY 50'},
    headers: {
      'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com',
      'X-RapidAPI-Key': 'a0be6d7951msh2b7b58e6879482fp1677b5jsncda4e4c95179'
    }
  };
  useEffect(()=>{
    axios.request(options).then(function (response) {
      setStocks(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // const filteredStock = stocks.filter(stock => {
  //   return (
  //     stock.symbol.toLowerCase().includes(search.toLowerCase())
  //   )
  // })
  // console.log(filteredStock);
  //pagination for stocks component
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = stocks.slice(indexOfFirstPost , indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  //pagination for news component
  const indexOfLastNews = currentNewsPage * newsPerPage;

  const indexOfNewstPost = indexOfLastNews - newsPerPage;
  const currentNews = article.slice(indexOfNewstPost , indexOfLastNews)
  const newsPaginate = pageNumber => setCurrentNewsPage(pageNumber)
  
  


  // const handleChange = (e)=> {
  //   setSearch(e.target.value)
  // }
    
  return (
    <div className='newsContainer'>
      <div className='stockwrapper'>
      <div className='weatherContainer'>
      <span className='newshead'>Weather Report</span>
             <Weather />
             </div>
         

             <div className='stockItems'>
                  <h3 className='markethead'>MARKET ACTION</h3>
                  {/* <input className='inputtext' type="text"  onChange={handleChange} />  */}
                  <span className="headings">
                  <span className="headText">Price</span>
                  <span className="headText">Change</span>
        

               </span>
   
                    <div className='stockPaginate'>
                     {stocks && currentPosts.map((currentPosts,index)=> (
                      <Singlestock key={index} stocks={currentPosts} />
                       ))}
                     </div>
                         <Paginate postPerPage={postPerPage} 
                            totalPosts={stocks.length}
                                paginate={paginate}
                         />
                     </div>
                     
                
              </div>
              <div>
              <div className='scrollContainer'>
              <div className='newshead'>Just In News</div>
              </div>
              <div className='newswrapper'>
            {article && currentNews.map((art,index)=> (
             <Singlenews key={index} articles={art} />
            ))}
          </div>
          <PaginateNews newsPerPage={newsPerPage} 
                            totalNews={article.length}
                                newsPaginate={newsPaginate}
                         />
          </div>
    
    </div>
  )
}

export default News