import "./Category.css"
import categories from "./data"


function Category({setCategory}) {
  return (
    <div className="categoryContainer">
        <div className="categortList">
  <p className="select">News Categories</p>
    {categories.map((text , index )=> (
      <button className="listItems"  onClick={() => setCategory(text)}
            key={index}>{text}</button>
    ))}
    </div>
    </div>
  )
}

export default Category