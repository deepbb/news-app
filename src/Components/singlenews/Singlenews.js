import "./Singlenews.css"
function Singlenews({articles}) {
  return (
    <div className="news">
      <div className="newsCard">
        <div className="imageContainer">
        <div className="newstext">
        <div className="author">
        <span><b style={{color:"red"}}>Short by</b> {articles.author}</span>
        <span>published at  {articles.publishedAt}</span>
        </div>
        
        <h3 className="content">{articles.title}</h3>
        {/* <p className="contentSescription">{articles.description}</p> */}
        <img className="newsImg" src={articles.urlToImage} alt={articles.title} />
        <div>
        <a className="urlLink" href={articles.url} target="_blank" rel="noreferrer">
         <span> <b style={{color:"orange"}}>Read full news on</b></span>  {articles.source.name}
        </a>
        </div>
         </div>
        </div>
       
        
     </div>
    </div>
  )
}

export default Singlenews