import "./Navbar.css"
import categories from "../data"

function Navbar({setCategory}) {
  return (
    <div className="navbar">
        <h3 className="heading">SMART NEWS</h3>
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

export default Navbar