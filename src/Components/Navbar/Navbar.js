import { useState } from "react"
import Category from "../Category"
import "./Navbar.css"

function Navbar( {setCategory}) {

  const [modal ,setModal] = useState(false)

  const handleClick = ()=> {
    setModal(true)
  }
  const closeModal = ()=> {
    setModal(false)
  }

 
  return (
    <div className="navbar">
        <h3 className="heading">SMART NEWS</h3>
        {
          modal &&  
        <Category setCategory={setCategory} />
        }
        {
          modal ? <button className="closeBtn" onClick={closeModal}>close</button> : 
        <button className="closeBtn" onClick={handleClick}>Categories</button>

        }

        
  
    </div>
  )
}

export default Navbar