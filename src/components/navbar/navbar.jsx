import "../navbar/createFlash.css"
import { Link } from "react-router-dom"


function Navbar(){
    return <div>
          <h1 className="title"> Create flashcard </h1>
         <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="row navitems">
    <Link  to="/" className="navbar-item col-sm-6">CreateNew</Link>
    <Link to="myflashcard" className="navbar-item col-sm-6">My Flashcard</Link>
  </div>
 
</nav>  
     </div>
    </div>
}

export default Navbar