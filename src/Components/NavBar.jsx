import { Link } from "react-router-dom";
import "../CSS/Navbar.css"

function NavBar(){
    return(
        <nav className="navbar" >
            <div className="navbar-brand" >
                 <Link to="/" >Moviefinder</Link>
            </div>
            <div className="navbar-link" >
                <Link to="/" className="nav-link" >Home</Link>
                <Link to="/favorite" className="nav-link" >Favorties</Link>
                <Link to="/aboutus" className="nav-link" >Aboutus</Link>
                <Link to="/contactus" className="nav-link" >Contactus</Link>
            </div>

        </nav>
    )
}

export default NavBar;