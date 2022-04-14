import "./Singlestock.css"


function Singlestock({stocks ,currentPosts}) {
  return (
    <div className="stockContainer">
    <div className="elements">
    <div>
        <span className="symbol">{stocks.symbol}</span>
        </div>
       <div className="items">
       <li className="indicestexthigh"><span>{stocks.lastPrice}</span></li>
       </div>
       </div>

        
   
    
  
  
    <div className="indiceswrapper">
    <ul className="textBlock">
    {stocks.change > 0 ?
    
       <li style={{color:"green"}} className="indicestext"><span>{(stocks.change).toFixed(2)}</span></li>
        :
       <li style={{color:"red"}} className="indicestext"><span>{(stocks.change).toFixed(2)}</span></li>
        }
        </ul>
       {/* c
       <span className="indicestexthigh"><span>{indices.dayLow}</span></span> */}
        </div>
    </div>
  )
}

export default Singlestock