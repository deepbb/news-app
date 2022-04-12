import "./Paginate.css"

function Paginate({postPerPage , totalPosts , paginate ,}) {

    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(totalPosts /postPerPage); i++) {
        pageNumbers.push(i)
    }
    
  return (
    <div>
        <ul className="paginate">
            {pageNumbers.map(number => (
                <li className="pageLists" key={number}>
                    <a className="pageLink" onClick={()=> paginate(number)} href="!#">{number}</a>
                </li>
            ))}
        </ul>
       
        
        
       </div>
  )
}

export default Paginate