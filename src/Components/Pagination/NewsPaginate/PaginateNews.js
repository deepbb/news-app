import "./PaginateNews.css"

function PaginateNews({newsPerPage, newsPaginate, totalNews}) {
    const newsCount = []


    for(let i = 1; i<= Math.ceil(totalNews / newsPerPage); i++) {
        newsCount.push(i)
    }
  return (
    <div className="newsPaginate">
    <span className="next">Next pages</span>
     <span className="numbers">
            {newsCount.map((number , index)  => (
                <p key={index} className="newsLists">
                    <a className="pageLink" onClick={()=> newsPaginate(number)} href="!#">{number}</a>
                </p>
            ))}
        </span>
    
    </div>
  )
}

export default PaginateNews